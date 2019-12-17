import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ScheduleService {
  leagueSchedule: any[] = [
    {
      matchType: "T20...",
      league: "CTCL 2019 Summer T20 League...",
      level: "Div A"
    },
    {
      homeTeam: "Lions",
      guestTeam: "Tigers",
      date: "Dec 8 2019",
      matchNumber: 12,
      ground: "Round Rock Cricket Ground",
      umpire: "Basit Zabair"
    },
    {
      homeTeam: "Lions",
      guestTeam: "Laggan",
      date: "Dec 15 2019",
      matchNumber: 12,
      ground: "Loyola Cricket Ground",
      umpire: "Aamir Khan"
    },
    {
      homeTeam: "Test",
      guestTeam: "Test",
      date: "test",
      matchNumber: "test",
      ground: "test",
      umpire: "test"
    }
  ];
  getName(){
    return 'athar';
  }

  constructor() {}
}
