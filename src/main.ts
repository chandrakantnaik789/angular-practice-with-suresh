import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DashboardComponent } from './app/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-user-dashboard></app-user-dashboard>
  `,
  imports: [DashboardComponent],
})
export class App {
  name = 'Angular 17';
}

bootstrapApplication(App);
