import type { {{NAME}}(pascalCase)ReducerModel } from '@lib/frontend/{{MODULE}}(pathCase)/stores/{{MODULE}}(pathCase)Store/{{MODULE}}(pathCase)Store.models';

export const {{NAME}}(constantCase)_REDUCER: {{NAME}}(pascalCase)ReducerModel = {
  actions: {
    setValue: (store, value) => {
      store.set('value', value);
    },
  },

  initialState: {
    value: undefined,
  },
};
