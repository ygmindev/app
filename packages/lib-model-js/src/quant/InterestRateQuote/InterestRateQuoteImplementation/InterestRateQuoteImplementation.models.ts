import {
  type InterestRateQuoteModel,
} from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type InterestRateQuoteImplementationModel = EntityResourceImplementationModel<
  InterestRateQuoteModel,
>;
