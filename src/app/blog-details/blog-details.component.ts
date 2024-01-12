import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogService } from '../Service/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterModule],
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
  constructor(private route: ActivatedRoute, private blogService: BlogService, private navigate: Router) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.blogId = params['id'];
        // console.log("Blog ID = " + this.blogId);
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

  editBlog() {
    var url = "/blogedit/" + this.blogData.id; 
    console.log("URL = " + url);
    this.navigate.navigateByUrl(url);
  }

  deleteBlog() {
    this.blogService.deleteBlog(this.blogData.id)
        .subscribe(() => {
          console.log("Blog deleted successfully");
          this.navigate.navigateByUrl('/');
        });
  }

}
