import {
  type DataBoundaryPropsModel,
  type DataBoundaryRefModel,
} from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export type ConnectionBoundaryPropsModel<TType, TRoot = undefined> = DataBoundaryPropsModel<
  InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>,
  OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>
>;

export type ConnectionBoundaryRefModel<TType, TRoot = undefined> = DataBoundaryRefModel<
  OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>
>;
