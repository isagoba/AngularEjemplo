let num1 = 0;
let num2 = 0;
let Operacion="";
let loop=false;


function onClickCalcular(){
    this.loop=true;
    Calcular(); 
}


function onChangeLista(){
    this.num1 = parseInt(document.getElementById("nume1").value);
    this.num2 = parseInt(document.getElementById("nume2").value);
    this.Operacion = document.getElementById("SelectOp").value.toUpperCase();
    loop= true;
    Calcular();

    console.log("onchangelista inicio");
}

function onchangeNum(){
    if(this.loop){
        Calcular();
    }
}




function Calcular(){

    this.num1 = parseInt(document.getElementById("nume1").value);
    this.num2 = parseInt(document.getElementById("nume2").value);
    this.Operacion = document.getElementById("SelectOp").value.toUpperCase();

    var resu="";

    if(this.Operacion=="SUMAR"){
        resu= this.num1+this.num2;
    }else if(this.Operacion=="RESTAR"){
        resu= this.num1-this.num2;
    }else if(this.Operacion=="MULTIPLICAR"){
        resu= this.num1*this.num2;
    }else{
        resu= this.num1/this.num2;
    }
    console.log("Resultado"+resu);
    document.getElementById("resultado").innerHTML=resu;
}