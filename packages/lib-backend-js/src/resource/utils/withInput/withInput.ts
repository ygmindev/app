import { _withInput } from '@lib/backend/resource/utils/withInput/_withInput';
import {
  type WithInputModel,
  type WithInputParamsModel,
} from '@lib/backend/resource/utils/withInput/withInput.models';

export const withInput = <TType extends unknown>({
  isOptional,
  name = 'input',
  Resource,
}: WithInputParamsModel<TType>): WithInputModel => _withInput({ isOptional, name, Resource });
