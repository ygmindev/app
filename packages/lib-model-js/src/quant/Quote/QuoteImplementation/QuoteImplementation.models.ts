import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { type RateModel } from '@lib/model/quant/Rate/Rate.models';
import { type RelatedResourceImplementationModel } from '@lib/model/resource/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';

export type QuoteImplementationModel = RelatedResourceImplementationModel<QuoteModel, RateModel>;
