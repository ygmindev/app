import { type RelativeDateInputModel } from '#lib-shared/form/form.models';

export type RelativeDateValueModel = {
  value?: RelativeDateInputModel;
};

export type RelativeDateRangeModel = {
  max?: RelativeDateInputModel;
  min?: RelativeDateInputModel;
};

export type RelativeDateRangeInputModel = RelativeDateValueModel | RelativeDateRangeModel;
