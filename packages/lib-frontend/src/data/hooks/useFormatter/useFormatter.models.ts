import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type DATA_TYPE } from '#lib-shared/data/data.constants';
import { type DataTypeModel, type DataTypeMoreModel } from '#lib-shared/data/data.models';

export type UseFormatterModel = {
  format: <TType>(value?: TType, options?: FormatterOptionsModel<TType>) => string;

  unformat: <TType extends DataTypeModel>(
    type: TType,
    value?: string,
    options?: FormatterOptionsModel<UnformatModel<TType>>,
  ) => UnformatModel<TType> | undefined;
};
export type FormatterOptionsModel<TType> = TType extends number
  ? NumberFormatterOptionsModel
  : TType extends Date
  ? DateFormatterOptionsModel
  : never;

export type NumberFormatterOptionsModel = {
  isScale?: boolean;
  isSeparated?: boolean;
  precision?: number;
  unit?: NumberUnitModel;
};

export type DateFormatterOptionsModel = {
  format?: string;
  isReadable?: boolean;
};

export type UnformatModel<TType extends DataTypeModel | DataTypeMoreModel> =
  TType extends DATA_TYPE.NUMBER ? number : TType extends DATA_TYPE.DATE ? Date : never;
