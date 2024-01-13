import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { BlogService } from '../Service/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  blogData: Blog[] = [];
  count = 0;

  showAllBlogs: boolean = false;

  showBlogs() {
    this.showAllBlogs = true;
    console.log("Show blogs status = " + this.showAllBlogs);
  }

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogData();
  }

  getBlogData() {
    this.blogService.getBlogs().subscribe(
      (data: any) => {
        this.blogData = data;
      },
      (error) => {
        console.log("Some error occured.");
        console.log(error);
      }
    );
  }

  sendCurrentBlogId(blogId: number) {
    console.log("Blog ID being sent = " + blogId);
    this.blogService.setCurrentBlogId(blogId);
  }

  myFun() {
    console.log("Hello");
  }

}
