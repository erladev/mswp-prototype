import {Component} from '@angular/core';

@Component({
  selector: 'app-risk-assesment',
  templateUrl: './risk-assesment.component.html',
  styleUrl: './risk-assesment.component.scss'
})
export class RiskAssesmentComponent {

  showIssues = false; // Add this line

  toggleIssues() { // Add this method
    this.showIssues = !this.showIssues;
  }
}
