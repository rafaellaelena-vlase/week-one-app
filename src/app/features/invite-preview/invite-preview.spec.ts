import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePreview } from './invite-preview';

describe('InvitePreview', () => {
  let component: InvitePreview;
  let fixture: ComponentFixture<InvitePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
