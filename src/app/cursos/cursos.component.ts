import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit 
{

  curso: any =
  {
    nome: null,
    descricao: null,
    email: null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm)
  {
    if(formulario.valid)
    {
      console.log(formulario);
      console.log('----- Valores do formulario');
      console.log(formulario.form.value);
      console.log('----- Valores do objeto');
      console.log(this.curso);
    }
    
  }

}
