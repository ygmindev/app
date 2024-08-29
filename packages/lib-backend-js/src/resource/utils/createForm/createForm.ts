import {
  type CreateFormModel,
  type CreateFormParamsModel,
} from '@lib/backend/resource/utils/createForm/createForm.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { type ClassModel } from '@lib/shared/core/core.models';

export const createForm = <TType extends unknown>({
  Resource,
  name,
}: CreateFormParamsModel<TType>): CreateFormModel<TType> => {
  @withEntity({ name: `${name}Form` })
  class FormF extends (Resource() as unknown as ClassModel) {}
  return FormF as CreateFormModel<TType>;
};
