import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodLogger } from './mood-logger';

describe('MoodLogger', () => {
  let component: MoodLogger;
  let fixture: ComponentFixture<MoodLogger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodLogger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodLogger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
