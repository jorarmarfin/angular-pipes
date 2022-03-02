import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitan America'
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  personajes:string[]=['Ironman','Spiderman','Thor','Loki','Groot'];
  Pi:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 1234.5;
  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:'500',
    direccion:{
      calle:'Primera',
      casa:20
    }
  }

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('llego la data')
    },4500);

  });
  fecha: Date = new Date();

  videoUrl:string = 'https://www.youtube.com/embed/C6ZfuorflC4';

  activo:boolean = true;

}