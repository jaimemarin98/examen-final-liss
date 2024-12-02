import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra5Component } from './obra5.component';

describe('Obra5Component', () => {
  let component: Obra5Component;
  let fixture: ComponentFixture<Obra5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obra5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obra5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
