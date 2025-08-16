import {
  type InterestRateFutureModel,
} from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type InterestRateFutureImplementationModel = EntityResourceImplementationModel<
  InterestRateFutureModel,
>;
