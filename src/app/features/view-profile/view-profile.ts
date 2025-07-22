import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  standalone: false,
  templateUrl: './view-profile.html',
  styleUrl: './view-profile.scss'
})
export class ViewProfile {
  userData: any ={
    firstName: 'Ella',
    lastName: 'Vlase',
    userName: 'ella@musicmood.com',
    city: 'Cluj-Napoca',
    mood: 'Chill',
  }

  constructor() {}
}
