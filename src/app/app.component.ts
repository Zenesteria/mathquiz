import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ReactiveFormsModule, NgxSemanticModule],
})
export class AppComponent {
  num1!: number;
  num2!: number;
  correctAnswer!: number;
  correctAttempts: number = 0;
  incorrectAttempts: number = 0;
  formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      userAnswer: new FormControl(0, [Validators.required]),
    });
    this.generateQuestion();
  }

  generateQuestion() {
    this.formGroup.value.userAnswer = null;
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.correctAnswer = this.num1 + this.num2;
  }

  checkAnswer() {
    if (this.formGroup.value.userAnswer === this.correctAnswer) {
      this.correctAttempts++;
    } else {
      this.incorrectAttempts++;
    }
    this.generateQuestion();
  }
}
