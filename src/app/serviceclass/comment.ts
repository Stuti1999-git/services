

export class Comment{
    postId:number;
    id:number;
    name:string;
    email:string;
    body:string;

constructor(postId,id,name,email,body){
    this.postId=postId;
    this.id=id;
    this.name=name;
    this.email=email;
    this.body=body;
}
}