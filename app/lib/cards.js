export class CardClass {
  static cards = []; 

  static async getAll() {

    if(localStorage.hasOwnProperty('cards')) {
      this.cards = JSON.parse( localStorage.getItem('cards') );
    } else {
      localStorage.setItem('cards', JSON.stringify(this.cards));
    }

    return this.cards;  
  }

  static async create(title, column) {
    const newCard = {
      id: crypto.randomUUID(),
      title: title,
      column: column
    }; 

    this.cards.push(newCard);
    localStorage.setItem('cards', JSON.stringify(this.cards)); 

    return this.cards; 
  }

  static update(id, title, newColumn) {
    const newCard = {
      id: id,
      title: title,
      column: newColumn
    };

    this.cards = this.cards.map((card) => (card.id === id) ? newCard : card);
    localStorage.setItem('cards', JSON.stringify(this.cards)); 
    
    return this.cards; 
  }

  static delete(id) {
    this.cards = this.cards.filter((card) => card.id !== id);
    localStorage.setItem('cards', JSON.stringify(this.cards)); 

    return this.cards; 
  }
}