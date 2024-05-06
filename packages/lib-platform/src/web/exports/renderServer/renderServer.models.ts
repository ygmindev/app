import {
  type _RenderServerModel,
  type _RenderServerParamsModel,
} from '@lib/platform/web/exports/renderServer/_renderServer.models';

export type RenderServerParamsModel = Pick<_RenderServerParamsModel, 'initialize'>;

export type RenderServerModel = _RenderServerModel;
