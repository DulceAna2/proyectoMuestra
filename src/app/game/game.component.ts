import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [QuestionComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
    questions = [
      { text: '¿Cuál es la capital de Francia?', options: ['París', 'Londres', 'Madrid'], answer: 'París' },
      { text: '¿Qué es 9 * 7 / 3?', options: ['21', '25', '23'], answer: '21' },
      { text: '¿Qué es 2 + 2?', options: ['3', '4', '5'], answer: '4' },
      { text: '¿Qué es 0 / 0?', options: ['indeterminacion', 'infinito', '0'], answer: 'indeterminacion' }
    ];
    currentQuestionIndex = 0;
    score = 0;
    gameOver = false;
  
    get currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  
    handleAnswer(option: string) {
      if (option === this.currentQuestion.answer) {
        this.score++;
      }
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex >= this.questions.length) {
        this.gameOver = true;
        Swal.fire({
          title: '¡Juego terminado!',
          text: `Tu puntuación es ${this.score} de ${this.questions.length}.`,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    }
  
    restartGame() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.gameOver = false;
    }  
}
