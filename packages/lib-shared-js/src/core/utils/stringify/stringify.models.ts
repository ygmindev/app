import {
  type _StringifyModel,
  type _StringifyParamsModel,
} from '@lib/shared/core/utils/stringify/_stringify.models';

export type StringifyParamsModel = _StringifyParamsModel;

export type StringifyModel = _StringifyModel;

export type StringifyOptionsModel = {
  isMinify?: boolean;
};
