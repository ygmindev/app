import { type ReactElement } from 'react';

import { type PagePropsModel, type SFCModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ResourcePagePropsModel = PagePropsModel;

export type ResourcePageParamsModel = PartialModel<WithIdModel>;

export type ResourcePageItemModel<TType, TForm = undefined, TRoot = undefined> = {
  element: ReactElement<SFCModel<ResourceTablePropsModel<TType, TForm, TRoot>>>;
  label: TranslatableTextModel;
};
