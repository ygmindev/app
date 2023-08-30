import { type RATING_KEY } from '#lib-shared/funding/funding.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type RatingAgencyModel = EntityResourceModel & {
  name: string;
  [RATING_KEY.AAA]?: string;
  [RATING_KEY.AAp]?: string;
  [RATING_KEY.AA]?: string;
  [RATING_KEY.AAm]?: string;
  [RATING_KEY.Ap]?: string;
  [RATING_KEY.A]?: string;
  [RATING_KEY.Am]?: string;
  [RATING_KEY.BBBp]?: string;
  [RATING_KEY.BBB]?: string;
  [RATING_KEY.BBBm]?: string;
  [RATING_KEY.BBp]?: string;
  [RATING_KEY.BB]?: string;
  [RATING_KEY.BBm]?: string;
  [RATING_KEY.Bp]?: string;
  [RATING_KEY.B]?: string;
  [RATING_KEY.Bm]?: string;
  [RATING_KEY.CCCp]?: string;
  [RATING_KEY.CCC]?: string;
  [RATING_KEY.CCCm]?: string;
  [RATING_KEY.D]?: string;
};

export type RatingAgencyFormModel = EntityResourceDataModel<RatingAgencyModel>;
