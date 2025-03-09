import {
  type _WithParamsModel,
  type _WithParamsParamsModel,
} from '@lib/backend/resource/utils/withParams/_withParams.models';
import { Arg as ArgDecorator } from 'type-graphql';

export const _withParams = <TType extends unknown>({
  Resource,
  isOptional = true,
}: _WithParamsParamsModel<TType>): _WithParamsModel =>
  ArgDecorator('input', Resource, { nullable: isOptional }) as _WithParamsModel;
