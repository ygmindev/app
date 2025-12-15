import {
  type WithInputModel,
  type WithInputParamsModel,
} from '@lib/backend/resource/utils/withInput/withInput.models';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';

export type WithIdInputParamsModel = Pick<
  WithInputParamsModel<IdInputModel>,
  'isOptional' | 'name'
>;

export type WithIdInputModel = WithInputModel;
