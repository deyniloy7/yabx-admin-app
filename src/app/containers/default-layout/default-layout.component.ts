import { ThemeService } from './../../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.setDarkTheme();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  toggleTheme(event) {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
}
