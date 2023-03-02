import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

import { Project } from './models/project';
import { Category } from './models/category';
import { Tag } from './models/tag';

export class Year {
  year: number = 2022;

  constructor() {
    const date = new Date();
    const year = date.getFullYear();

    return { year: year };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.projects.scss'],
})
export class AppComponent {
  title = "Catherine Addison's Portfolio";

  public year = new Year().year;

  selectedCategory: Category | undefined;

  handleCategoryClick(category: Category) {
    this.selectedCategory = category;
    this.selectedTag = undefined;
  }

  selectedTag: Tag | undefined;

  handleTagClick(tag: Tag) {
    this.selectedTag = tag;
    this.selectedCategory = undefined;
  }

  selectedProject: Project | undefined;

  clearSelected() {
    this.selectedCategory = undefined;
    this.selectedTag = undefined;
  }
}
export { Project, Tag, Category };
