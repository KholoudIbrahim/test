import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModuleTsComponent } from './material.module.ts.component';

describe('MaterialModuleTsComponent', () => {
  let component: MaterialModuleTsComponent;
  let fixture: ComponentFixture<MaterialModuleTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialModuleTsComponent]
    });
    fixture = TestBed.createComponent(MaterialModuleTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
