import { Injectable } from '@angular/core';
import { Project } from './models/project';
import { Category } from './models/category';
import { Tag } from './models/tag';
import { Observable, of } from 'rxjs';
import { PROJECTS } from './data/projects';
import { CATEGORIES } from './data/categories';
import { TAGS } from './data/tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find((p) => p.id === id)!;
    return of(project);
  }

  getProjectsByCategory(id: number): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => p.category_id === id)!;
    return of(projects);
  }
  //new - Mar 5
  getSelectedCategory(id: number): Observable<Category[]> {
    const category = CATEGORIES.filter((c) => c.id === id)!;
    return of(category);
  }

  //new - Mar 5
  getSelectedTag(id: number): Observable<Tag[]> {
    const tag = TAGS.filter((t) => t.id === id)!;
    return of(tag);
  }

  getProjectsByTag(id: number): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => {
      if (p.tags.some((t) => t.id === id)) {
        return true;
      } else {
        return false;
      }
    })!;
    return of(projects);
  }
}
