import {
  type _RenderClientModel,
  type _RenderClientParamsModel,
} from '@lib/platform/web/exports/renderClient/_renderClient.models';

export type RenderClientParamsModel = Pick<_RenderClientParamsModel, 'initialize'>;

export type RenderClientModel = _RenderClientModel;
