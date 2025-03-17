import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTaskPage } from './list-task.page';

describe('ListTaskPage', () => {
  let component: ListTaskPage;
  let fixture: ComponentFixture<ListTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
