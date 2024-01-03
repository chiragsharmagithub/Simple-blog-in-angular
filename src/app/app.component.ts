import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AboutComponent } from './about/about.component';
import { ExtraPageComponent } from './extra-page/extra-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    RouterLinkActive,
    RouterOutlet, 
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppHeaderComponent, 
    AboutComponent, 
    ExtraPageComponent,
    AddPostComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog_Project';
}
