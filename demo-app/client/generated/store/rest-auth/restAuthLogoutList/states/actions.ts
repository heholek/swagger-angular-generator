/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {createAction, props, union} from '@ngrx/store';

export enum Actions {
  START = '[RestAuth restAuthLogoutList] Start',
  SUCCESS = '[RestAuth restAuthLogoutList] Success',
  ERROR = '[RestAuth restAuthLogoutList] Error',
}

export const start = createAction(
  Actions.START);

export const success = createAction(
  Actions.SUCCESS,
  props<{payload: HttpResponse<void>}>(),
);

export const error = createAction(
  Actions.ERROR,
  props<{payload: HttpErrorResponse}>(),
);

const actions = union({start, success, error});
export type RestAuthLogoutListAction = typeof actions;
