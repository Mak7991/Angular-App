import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemsComponent } from './add-todo-items.component';

describe('AddTodoItemsComponent', () => {
  let component: AddTodoItemsComponent;
  let fixture: ComponentFixture<AddTodoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoItemsComponent]
    });
    fixture = TestBed.createComponent(AddTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
