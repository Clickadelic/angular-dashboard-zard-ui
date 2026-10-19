import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TodoListInterface } from './todo-list-interface';
import { LucidePlus, LucideTrash, LucidePencil, LucideX, LucideCheck } from '@lucide/angular';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, LucidePlus, LucideTrash, LucidePencil, LucideX, LucideCheck],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  // 1. Als Signal definieren
  todos = signal<TodoListInterface[]>([]);
  
  // Edit a todo's title
  editingTodoId = signal<number | null>(null);

  // Editiermodus für eine ID starten
  startEdit(id: number) {
    this.editingTodoId.set(id);
  }

  // Editiermodus abbrechen
  cancelEdit() {
    this.editingTodoId.set(null);
  }

  // Änderungen speichern
  saveEdit(id: number, newTitle: string) {
    const trimmedTitle = newTitle.trim();
    if (trimmedTitle) {
      this.todos.update(current => 
        current.map(todo => todo.id === id ? { ...todo, title: trimmedTitle } : todo)
      );
    }
    // Nach dem Speichern den Editiermodus wieder beenden
    this.editingTodoId.set(null);
  }

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

  toggleIsDone(id: number) {
    this.todos.update(currentTodos => currentTodos.map(t => ({
      ...t,
      isDone: t.id === id ? !t.isDone : t.isDone
    })));
  }

  removeTodo(index: number) {
    this.todos.update(currentTodos => currentTodos.filter((_, i) => i !== index));
  }
}