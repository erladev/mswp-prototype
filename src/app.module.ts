import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {OverviewComponent} from "./overview/overview.component";
import {RiskAssesmentComponent} from "./risk-assesment/risk-assesment.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";


@NgModule({
  declarations: [
    LandingPageComponent,
    OverviewComponent,
    RiskAssesmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],

})
export class AppModule {
}
