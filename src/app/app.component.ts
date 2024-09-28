import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDivider } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatDivider,
    MatIconModule,
    NgIf,
    RouterModule,
    CommonModule,
    MatNavList,
    MatList,
    MatListItem
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {

  title = 'news-app';
  articles: any = [];
  sources: any = [];
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef) { }
  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = "over";
        this.sideNav.close();
      } else {
        this.sideNav.mode = "side";
        this.sideNav.open();
      }
    });
    this.cdr.detectChanges();
  }

}
