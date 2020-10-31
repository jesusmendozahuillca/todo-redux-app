import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "./models/todo.model";
import {filtroValidos} from "../filtro/filtro.actions";

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtroValidos): Todo[] {
    console.log(filtro);
    switch ( filtro ) {
      case 'completados':
        return todos.filter( todo => {
          return todo.completado == true;
        });
      case 'pendientes':
        return todos.filter( todo => {
          return todo.completado == false;
        } );
      default:
        return todos;
    }
  }

}
