import { Component, Input } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NgxPaginationModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() title: string = '';
  @Input() headers: string[] = [];
  @Input() data: any[] = [];

  keys: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 16;

  ngOnInit(): void {
    if (this.data.length > 0) {
      this.keys = Object.keys(this.data[0]);
    }
  }
}
