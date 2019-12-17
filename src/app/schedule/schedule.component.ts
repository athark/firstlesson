import { Component, OnInit } from "@angular/core";
import { ScheduleService } from "../schedule.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent {
  leagueSchedule: any[] = null;
  name = null;

  constructor(private ss: ScheduleService) {
    this.leagueSchedule = ss.leagueSchedule;
    //this.name=ss.getName();
  }
  getData() {
    this.name = this.ss.getName();
  }
}
