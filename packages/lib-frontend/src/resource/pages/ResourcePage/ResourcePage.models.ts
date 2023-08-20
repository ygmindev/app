import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type ResourceServiceModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type ResourcePagePropsModel = PagePropsModel;

export type ResourcePageParamsModel = PartialModel<WithIdModel>;

export type ResourceItemModel<TType, TForm = undefined, TRoot = undefined> = Pick<
  ResourceTablePropsModel<TType, TForm, TRoot>,
  'columns' | 'filters' | 'service'
> & {
  label: TranslatableTextModel;
  service(): ResourceServiceModel<TType, TForm, TRoot>;
};
