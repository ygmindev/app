import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

export type EventModel = EntityResourceModel & {
  end?: DateTime;

  name: string;

  start?: DateTime;
};
