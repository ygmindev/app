import { type NumberUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export type NumberScaleParamsModel = [value?: number, options?: NumberScaleOptionsModel];

export type NumberScaleOptionsModel = {
  isReverse?: boolean;
  multiplier?: number;
  unit?: NumberUnitModel;
};

export type NumberScaleModel = number | undefined;
