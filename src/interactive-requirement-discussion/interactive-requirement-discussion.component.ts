import {Component, ElementRef, ViewChild} from '@angular/core';
import {QuestionAnswerModel} from "./question-answer.model";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-interactive-requirement-discussion',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './interactive-requirement-discussion.component.html',
  styleUrl: './interactive-requirement-discussion.component.scss',
})
export class InteractiveRequirementDiscussionComponent {
  @ViewChild('textInput') textInput!: ElementRef;
  questionAnswers: QuestionAnswerModel[];
  private SERVER_URL = 'http://localhost:3000/assistant';

  constructor(private http: HttpClient) {
    this.questionAnswers = [];
  }

  handleSubmit(): void {
    const question = this.textInput.nativeElement.value;
    this.textInput.nativeElement.value = "";
    this.fetchAnswer(question);
  }

  fetchAnswer(question: string) {
    // this.http.get(this.SERVER_URL + "/" + question).subscribe((response: any) => {
    //   const answer: string = response['message'];
    const answer = 'Great, thanks for providing that information. Based on your responses, let\'s draft a preliminary scope statement for your startup\'s Information Security Management System (ISMS): Scope of the ISMS for [Your Startup Name]: Organizational Boundaries: The ISMS encompasses the following departments: development (remote working), marketing (mixed office/remote), and platform content.'
    if (answer) {
      const newQuestionAnswer = new QuestionAnswerModel(question, answer);
      this.questionAnswers.push(newQuestionAnswer);
    } else {
      console.error("Could not parse answer from server")
    }
    // })
  }
}
