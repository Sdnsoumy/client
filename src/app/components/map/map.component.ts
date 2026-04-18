import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  manualSearchQuery: string = '';
  locationError: string | null = null;
  selectedCategory: string = '';
  isLoading: boolean = false;
  providers: any[] = [];

  searchByAddress(): void {
    // To be implemented
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

  bookProvider(provider: any): void {
    // To be implemented
  }
}
