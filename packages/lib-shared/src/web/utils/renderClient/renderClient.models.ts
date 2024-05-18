import {
  type _RenderClientModel,
  type _RenderClientParamsModel,
} from '@lib/shared/web/utils/renderClient/_renderClient.models';

export type RenderClientParamsModel = Pick<_RenderClientParamsModel, 'initialize'>;

export type RenderClientModel = _RenderClientModel;
