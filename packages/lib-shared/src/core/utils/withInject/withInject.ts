import { type ClassModel } from '@lib/shared/core/core.models';
import { _withInject } from '@lib/shared/core/utils/withInject/_withInject';
import {
  type WithInjectModel,
  type WithInjectParamsModel,
} from '@lib/shared/core/utils/withInject/withInject.models';

export const withInject = <TType extends ClassModel>(
  params: WithInjectParamsModel<TType>,
): WithInjectModel => _withInject(params);
