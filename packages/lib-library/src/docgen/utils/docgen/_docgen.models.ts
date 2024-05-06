import { type DocgenMetaDataModel } from '@lib/library/docgen/utils/docgen/docgen.models';

export type _DocgenParamsModel = string;

export type _DocgenModel = (DocgenMetaDataModel & { name: string }) | null;
