import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { BlogService } from '../Service/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  blogData: Blog[] = [];
  
  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {
    this.getBlogData();
  }

  getBlogData() {
		this.blogService.getBlogs()
			.subscribe(
				(data: any) => {
					this.blogData = data;
		})
	}

}
