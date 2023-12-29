import {Routes} from '@angular/router';
import {OverviewComponent} from "../overview/overview.component";
import {RiskAssesmentComponent} from "../risk-assesment/risk-assesment.component";
import {
  InteractiveRequirementDiscussionComponent
} from "../interactive-requirement-discussion/interactive-requirement-discussion.component";
import {LandingPageComponent} from "../landing-page/landing-page.component";

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'risk-assesment', component: RiskAssesmentComponent
  },
  {
    path: 'interactive-requirement-discussion', component: InteractiveRequirementDiscussionComponent
  }
];
