import { _withParams } from '@lib/backend/resource/utils/withParams/_withParams';
import {
  type WithParamsModel,
  type WithParamsParamsModel,
} from '@lib/backend/resource/utils/withParams/withParams.models';

export const withParams = <TType extends unknown>({
  Resource,
  isOptional,
}: WithParamsParamsModel<TType>): WithParamsModel => _withParams({ Resource, isOptional });
