
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Post } from "../serviceclass/Post";
@Injectable()
export class MyApiService{
    //httpClient = new HttpClient();--this will not work
    constructor(private httpClient:HttpClient){} //new object
    
    getAllComments():Observable<any>{
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");


    }
    getCommentByUserId(id):Observable<any>{
        let param1=new HttpParams().set("userId",id);
    //    let param1=new HttpParams().set("userId","3");
       return this.httpClient.get("https://jsonplaceholder.typicode.com/posts",{params:param1})
    }

    postComment(post:Post):Observable<any>{
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts",post);
    }
}