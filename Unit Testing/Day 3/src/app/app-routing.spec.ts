import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsComponent } from './Components/news/news.component';

describe('Routing: App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it('Should create a component', () => {
    expect(component).toBeTruthy();
  });

  it("Should redirect to '/home' when navigating ''", fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it("Should take you to '/news' when navigating news", fakeAsync(() => {
    router.navigate(['news']);
    tick();
    expect(location.path()).toBe('/news');
  }));

  it("Should take you to '/contact' when clicking contact on the navbar", fakeAsync(() => {
    var links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    links[2].nativeElement.click();
    tick();
    expect(location.path()).toBe('/contact');
  }));

  it("Should take you to '/about' when clicking about on the navbar", fakeAsync(() => {
    var links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    links[3].nativeElement.click();
    tick();
    expect(location.path()).toEqual('/about');
  }));
});
