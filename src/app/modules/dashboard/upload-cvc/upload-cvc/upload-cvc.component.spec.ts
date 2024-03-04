import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCVCComponent } from './upload-cvc.component';

describe('UploadCVCComponent', () => {
  let component: UploadCVCComponent;
  let fixture: ComponentFixture<UploadCVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCVCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadCVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
