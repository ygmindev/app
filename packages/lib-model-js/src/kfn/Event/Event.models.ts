import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

export type EventModel = EntityResourceModel & {
  description?: string;

  end?: DateTime;

  images?: Array<string>;

  name: string;

  start?: DateTime;
};
