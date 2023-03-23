import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoHeaderComponent } from './kendo-header.component';

describe('KendoHeaderComponent', () => {
  let component: KendoHeaderComponent;
  let fixture: ComponentFixture<KendoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
