import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent {
  comments = null;

  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/comments")
      .subscribe(response => {
        this.comments = response;
      });
  }
  
}
