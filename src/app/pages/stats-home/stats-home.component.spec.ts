import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsHomeComponent } from './stats-home.component';

describe('StatsHomeComponent', () => {
  let component: StatsHomeComponent;
  let fixture: ComponentFixture<StatsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
