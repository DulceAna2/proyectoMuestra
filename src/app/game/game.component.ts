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
      { text: '¿Qué es 0 / 0?', options: ['indeterminacion', 'infinito', '0'], answer: 'indeterminacion' },
      { text: '¿Quién pintó la mona lisa', imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",options: ['"Picasso','Miguel Ánge','Monet'], answer: 'Leonardo da Vinc'},
      { text: '"¿En qué año murió Freddie Mercury', options: ['1990','1995','1994'], answer: '1991'},
      { text: '¿En qué año comenzo la Primera Guerra Mundial',options: ['1918','1945'], answer: '1914'},
      { text: '¿Cuál era el nombre de pila de Che Guevara?', options: ['Julio','Roberto','Cesar'], answer: 'Ernest'},
      { text: '"¿Cuánto duró “La Guerra de los Cien Años”', options: ['100 años','99 años','114 años'], answer: '"116 años'},
      { text: '"¿Quién escribió "La metamorfosis"', options: ['Jane Auste','Edgar Allan Poe','"Miguel de Cervante'], answer: '"Franz Kafk'},
      { text: '"¿Dónde nació Juana de Arco?',imagen:'', options: ['Inglaterra','España','Alemania'], answer: ' Francia'},
      { text: '¿Dónde se encuentra la Sagrada Familia',imagen:'', options: ['Madrid','Sevilla','Valencia'], answer: 'Barcelona'},
      { text: '"¿Cómo se denomina el resultado de la multiplicación', options: ['Diferencia','Suma','Cociente'], answer: 'Producto'},
      { text: '¿Cuál es la montaña más alta del planeta?',imagen:'', options: ['Makala','K2','Aconcagua'], answer: 'Everest'},
      { text: '¿Qué año llegó Cristóbal Colón a América?',
        imagen:'https://ar.usembassy.gov/wp-content/uploads/sites/111/2023/02/02388v.jpeg',
         options: ['1503','1495','1403'], answer: '1492'},
      { text: 'Si 50 es el 100%, ¿Cuánto vale el 90?', options: ['40','25','43'], answer: '45'},
      { text: '¿Cuál es el segundo planeta en el sistema solar?',
        imagen:'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/14AAC/production/_105225648_1-1.jpg.webp', 
        options: ['Marte','Tierra','Mercurio'], answer: 'Venus'},
      { text: '¿Qué significan las siglas AFA?',
        imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWVdcAnZcsKLV1O-AuTpWNjounFkEcyex6g&s', 
        options: ['Alianza Fenomenal de Argentino','Agrupacion Fanatica de Argentina','Asociacion de Federados Argentino'], answer: 'Asociación del Fútbol Argentino'},
      { text: '¿Cuál es el primer libro de la Biblia?',
        imagen:'https://catolicismodigital.com/wp-content/uploads/2021/08/interpretacion-biblia.jpg"', 
        options: ['Exodo','Salmos','Antiguo Testamento'], answer: 'Genesis'},
      { text: 'Qué pieza de ajedrez puede hacer un movimiento en forma de L?',
        imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_game_Staunton_No._6.jpg/275px-Chess_game_Staunton_No._6.jpg"', 
        options: ['Peon','Reina','Torre'], answer: 'Caballo'},
      { text: '¿Cual es el nombre completo de Belgrano?',
        imagen:'https://www.undef.edu.ar/wp-content/uploads/2020/06/header_belgrano.jpg', 
        options: ['Manuel Belgrano','Joaquin Manuel Belgrano','Domingo Manuel Belgrano'], answer: 'Manuel José Joaquín del Corazón de Jesús Belgrano'},
      { text: '',imagen:'', options: [], answer: ''},
      { text: '',imagen:'', options: [], answer: ''},
      { text: '',imagen:'', options: [], answer: ''},
      { text: '',imagen:'', options: [], answer: ''},
      { text: '',imagen:'', options: [], answer: ''},
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

