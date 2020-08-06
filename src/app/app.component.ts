import { Component } from '@angular/core';
import { MyApiService } from "./services/myapi.service";
import { Comment } from "./serviceclass/comment";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Post } from './serviceclass/Post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  commentsArr:Comment[];
  //returnPost:Post;
  returnPost = new Post();
  constructor(private myApi:MyApiService){}

  title = 'ServiceDemoApp';
 
 
  ngOnInit(){
    // this.myApi.getAllComments().subscribe(
    //   //any xyz name can be used in place of comments
    //   comments=>{
    //     console.log(comments);
    //     this.commentsArr=comments;
    //   } 
   
    //   );
    var post= new Post();
    post.body="This is post body";
    post.title="This is post title";
    post.userId=5;

    this.myApi.postComment(post).subscribe(
      data=>{
        this.returnPost=data;
        console.log(this.returnPost);
      }
    );
    
  }
  userid:String;
  show(){
    this.myApi.getCommentByUserId(this.userid).subscribe(
      userComments=>{
        this.commentsArr=userComments; 
      }
    );
 

    }


  }
