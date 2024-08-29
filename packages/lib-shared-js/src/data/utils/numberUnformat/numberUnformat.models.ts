import { type NumberScaleOptionsModel } from '@lib/shared/data/utils/numberScale/numberScale.models';

export type NumberUnformatParamsModel = [value?: string, options?: NumberUnformatOptionsModel];

export type NumberUnformatModel = number | undefined;

export type NumberUnformatOptionsModel = NumberScaleOptionsModel;
