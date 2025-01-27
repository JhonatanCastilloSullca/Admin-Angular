import { Component, ViewEncapsulation, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  isSidebarVisible = true;
  submenuStates: { [key: string]: boolean } = {};

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    if (this.isSidebarVisible) {
      this.renderer.removeClass(this.document.body, 'sidebar-folded');
    } else {
      this.renderer.addClass(this.document.body, 'sidebar-folded');
    }
  }

  toggleSubmenu(menuKey: string) {
    this.submenuStates[menuKey] = !this.submenuStates[menuKey];
  }
}
