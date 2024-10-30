import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: any;
  @Output() answered: EventEmitter<string> = new EventEmitter<string>();

  selectOption(option: string) {
    this.answered.emit(option);
  }
}
