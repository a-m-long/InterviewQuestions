import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from 'src/app/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: AngularFirestore) { }

  getBlogPosts(){
    return this.firestore.collection('blog').snapshotChanges();
  }

  createBlogPosts(blog: Blog){
    return this.firestore.collection('policies').add(blog);
  }

  updatePolicy(blog: Blog){
    delete blog.id;
    this.firestore.doc('blog/' + blog.id).update(blog);
  }

  deletePolicy(blogId: string){
    this.firestore.doc('blog/' + blogId).delete();
  }




}
