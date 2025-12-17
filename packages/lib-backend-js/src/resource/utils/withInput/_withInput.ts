import {
  type _WithInputModel,
  type _WithInputParamsModel,
} from '@lib/backend/resource/utils/withInput/_withInput.models';
import { Arg } from 'type-graphql';

export const _withInput = <TType extends unknown>({
  Resource,
  isOptional = true,
  name = 'input',
}: _WithInputParamsModel<TType>): _WithInputModel =>
  Arg(name, Resource, { nullable: isOptional }) as _WithInputModel;
