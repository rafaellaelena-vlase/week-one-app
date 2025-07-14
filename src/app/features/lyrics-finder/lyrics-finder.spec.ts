import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsFinder } from './lyrics-finder';

describe('LyricsFinder', () => {
  let component: LyricsFinder;
  let fixture: ComponentFixture<LyricsFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyricsFinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsFinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
