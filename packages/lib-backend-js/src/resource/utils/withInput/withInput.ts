import { _withInput } from '@lib/backend/resource/utils/withInput/_withInput';
import {
  type WithInputModel,
  type WithInputParamsModel,
} from '@lib/backend/resource/utils/withInput/withInput.models';

export const withInput = <TType extends unknown>({
  Resource,
  isOptional,
  name = 'input',
}: WithInputParamsModel<TType>): WithInputModel => _withInput({ Resource, isOptional, name });
