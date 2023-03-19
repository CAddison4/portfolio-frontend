import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      console.log('test', this.route.snapshot.url);
      console.log('segment', segment);

      this.getProjects();
    });
  }
}
