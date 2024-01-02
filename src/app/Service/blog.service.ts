import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';

@Injectable({
	providedIn: 'root'
})
export class BlogService {

	url = 'http://localhost:8000/blogposts';

	constructor(private http: HttpClient) { }

	// blogData: Blog = {};

	saveBlog(data: Blog) {
		// console.log("Inside blog service: ");
		// console.log(data);
		return this.http.post<any>(this.url, data);
	}

	getBlogs() {

	}

	getBlogById() {

	}
}
