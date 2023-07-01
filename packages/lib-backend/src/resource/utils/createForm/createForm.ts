import isFunction from 'lodash/isFunction';

import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import {
  type CreateFormModel,
  type CreateFormParamsModel,
} from '#lib-backend/resource/utils/createForm/createForm.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { type ClassModel } from '#lib-shared/core/core.models';

export const createForm = <TType extends unknown>({
  Resource,
  name,
}: CreateFormParamsModel<TType>): CreateFormModel<TType> => {
  const nameF = `${name}Form`;
  const isResource = Resource && isFunction(Resource);

  @withEntity({ name: nameF })
  class FormF extends (isResource ? (Resource as unknown as ClassModel) : EntityResource) {}

  return FormF as CreateFormModel<TType>;
};
