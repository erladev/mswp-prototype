import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractiveRequirementDiscussionComponent} from './interactive-requirement-discussion.component';

describe('InteractiveRequirementDiscussionComponent', () => {
  let component: InteractiveRequirementDiscussionComponent;
  let fixture: ComponentFixture<InteractiveRequirementDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveRequirementDiscussionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InteractiveRequirementDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
