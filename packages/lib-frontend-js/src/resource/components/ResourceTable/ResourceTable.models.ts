import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';
import { type ReactElement } from 'react';

export type ResourceTablePropsModel<
  TType extends ResourceModel,
  TRoot = undefined,
> = WrapperPropsModel &
  ResourceParamsModel<TType, TRoot> &
  RootInputModel<TRoot> & { implementation: ResourceImplementationModel<TType, TRoot> };

export type ResourceTableFieldModel<TType> = {
  element: ReactElement<InputPropsModel<TType>>;
};
