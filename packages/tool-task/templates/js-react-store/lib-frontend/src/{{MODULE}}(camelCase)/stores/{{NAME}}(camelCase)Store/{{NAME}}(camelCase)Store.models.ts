import { type ReducerModel } from '@lib/frontend/state/state.models';

export type {{NAME}}(pascalCase)StateModel = {
  value: null;
}

export type {{NAME}}(pascalCase)ActionsParamsModel = {
  setValue: null;
}

export type {{NAME}}(pascalCase)ReducerModel = ReducerModel<{{NAME}}(pascalCase)StateModel, {{NAME}}(pascalCase)ActionsParamsModel>;
