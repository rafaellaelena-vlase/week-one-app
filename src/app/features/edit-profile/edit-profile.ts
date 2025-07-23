import { Component, ViewChild } from '@angular/core';
import { CanComponentDeactivate } from '../services/leave-guard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss'
})
export class EditProfile implements CanComponentDeactivate{

  @ViewChild('form')
  editForm!: NgForm;
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
    this.editForm.reset(this.userObj);
  }

  canDeactivate(): boolean {
    if (this.editForm.dirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
