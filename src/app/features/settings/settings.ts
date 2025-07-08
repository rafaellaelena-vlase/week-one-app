import { Component, OnInit } from '@angular/core';

import { 
  FormBuilder, 
  FormGroup,
  FormControl,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators
  } from '@angular/forms'

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})

export class Settings implements OnInit {

    settingsForm!: FormGroup;
    isNotificationEnabled = new FormControl();

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
      const locallyStoredSettings = JSON.parse(localStorage.getItem('appSettings') || '{}');
      this.settingsForm = this.fb.group({
          theme: [locallyStoredSettings.theme || 'pastel', Validators.required],
          showEmoji: [locallyStoredSettings.showEmoji !== true]
      },
      {
        validators: themeShowEmojiValidator
      }
      );

      this.isNotificationEnabled.setValue(locallyStoredSettings.isNotificationEnabled !== false);
    }

    saveSettings(): void {
      const settings = {
        ...this.settingsForm.value,
        isNotificationEnabled : this.isNotificationEnabled.value
      };
      localStorage.setItem('appSettings', JSON.stringify(this.settingsForm.value));
      alert('User Settings Saved!');
    }
}

export const themeShowEmojiValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const theme = group.get('theme')?.value;
  const showEmoji = group.get('showEmoji')?.value;

  if (theme === 'dark' && showEmoji === true) {
    return {
      darkThemeEmojiConflict: true
    }
  }
  return null;
};
