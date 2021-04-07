import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';


declare var onClickCalcular:any;
declare var onchangeNum:any;
declare var onChangeLista:any;
declare var Calcular:any;

@Component({
    selector: 'calculadora',
    templateUrl: './cal.component.html',
    styleUrls: ['./cal.component.css']
})




export class MicomponenteCalculadora implements OnInit{
    ngOnInit(){};
    
    /*title = 'ejemAngular';*/
    private num1: number;
    private num2: number;
    private Operacion: "";
    public resu:number;
    private loop: false;

  
    constructor(){
        console.log("se cargo el componente calculadora");
     
    }

    
    onClickCalcular(){
        Calcular();
    }

    onchangeNum(){
        onChangeLista();
        Calcular();
    }

   
}