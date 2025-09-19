import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceInputComponent } from './referenceInput.component';

describe('ReferenceInputComponent', () => {
  let component: ReferenceInputComponent;
  let fixture: ComponentFixture<ReferenceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
