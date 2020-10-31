import {createAction, props} from '@ngrx/store';
import {filtroValidos} from "../filtro/filtro.actions";

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);

export const toogle = createAction(
  '[TODO] Toogle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number, texto: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
);

export const todoAll = createAction(
  '[TODO] All Todo',
  props<{ completado: boolean }>()
);

export const limpiarTodos = createAction('[TODO] Limpiar Todo');

