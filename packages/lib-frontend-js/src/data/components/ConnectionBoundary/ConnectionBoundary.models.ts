import {
  type DataBoundaryPropsModel,
  type DataBoundaryRefModel,
} from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

export type ConnectionBoundaryPropsModel<TType, TRoot = undefined> = DataBoundaryPropsModel<
  ResourceInputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
  ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>
>;

export type ConnectionBoundaryRefModel<TType, TRoot = undefined> = DataBoundaryRefModel<
  ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>
>;
