import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { DarkModeDirective } from './Directives/dark-mode.directive';
import { HighlightProductDirective } from './Directives/highlight-product.directive';
import { DefaultImagePipe } from './Pipes/default-image.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { MathComponent } from './Components/math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    ProductDetailsComponent,
    OrdersComponent,
    DarkModeDirective,
    HighlightProductDirective,
    DefaultImagePipe,
    FilterPipe,
    MathComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
