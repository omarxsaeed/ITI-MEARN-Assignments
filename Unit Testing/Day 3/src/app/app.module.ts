import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { UserComponent } from './user/user.component';
import { NewsComponent } from './Components/news/news.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [AppComponent, UserComponent, TitlecasePipe, NewsComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
