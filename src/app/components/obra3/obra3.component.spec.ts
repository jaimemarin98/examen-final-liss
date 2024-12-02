import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra3Component } from './obra3.component';

describe('Obra3Component', () => {
  let component: Obra3Component;
  let fixture: ComponentFixture<Obra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obra3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
