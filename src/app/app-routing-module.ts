import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';

const routes: Routes = [
  { path: "learn-directive", component: ProductDropdownListComponent },
  { path: "product-dropdown-list", component: ProductDropdownListComponent },
  { path: "product-list-call-service", component: ProductListCallServiceComponent },
  { path: "service-product-image-event", component: ServiceProductImageEventComponent },
  { path: "service-product-image-event-detail/:id", component: ServiceProductImageEventDetailComponent } ,
  { path: '', redirectTo: 'service-product-image-event', pathMatch: 'full' },
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }