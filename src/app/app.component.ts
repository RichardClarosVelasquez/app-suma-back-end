import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from '@core';
import { SumatoriaService, Sumatoria } from './sumatoria.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;
  sumatorias: Sumatoria[] = [];

  constructor(private sumatoriaService: SumatoriaService,private preloader: PreloaderService) {}

  sumar() {
    this.sumatoriaService.createSumatoria(this.numero1, this.numero2).subscribe(sumatoria => {
      this.resultado = sumatoria.resultado;
      this.sumatorias.push(sumatoria);
    });
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.preloader.hide();
  }

}

// export class AppComponent implements OnInit, AfterViewInit {
//   constructor(private preloader: PreloaderService) {}
//   ngOnInit() {}
//   ngAfterViewInit() {
//     this.preloader.hide();
//   }
// }
