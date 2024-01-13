import { type NumberUnitModel } from '@lib-frontend/data/data.models';
import { type DATA_TYPE } from '@lib-shared/data/data.constants';
import { type FormattableTypeModel } from '@lib-shared/data/data.models';
import { type NumberRangeModel } from '@lib-shared/data/resources/NumberRange/NumberRange.models';

export type UseFormatterModel = {
  format<TType>(value?: TType, options?: FormatterOptionsModel<TType>): string;

  formatRange(value?: NumberRangeModel, options?: NumberFormatterOptionsModel): string;

  scale(value?: number, options?: NumberScaleOptionsModel): number | undefined;

  unformat<TType extends FormattableTypeModel>(
    type: TType,
    value?: string,
    options?: FormatterOptionsModel<UnformatModel<TType>>,
  ): UnformatModel<TType> | undefined;
};
export type FormatterOptionsModel<TType> = TType extends number
  ? NumberFormatterOptionsModel
  : TType extends Date
    ? DateFormatterOptionsModel
    : never;

export type NumberScaleOptionsModel = {
  isUnscale?: boolean;
  unit?: NumberUnitModel;
};

export type NumberFormatterOptionsModel = NumberScaleOptionsModel & {
  isScale?: boolean;
  isSeparated?: boolean;
  precision?: number;
};

export type DateFormatterOptionsModel = {
  format?: string;
  isReadable?: boolean;
};

export type UnformatModel<TType extends FormattableTypeModel> = TType extends DATA_TYPE.NUMBER
  ? number
  : TType extends DATA_TYPE.DATE
    ? Date
    : never;
