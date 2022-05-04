import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {

  questionArray: QuestionModel[] = [];

  constructor() { }

  ngOnInit() {
    this.questionArray = JSON.parse(localStorage.getItem('Questions'));
  }

}
