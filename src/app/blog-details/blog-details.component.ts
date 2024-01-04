import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../Service/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit{

  blogId = 0;
  blogData: Blog = {
    id: 0,
    title: '',
    author: '',
    content: ''
  };
  constructor(private route: ActivatedRoute, private blogService: BlogService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.blogId = params['id'];
      }
    )
    this.getBlogData();
  }

  getBlogData() {
    this.blogService.getBlogById(this.blogId).subscribe(
      (data) => {
        this.blogData = data;
      }, (error) => {
        console.log("Some error occured.");
        console.log(error);
      }
    )
  }

}
