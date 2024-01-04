import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BlogService {

	currentBlogId: number = 0;

	url = 'http://localhost:8000/blogposts';

	constructor(private http: HttpClient) { }

	// blogData: Blog = {};

	saveBlog(data: Blog): Observable<any> {
		// console.log("Inside blog service: ");
		// console.log(data);
		return this.http.post<any>(this.url, data);
	}

	getBlogs(): Observable<any> {
		return this.http.get<any>(this.url);
	}

	getBlogById(blogId: number): Observable<Blog> {
		return this.http.get<Blog>(this.url + "/" + blogId);
	}

	setCurrentBlogId(id: number) {
		this.currentBlogId = id;
		console.log("Inside BlogService, blog id being received = " + this.currentBlogId);
	}
	getCurrentBlogId() {
		return this.currentBlogId;
	}
}
