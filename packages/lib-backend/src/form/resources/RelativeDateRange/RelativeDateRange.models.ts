import { type RelativeDateModel } from '#lib-shared/form/form.models';

export type RelativeDateValueModel = {
  value?: RelativeDateModel;
};

export type RelativeDateBoundModel = {
  max?: RelativeDateModel;
  min?: RelativeDateModel;
};

export type RelativeDateRangeModel = RelativeDateValueModel | RelativeDateBoundModel;
