import { Component } from '@angular/core';
import { SumatoriaService, Sumatoria } from './sumatoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;
  sumatorias: Sumatoria[] = [];

  constructor(private sumatoriaService: SumatoriaService) {}

  sumar() {
    this.sumatoriaService.createSumatoria(this.numero1, this.numero2).subscribe(sumatoria => {
      this.resultado = sumatoria.resultado;
      this.sumatorias.push(sumatoria);
    });
  }
}
