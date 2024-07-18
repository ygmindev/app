import {
  type _RenderServerModel,
  type _RenderServerParamsModel,
} from '@lib/shared/web/utils/renderServer/_renderServer.models';

export type RenderServerParamsModel = Pick<_RenderServerParamsModel, 'initialize' | 'routes'>;

export type RenderServerModel = _RenderServerModel;
