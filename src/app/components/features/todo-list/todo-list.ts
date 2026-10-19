import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TodoListInterface } from './todo-list-interface';
import { LucidePlus } from '@lucide/angular';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, LucidePlus],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  // 1. Als Signal definieren
  todos = signal<TodoListInterface[]>([]);

  addTodo(todo: string) {
    if (todo) {
      // 2. Mit .update() ein neues Array reinreichen (unveränderlich / immutable)
      this.todos.update(currentTodos => [
        ...currentTodos,
        {
          id: currentTodos.length + 1,
          title: todo,
          isDone: false,
        }
      ]);
    }
  }

  removeTodo(index: number) {
    this.todos.update(currentTodos => currentTodos.filter((_, i) => i !== index));
  }
}