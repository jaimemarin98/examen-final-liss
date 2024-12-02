import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra4Component } from './obra4.component';

describe('Obra4Component', () => {
  let component: Obra4Component;
  let fixture: ComponentFixture<Obra4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obra4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obra4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
