import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  menuOpen = false;
  isDesktop = false;

  ngOnInit() {
    this.checkDesktop();
    window.addEventListener('resize', this.checkDesktop.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkDesktop.bind(this));
  }

  checkDesktop() {
    this.isDesktop = window.innerWidth > 800;
    if (this.isDesktop) {
      this.menuOpen = false;
    }
  }

  closeMenuIfMobile() {
    if (!this.isDesktop) {
      this.menuOpen = false;
    }
  }
}
