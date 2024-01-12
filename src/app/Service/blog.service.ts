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

	getBlogs(): Observable<Blog[]> {
		return this.http.get<Blog[]>(this.url);
	}

	getBlogById(blogId: number): Observable<Blog> {
		return this.http.get<Blog>(this.url + "/" + blogId);
	}

	saveBlog(blogData: Blog): Observable<Blog> {
		return this.http.post<Blog>(this.url, blogData);
	}

	updateBlog(id: number, blogData: Blog): Observable<Blog> {
		const url = `${this.url}/${id}`;
		console.log("Url = " + url);
		return this.http.patch<any>(url, blogData);
	}

	deleteBlog(id: number): Observable<void> {
		const url = `${this.url}/${id}`;
		return this.http.delete<void>(url);
	}
	
	setCurrentBlogId(id: number) {
		this.currentBlogId = id;
		// console.log("Inside BlogService, blog id being received = " + this.currentBlogId);
	}
	getCurrentBlogId() {
		return this.currentBlogId;
	}
}
