import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() todoItem = [];

  allTodo = this.todoItem;
  completedTodo = [];
  activeTodo = [];

  constructor() {}

  ngOnInit(): void {}

  deleteItem(value: number): void{
    this.todoItem.splice(value, 1);
    this.allTodo.splice(value, 1);
    this.completedTodo.splice(value, 1);
    this.activeTodo.splice(value, 1);
  }

  checked(value: number): void{
    const par = document.querySelectorAll('.testoTodo');
    par.forEach((el, idx) => {
      if (idx === value){
        el.classList.toggle('testoThro');
      }
    });
  }
}
