import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra2Component } from './obra2.component';

describe('Obra2Component', () => {
  let component: Obra2Component;
  let fixture: ComponentFixture<Obra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obra2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
