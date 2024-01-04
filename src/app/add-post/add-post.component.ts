import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//
import { Blog } from '../models/blog.model';
import { BlogService } from '../Service/blog.service';
// import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {

	constructor(private blogService: BlogService) {}

	blogData: Blog[] = [];

	postBlogData() {

	}

	onSubmit(addBlogForm: NgForm) {
		// addBlogForm.vaddBlogForm.setValue({});alue.Id = 2;
		// console.log(addBlogForm.value);
		// this.blogData.push(addBlogForm.value);
		
		// console.log("Number of records in blogs: " + this.blogData.length);
		this.blogService.saveBlog(addBlogForm.value)
			.subscribe(
				(data) => {
					console.log("Blog saved successfully.");
					console.log(data);
					// Add a toast to be displayed when a record is successfully saved.
				},
				(error) => {
					console.log("Some error occured");
					console.log(error);	
				}
			)
			// Reset form's values
	}


	ngOnInit(): void {
		
	}

	
}
