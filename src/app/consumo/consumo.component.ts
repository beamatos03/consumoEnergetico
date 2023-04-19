import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent {
  maquina : boolean = false;
  secadora : boolean = false;
  qtdMoradores : number = 0;
  qtdComodos : number = 0;
  qtdTV : number = 0;
  qtdPC : number =0;
  valor : number = 0;
  nome : string = "";
  resultado : string = "";
  consumoBanho : number = 0;
  consumoTV : number = 0;
  consumoPC : number = 0;
  consumoMaq : number = 0;
  consumoSec : number = 0;
  consumoLamp : number = 0;
  consumoTotal : number = 0;
  valorTotal : string = "";
  consumo : string = "";

  chuveiroWatts : number = 5000;
  TVWatts : number = 200;
  PCWatts : number = 350;
  secWatts : number = 3500;
  lampWatts : number = 60;
  maqWatts : number = 1000;

Consumo(){
  if(this.secadora){
    this.consumoSec = (3500*1*12)/1000;
    //(consumo*horas*dias)100
  } else{
    this.consumoSec = 0;
  }
  if(this.maquina){
    this.consumoMaq= (1000*2*12)/1000;
    //(consumo*horas*dias)100
  } else{
    this.consumoSec = 0;
  }

    this.consumoPC = this.calcular(this.PCWatts, 5, 30, this.qtdPC);
    this.consumoTV = this.calcular(this.TVWatts, 4, 30, this.qtdPC);
    this.consumoBanho = this.calcular(this.chuveiroWatts, 0.166667, 30, this.qtdMoradores);
    this.consumoLamp = this.calcular(this.lampWatts, 8,30, this.qtdComodos);

  this.valorTotal = "R$"+(this.consumoTotal * this.valor).toFixed(2);
  this.consumo = this.consumoTotal.toFixed(2) + "kWh"

  }


calcular(watts: number, horas: number, dias: number, qtd: number):number{
  let consumo = 0;

  if(qtd>0){
  consumo = ((watts*horas*dias)/1000)*qtd;
  }

  this.consumoTotal += consumo;
  return consumo;
}

}
