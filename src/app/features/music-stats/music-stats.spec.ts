import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicStats } from './music-stats';

describe('MusicStats', () => {
  let component: MusicStats;
  let fixture: ComponentFixture<MusicStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
