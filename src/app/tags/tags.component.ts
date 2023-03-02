import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
  }
  @Input() selectedTag: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();
  handleTagClick(tag: Tag) {
    this.selectedTag = tag;
    this.newTagFilterEvent.emit(tag);
  }
}
