import { Component } from '@angular/core';

@Component({
  selector: 'app-weighting',
  templateUrl: './weighting.component.html',
  styleUrl: './weighting.component.css'
})
export class WeightingComponent {
  codicePesata: string = '';
  numero: number = 0;
  inputArray: string[] = [];  // Array per gli input generati
  inputsValidi: boolean[] = []; // Array di validità degli input (true se l'input è pieno)


  ngOnInit(): void {
    // Inizializza il codice pesata al caricamento del componente
    this.codicePesata = this.generatePesataCode();
  }

  generateInputs() {
    this.inputArray = Array.from({ length: this.numero }, () => '');
    this.inputsValidi = Array(this.numero).fill(false);
  }

  generatePesataCode(): string {
    const randomDate = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1);
    const formattedDate = randomDate.toISOString().split('T')[0]; // Formatta la data come YYYY-MM-DD
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase(); // Genera un codice casuale
   return `${formattedDate}_${randomCode}`;
  }

   // Funzione per validare un singolo input
   validateInput(index: number, value: string) {
    console.log(value.trim() !== '')
    this.inputsValidi[index] = value.trim() !== '';  // Se l'input non è vuoto, è valido
  }

  // Funzione per verificare se tutti gli input sono validi
  areAllInputsValid(): boolean {
    return this.inputsValidi.every(valid => valid);  // Verifica se tutti gli input sono validi
  }

  // Funzione chiamata quando il bottone è cliccato
  onSubmit() {
    alert('Pesi inviati');
  }
}
