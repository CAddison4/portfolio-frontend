import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project';
import { Category } from '../models/category';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(): void {
    this.getProjects();
  }

  @Input() selectedCategory: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() selectedTag: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  handleCategoryClick(category: Category) {
    this.selectedCategory = category;
    this.newCategoryFilterEvent.emit(category);
    this.selectedTag = undefined;
  }

  handleTagClick(tag: Tag) {
    this.selectedTag = tag;
    this.newTagFilterEvent.emit(tag);
    this.selectedCategory = undefined;
  }

  clearSelected() {
    this.selectedCategory = undefined;
    this.selectedTag = undefined;
  }
}
