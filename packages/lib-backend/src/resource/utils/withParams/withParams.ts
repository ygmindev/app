import { Arg as ArgDecorator, type ArgOptions } from 'type-graphql';

import {
  type WithParamsModel,
  type WithParamsParamsModel,
} from '#lib-backend/resource/utils/withParams/withParams.models';

export const withParams = <TType>({ Resource }: WithParamsParamsModel<TType>): WithParamsModel =>
  ArgDecorator('input', Resource as ArgOptions) as WithParamsModel;
