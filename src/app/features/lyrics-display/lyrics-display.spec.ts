import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsDisplay } from './lyrics-display';

describe('LyricsDisplay', () => {
  let component: LyricsDisplay;
  let fixture: ComponentFixture<LyricsDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyricsDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
