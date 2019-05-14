import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafeHtmlPipe } from "../../pipes/safehtml.pipe";
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientModule,
      RouterTestingModule
      ],
      declarations: [ AboutComponent, SafeHtmlPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
