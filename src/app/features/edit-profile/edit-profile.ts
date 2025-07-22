import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss'
})
export class EditProfile {
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
