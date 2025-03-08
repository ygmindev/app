import {
  type WithParamsModel,
  type WithParamsParamsModel,
} from '@lib/backend/resource/utils/withParams/withParams.models';
import { Arg as ArgDecorator } from 'type-graphql';

export const withParams = <TType extends unknown>({
  Resource,
}: WithParamsParamsModel<TType>): WithParamsModel =>
  ArgDecorator('input', Resource, { nullable: true }) as WithParamsModel;
