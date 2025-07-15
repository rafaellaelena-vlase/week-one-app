import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicBall } from './magic-ball';

describe('MagicBall', () => {
  let component: MagicBall;
  let fixture: ComponentFixture<MagicBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicBall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicBall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
