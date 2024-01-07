import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  InteractiveRequirementDiscussionComponent
} from "./interactive-requirement-discussion/interactive-requirement-discussion.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {OverviewComponent} from "./overview/overview.component";
import {RiskAssesmentComponent} from "./risk-assesment/risk-assesment.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule} from "primeng/button";


@NgModule({ 
  declarations: [
    InteractiveRequirementDiscussionComponent,
    LandingPageComponent,
    OverviewComponent,
    RiskAssesmentComponent,
    BrowserAnimationsModule,
    ButtonModule,

  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes), 
  ],

})
export class AppModule {
}

