import {
  type InterestRateModel,
} from '@lib/model/quant/InterestRate/InterestRate.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type InterestRateImplementationModel = EntityResourceImplementationModel<
  InterestRateModel,
>;
