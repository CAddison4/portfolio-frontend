import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @ViewChild('navigationMenu')
  navigationMenu!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver) {}

  showNav = false;
  toggleMenu() {
    this.showNav = !this.showNav;
    // this.navigationMenu.nativeElement.classList.toggle('show');
  }

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
      });
  }
}
