import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';
import { Blog } from '../models/blog.model';
import { BlogService } from '../Service/blog.service';
// import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {

	constructor(private blogService: BlogService) {}

	blogData: Blog[] = [];

	getBlogData() {

	}

	postBlogData() {

	}

	onSubmit(addBlogForm: NgForm) {
		// addBlogForm.value.Id = 2;
		// console.log(addBlogForm.value);
		// this.blogData.push(addBlogForm.value);
		
		// console.log("Number of records in blogs: " + this.blogData.length);
		this.blogService.saveBlog(addBlogForm.value)
			.subscribe(
				(data) => {
					console.log("Blog saved successfully.");
					console.log(data);
				},
				(error) => {
					console.log("ERROR");	
				}
			
			)
	}


	ngOnInit(): void {

	}
}
