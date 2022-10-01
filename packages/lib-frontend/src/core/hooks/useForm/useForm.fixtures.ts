import type { UseFormParamsModel } from '@lib/frontend/core/hooks/useForm/useForm.models';

export interface FormFixtureModel {
  numberField: number;
  stringField: string;
  stringFieldOptional?: string;
}

export const FORM_FIXTURE_PARAMS: UseFormParamsModel<FormFixtureModel> = {
  initialValues: {
    numberField: 0,
    stringField: '',
  },
};
