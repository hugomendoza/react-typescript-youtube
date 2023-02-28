export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: Array<Todo>;
  completed: number;
  pending: number;
}