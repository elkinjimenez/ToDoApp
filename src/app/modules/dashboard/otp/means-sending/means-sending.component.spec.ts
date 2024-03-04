import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansSendingComponent } from './means-sending.component';

describe('MeansSendingComponent', () => {
  let component: MeansSendingComponent;
  let fixture: ComponentFixture<MeansSendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeansSendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeansSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
