import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/blog.model';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
