import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
    userObj: any = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      mood: 'Happy',
      isTermsAgreed: false
    }

    onSave() {
      const formValue = this.userObj;
    }

}
