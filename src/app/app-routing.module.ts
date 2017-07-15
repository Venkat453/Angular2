import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { HeroesComponent }              from './heroes/heroes.component';
import { HerodetailComponent }          from './hero-detail/hero-detail.component';
import { ProductComponent }             from './product/product.component';
import { TestComponent }                from './test/test.component';
import { FormTemplateDrivenComponent }  from './form-template-driven/form-template-driven.component';
import { FormModelDrivenComponent }  from './form-model-driven/form-model-driven.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HerodetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'product',    component: ProductComponent },
  { path: 'test',       component: TestComponent },
  { path: 'tempDriven', component: FormTemplateDrivenComponent },
  { path: 'modelDriven',component: FormModelDrivenComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}