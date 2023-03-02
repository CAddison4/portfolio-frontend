import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService) {}
  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
  ngOnInit(): void {
    this.getCategories();
  }

  @Input() selectedCategory: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  handleCategoryClick(category: Category) {
    this.selectedCategory = category;
    this.newCategoryFilterEvent.emit(category);
  }
}
