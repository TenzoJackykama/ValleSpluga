import { Component } from '@angular/core';
import { delay } from 'rxjs';

interface Accasification {
  chickenType: Map<String, number>;
  whorehouse: ['Categoria A', 'Categoria B', 'Categoria C'];
}

@Component({
  selector: 'app-accasamento',
  templateUrl: './accasamento.component.html',
  styleUrl: './accasamento.component.css'
})
export class AccasamentoComponent {
  constructor() {

  }
  
  accasification = {
    chickenType: new Map<string, number>([["ROSS", 24],["SA M+F", 29]]),
    whorehouse: ['Categoria A', 'Categoria B', 'Categoria C']
  }
  // Variabili per la selezione e l'input
  selectedType: string | null = null;
  selectedCategory: string | null = null;
  baseDay: number | null = null;
  selectedLabel: String = 'a'

  dateAccasion: string = '--'
  dateEndCycle: string = '--'
  breedPolletti: string = '--'
  accasionLocation: string = '--'

  onMenuChange(event: Event): void {
    let menu = (event.target as HTMLSelectElement);
    switch(menu.id) { 
      case "chickenMenu": { 
         let whorhouse = (document.getElementById('whoreHouseMenu') as HTMLSelectElement).value;
         this.calculateAccasamento(menu.value, whorhouse);
         break; 
      } 
      case "whoreHouseMenu": { 
        this.accasionLocation = menu.value
        break; 
      } 
      default: { 
         break; 
      } 
   } 
    console.log((event.target as HTMLSelectElement).id);
  }

  // Metodo per calcolare il giorno di accasamento
  calculateAccasamento(breedPolletti: string, whorouse: string): undefined {
    let currentDate = new Date();
    // Calcola la nuova data
    let newDate = new Date();
    newDate.setDate(
      currentDate.getDate() + this.accasification.chickenType.get(breedPolletti)!
      );
    console.log("new date" + newDate);

    this.dateAccasion = currentDate.toDateString()
    this.dateEndCycle = newDate.toDateString()
    this.breedPolletti = breedPolletti
  }
}
