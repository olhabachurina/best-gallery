import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDetailsComponent } from './picture-details.component';

describe('PictureDetailsComponent', () => {
  let component: PictureDetailsComponent;
  let fixture: ComponentFixture<PictureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
