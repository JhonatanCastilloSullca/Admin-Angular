import { Component, ViewEncapsulation, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  isSidebarVisible = true;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    if (this.isSidebarVisible) {
      this.renderer.removeClass(this.document.body, 'sidebar-folded');
    } else {
      this.renderer.addClass(this.document.body, 'sidebar-folded');
    }
  }
}
