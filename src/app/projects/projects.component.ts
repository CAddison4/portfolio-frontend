import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  projects: Project[] = [];
  getProjects(): void {
    // this.projects = this.projectService.getProjects();
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('cat id', id);
    this.projectService
      .getProjectsByCategory(id)
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByTag(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getProjectsByTag(id)
      .subscribe((projects) => (this.projects = projects));
  }

  //new Mar 5:
  selectedCategories: Category[] = [];
  getSelectedCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getSelectedCategory(id)
      .subscribe(
        (selectedCategories) => (this.selectedCategories = selectedCategories)
      );

    console.log('selectedCategories', this.selectedCategories);
  }

  selectedTags: Tag[] = [];
  getSelectedTag(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getSelectedTag(id)
      .subscribe((selectedTags) => (this.selectedTags = selectedTags));
  }

  //clearSelected
  clearFilter(): void {
    // this.projects = this.projectService.getProjects();
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      console.log('test', this.route.snapshot.url);
      console.log('segment', segment);

      if (segment === 'categories') {
        this.getProjectsByCategory();
        this.getSelectedCategory();
      } else if (segment === 'tags') {
        this.getProjectsByTag();
        this.getSelectedTag();
      } else {
        this.getProjects();
      }
    });
  }

  // @Input() selectedCategory: Category | undefined;
  // @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  // @Input() selectedTag: Tag | undefined;
  // @Output() newTagFilterEvent = new EventEmitter<Tag>();

  // @Input() selectedProject?: Project;
  // onSelect(project: Project): void {
  //   this.selectedProject = project;
  // }
  // clearSelectedProject(): void {
  //   this.selectedProject = undefined;
  // }

  // handleCategoryClick(category: Category) {
  //   this.selectedCategory = category;
  //   this.newCategoryFilterEvent.emit(category);
  //   this.selectedTag = undefined;
  // }

  // handleTagClick(tag: Tag) {
  //   this.selectedTag = tag;
  //   this.newTagFilterEvent.emit(tag);
  //   this.selectedCategory = undefined;
  // }

  // clearSelected() {
  //   this.selectedCategory = undefined;
  //   this.selectedTag = undefined;
  // }
}
