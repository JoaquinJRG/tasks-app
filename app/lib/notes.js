export class NotesClass {

  static notes = []; 

  static async getAll() { 
    // Si se ha logeado coger notas de la bd, si no coger del localstorage 

    if (localStorage.hasOwnProperty('notes')) {
      this.notes = JSON.parse( localStorage.getItem('notes') );
    } else {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    return this.notes; 
  };
  
  static searchNote(text) {
    return this.notes.filter((note) => note.text.toLowerCase().includes(text.toLowerCase())); 
  }; 

  static async add(title, text, color) {
    const newNote = {
      id: crypto.randomUUID(),
      title: title,
      text: text,
      color: color,
      date: Date.now()
    }; 
    
    this.notes.push(newNote); 
    localStorage.setItem('notes', JSON.stringify(this.notes)); 

    return this.notes; 
  }; 

  static async delete(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(this.notes)); 

    return this.notes; 
  }; 

  static async edit(id, title, text, color) {
    const newNote = {
      id: id,
      title: title,
      text: text,
      color: color,
      date: Date.now()
    }; 

    this.notes = this.notes.map((note) => (note.id == id) ? newNote : note); 
    localStorage.setItem('notes', JSON.stringify(this.notes)); 
    
    return this.notes; 
  }; 
  
}; 

