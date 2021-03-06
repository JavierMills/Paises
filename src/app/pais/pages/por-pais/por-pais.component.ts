import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais_interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
//viene de twoway databinding
public termino : string = '';
public ExistError : boolean = false;
public paises : Country [] = [];

  constructor( private paisService: PaisService) { }

  find(){
    this.ExistError = false;


    this.paisService.buscarPais(this.termino)
    .subscribe( (resp) => {
    console.log(resp);
  this.paises = resp;

    }, (error) => {
      this.ExistError = true;
      this.paises = [];
    })
  }


}
