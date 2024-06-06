import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgIf, NgClass, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log('dropdownOpen', this.dropdownOpen);
  }
}
