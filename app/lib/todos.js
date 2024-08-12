
export class TodosClass {
  static todos = [];

  static async getAll() {

    if (localStorage.hasOwnProperty('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    } else {
      localStorage.getItem('todos', JSON.stringify(this.todos)); 
    }

    return this.todos; 
  }; 

  static search (text) {
    return this.todos.filter((todo) => todo.text.toLowerCase().includes(text.toLowerCase())); 
  };


  static async create (text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      isDone: false
    }; 

    this.todos.push(newTodo); 
    localStorage.setItem('todos', JSON.stringify(this.todos));

    return this.todos; 
  };

  static async edit (id, text, isDone) {
    const newTodo = {
      id: id,
      text: text, 
      isDone: isDone
    }; 

    this.todos = this.todos.map((todo) => (todo.id === id) ? newTodo : todo); 
    localStorage.setItem('todos', JSON.stringify(this.todos));

    return this.todos; 
  };

  static async delete (id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));

    return this.todos; 
  };


}; 