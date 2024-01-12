import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//
import { Blog } from '../models/blog.model';
import { BlogService } from '../Service/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-blog-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog-edit.component.html',
  styleUrl: './blog-edit.component.css',
})
export class BlogEditComponent implements OnInit {
  
  blogData: Blog = {
    id: 0,
    title: '',
    author: '',
    content: ''
  };

  editBlogForm!: any;

  constructor(private blogService: BlogService, private navigate: Router, private route: ActivatedRoute) {
    this.getBlogIdFromURL();
    this.getBlogData(this.blogData.id);
    this.editBlogForm = this.blogData;
  } 

  ngOnInit() {
    
  }  

  getBlogIdFromURL() {
    this.route.params.subscribe(
      (params) => {
        this.blogData.id = params['id'];
      }
    );
  }


  postBlogData() {}

  getBlogData(blogId: number) {
    this.blogService.getBlogById(blogId)
      .subscribe((data) => {
        this.blogData = data;
      })
  }

  onSubmit(editBlogForm: NgForm) {
    // addBlogForm.vaddBlogForm.setValue({});alue.Id = 2;
    console.log(editBlogForm.value);
    // this.blogData.push(addBlogForm.value);

    // console.log("Number of records in blogs: " + this.blogData.length);

    var blog_id = this.blogData.id;
    console.log("Checkpoint 1: Blog id = " + blog_id);
    console.log("editBlogForm.value = ");
    console.log(editBlogForm.value);
    console.log("Break");
    console.log("Blog data =");
    console.log(this.blogData);
    this.blogService.updateBlog(blog_id, this.blogData).subscribe(
      (data) => {
        console.log('Blog edited successfully.');
        console.log(data);
        // Add a toast to be displayed when a record is successfully saved.
        this.navigate.navigateByUrl('/');
      },
      (error) => {
        console.log('Some error occured');
        console.log(error);
      }
    );
    // Reset form's values
  }


}
