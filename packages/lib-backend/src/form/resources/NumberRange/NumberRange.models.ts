export type NumberValueModel = {
  value?: number;
};

export type NumberBoundModel = {
  max?: number;
  min?: number;
};

export type NumberRangeModel = NumberValueModel | NumberBoundModel;
