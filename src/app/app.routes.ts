import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExtraPageComponent } from './extra-page/extra-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

export const routes: Routes = [
    {path: "blogedit/:id", component: BlogEditComponent},
    {path: "blog/:id", component: BlogDetailsComponent},
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "extrapage", component: ExtraPageComponent},
    {path: "addpost", component: AddPostComponent},
    {path: "**", component: HomeComponent}
    // {path: "**", component: PageNotFoundComponent}
];
