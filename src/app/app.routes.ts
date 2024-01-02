import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExtraPageComponent } from './extra-page/extra-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "extrapage", component: ExtraPageComponent},
    {path: "addpost", component: AddPostComponent},
    {path: "**", component: PageNotFoundComponent}
];
