import {
  type WithIdInputModel,
  type WithIdInputParamsModel,
} from '@lib/backend/resource/utils/withIdInput/withIdInput.models';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { IdInput } from '@lib/model/resource/IdInput/IdInput';

export const withIdInput = ({ isOptional, name }: WithIdInputParamsModel = {}): WithIdInputModel =>
  withInput({ Resource: () => IdInput, isOptional, name });
