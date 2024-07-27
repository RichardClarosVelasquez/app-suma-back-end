import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SumatoriaService } from '../../sumatoria.service';
//import { SumatoriaService } from '.../settings';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;
  sumatorias: any[] = [];

  constructor(private sumatoriaService: SumatoriaService) {}
  ngOnInit(): void {
    this.getSumatorias();
  }

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
    // this.saveSumatoria(this.numero1, this.numero2, this.resultado);
  }

  getSumatorias(): void {
    this.sumatoriaService.getSumatorias().subscribe(data => {
      this.sumatorias = data;
    });
  }

  // saveSumatoria(numero1: number, numero2: number, resultado: number): void {
  //   this.sumatoriaService.saveSumatoria({ numero1, numero2, resultado }).subscribe(() => {
  //     this.getSumatorias();
  //   });
  // }
}
