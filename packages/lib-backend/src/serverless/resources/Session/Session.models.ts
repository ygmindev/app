import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type SessionModel = EntityResourceModel & {
  id: string;
};

export type SessionFormModel = EntityResourceDataModel<SessionModel>;
