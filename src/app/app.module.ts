import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbButtonModule,
  NbContextMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoComponent } from './to-do/to-do.component';
import { CommentsComponent } from "./comments/CommentsComponent";
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, HomeComponent, PostsComponent, ToDoComponent, CommentsComponent, ScheduleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbCardModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
