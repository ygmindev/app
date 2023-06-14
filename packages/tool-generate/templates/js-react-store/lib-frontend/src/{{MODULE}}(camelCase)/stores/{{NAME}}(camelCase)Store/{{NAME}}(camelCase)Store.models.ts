import type { ReducerModel } from '#lib-frontend/state/state.models';

export interface {{NAME}}(pascalCase)StateModel {
  value: null;
}

export interface {{NAME}}(pascalCase)ActionsParamsModel {
  setValue: null;
}

export interface {{NAME}}(pascalCase)ReducerModel extends ReducerModel<{{NAME}}(pascalCase)StateModel, {{NAME}}(pascalCase)ActionsParamsModel> {}
