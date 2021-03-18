import { Component, OnInit } from '@angular/core';
//import { resolve } from 'dns';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  usuarios: any;

  constructor() { }

  ngOnInit(): void {
   /*const promesa = new Promise((resolve, reject) => {

      //console.log("Esta es una nueva promesa")
      if(false){
        resolve("Esta es una nueva promesa");
      }
      else{
        reject("ocurrio un error");
      }
      
    });
  promesa.then((datos) => {
    console.log(datos);
  })

    promesa.catch((datos) => {
      console.log(datos);
    })
    console.log("Fin del evento NgOnInit")*/
//this.obtenerUsuarios().then(datosUsuarios => console.log(usuarios));
    this.obtenerUsuarios().then((datosUsuarios) => {
      this.usuarios = datosUsuarios;
      //
    });
  }


obtenerUsuarios(){
  const promesa = new Promise((resolve)=>{

    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(res => resolve(res.data))

  });

return promesa;

}

}
