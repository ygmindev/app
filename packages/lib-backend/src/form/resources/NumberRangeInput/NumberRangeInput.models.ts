export type NumberValueModel = {
  value?: number;
};

export type NumberRangeModel = {
  max?: number;
  min?: number;
};

export type NumberRangeInputModel = NumberValueModel | NumberRangeModel;
