import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncotradoComponent } from './nao-encotrado.component';

describe('NaoEncotradoComponent', () => {
  let component: NaoEncotradoComponent;
  let fixture: ComponentFixture<NaoEncotradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoEncotradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoEncotradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
