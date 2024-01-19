import { type {{NAME}}(pascalCase)ReducerModel } from '@lib/frontend/{{MODULE}}(camelCase)/stores/{{MODULE}}(camelCase)Store/{{MODULE}}(camelCase)Store.models';

export const {{NAME}}(constantCase)_REDUCER: {{NAME}}(pascalCase)ReducerModel = {
  actions: {
    setValue: (store, value) => {
      store.set('value', value);
    },
  },

  defaultState: {
    value: undefined,
  },
};
