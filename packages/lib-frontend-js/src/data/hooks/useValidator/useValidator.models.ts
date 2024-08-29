import { type FormErrorModel, type FormValidatorsModel } from '@lib/frontend/data/data.models';

export type UseValidatorModel<TType> = (params: {
  data?: TType;
  validators?: FormValidatorsModel<TType>;
}) => FormErrorModel<TType>;
