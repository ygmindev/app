import {
  type _DocgenModel,
  type _DocgenParamsModel,
} from '@lib/library/docgen/utils/docgen/_docgen.models';

export type DocgenParamsModel = _DocgenParamsModel;

export type DocgenModel = _DocgenModel;

export type DocgenMetaDataModel = {
  propTypes?: Array<DocgenMetaDataPropsModel>;
};

export type DocgenMetaDataPropsModel = {
  isOptional?: boolean;
  name: string;
  type?: string;
};
