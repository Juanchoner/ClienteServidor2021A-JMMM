import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent implements OnInit {

  constructor() { 

    
    this.obtenerObservable().pipe(
      retry(3)
    ).subscribe(
      valor => console.log('Subscripción: ', valor),
      error => console.warn('Ocurrio un error'),
      () => console.info('Terminó la subscripción')
    )

  }

  ngOnInit(): void {
  }

  obtenerObservable():Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {

        //console.log('tick')
        i++;
        observer.next(i);

        if(i == 10){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i == 2){
          //console.log('Error en subscripción 2')
          i = 0;
          observer.error();
        }

      }, 100);

    });

    return obs$;
  }

}
