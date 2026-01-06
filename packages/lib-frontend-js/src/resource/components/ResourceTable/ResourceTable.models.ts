import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type ReactElement } from 'react';

export type ResourceTablePropsModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = WrapperPropsModel &
  ResourceParamsModel<TType, TRoot> &
  RootInputModel<TRoot> & {
    defaultFilters?: Partial<Record<StringKeyModel<TType>, Array<FilterModel<TType>>>>;
    implementation: UseResourceModel<TType, TRoot>;
    isCreatable?: boolean;
    isDeletable?: boolean;
    limit?: number;
  };

export type ResourceTableFieldModel<TType> = {
  element: ReactElement<InputPropsModel<TType>>;
};
