import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { MathComponent } from './Components/math/math.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'products',
    pathMatch: 'full',
    component: OrdersComponent,
    children: [],
  },
  {
    path: 'products/:pid',
    pathMatch: 'full',
    component: ProductDetailsComponent,
  },
  { path: 'about-us', pathMatch: 'full', component: AboutUsComponent },
  { path: 'contact-us', pathMatch: 'full', component: ContactUsComponent },
  { path: 'math', pathMatch: 'full', component: MathComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
