import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-invite-preview',
  standalone: false,
  templateUrl: './invite-preview.html',
  styleUrl: './invite-preview.scss'
})
export class InvitePreview {
  form!: FormGroup;

  namePreview: string = 'Your name here';
  emailPreview: string = 'email@example.com';
  codePreview: string = '------';

   private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        this.namePreview = values.name || 'Your name here';
        this.emailPreview = values.email || 'email@example.com';
        this.codePreview = values.code || '------';
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
