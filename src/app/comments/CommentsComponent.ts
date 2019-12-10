import { Component } from "@angular/core";
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
      .get("https://jsonplaceholder.typicode.com/")
      .subscribe(response => {
        this.comments = response;
      });
  }
}
