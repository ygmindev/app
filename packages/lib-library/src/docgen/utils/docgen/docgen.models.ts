import type {
  _DocgenModel,
  _DocgenParamsModel,
} from '#lib-library/docgen/utils/docgen/_docgen.models';

export type DocgenParamsModel = _DocgenParamsModel;

export type DocgenModel = _DocgenModel;

export interface DocgenMetaDataModel {
  propTypes?: Array<DocgenMetaDataPropsModel>;
}

export interface DocgenMetaDataPropsModel {
  isOptional?: boolean;
  name: string;
  type?: string;
}
