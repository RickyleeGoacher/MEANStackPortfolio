import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { QuillModule } from 'ngx-quill';

import { DashboardComponent } from './dashboard.component';
import { ThumbnailsComponent } from '../thumbnails/thumbnails.component';
import { AboutEditComponent } from '../about-edit/about-edit.component';
import { HomeEditComponent } from '../home-edit/home-edit.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ReactiveFormsModule,
      HttpClientModule,
      RouterTestingModule,
      QuillModule
      ],
      declarations: [ 
      DashboardComponent,
      ThumbnailsComponent,
      AboutEditComponent,
      HomeEditComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
