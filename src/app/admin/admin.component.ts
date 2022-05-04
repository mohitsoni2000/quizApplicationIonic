import { Component, OnInit } from '@angular/core';
import { QuestionModel } from './question.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  questionObj: QuestionModel = new QuestionModel();
  questionArray: QuestionModel[] = [];
  selectdIndex: number = -1;

  constructor() {}

  ngOnInit() {}

  add() {
    console.log('on Add');
    if (!this.questionObj.question || this.questionObj.question == '') {
      alert('Please Enter question field');
      return;
    }
    if (this.questionObj.optionArray) {
      let selectedRadio = false;
      let isEmptyField = false;
      for (let i = 0; i < this.questionObj.optionArray.length; i++) {
        if (this.questionObj.optionArray[i].text == '') {
          console.log('inside conditon3');

          isEmptyField = true;
        }
        if (this.questionObj.optionArray[i].correct == true) {
          console.log('inside conditon4');

          selectedRadio = true;
        }
      }
      console.log('inside selectedRadio', selectedRadio);
      console.log('inside isEmptyField', isEmptyField);

      if (isEmptyField || !selectedRadio) {
        alert('There is some error, pls check all options fields first');
        console.log('inside conditon1');
        return;
      }
    }
    if (this.questionObj.question) {
      let checkExists = false;
      for (let i = 0; i < this.questionArray.length; i++) {
        if (this.questionObj.question == this.questionArray[i].question) {
          checkExists = true;
          alert('Repeated Question!');
        }
      }
      if (checkExists == false) {
        console.log('this.questionArrayh.....', this.questionArray);
        this.questionArray.push(JSON.parse(JSON.stringify(this.questionObj)));
        console.log('this.questionObj', this.questionObj);
      }
    }
    localStorage.setItem('Questions', JSON.stringify(this.questionArray));
    this.questionObj = new QuestionModel();
  }

  onRadioChange(ind: number) {
    console.log('onRadioChange........................', ind);
    this.questionObj.optionArray.forEach((el: any) => {
      el.correct = false;
    });
    this.questionObj.optionArray[ind].correct = true;
  }
}
