import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { NavBarComponent }      from './layout-pannels/nav-bar/nav-bar.component';
import { SideBarComponent }     from './layout-pannels/side-bar/side-bar.component';
import { FooterBarComponent }   from './layout-pannels/footer-bar/footer-bar.component';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HerodetailComponent }  from './hero-detail/hero-detail.component';
import { ProductComponent }     from './product/product.component';
import { TestComponent }        from './test/test.component';

import { HeroService }          from './service/hero.service';
import { ProductService }       from './service/product.service';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';



@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeroesComponent, HerodetailComponent,
    ProductComponent, TestComponent, NavBarComponent, SideBarComponent, FooterBarComponent, FormTemplateDrivenComponent, FormModelDrivenComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  bootstrap: [AppComponent, ProductComponent],
  providers: [HeroService, ProductService]
})
export class AppModule { }
