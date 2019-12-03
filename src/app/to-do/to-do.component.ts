import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent {
  todos = null;

  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe(response => {
        this.todos = response;
      });
  }
}
