import {
  type _RenderModel,
  type _RenderParamsModel,
} from '@lib/frontend/test/utils/render/_render.models';

export type RenderParamsModel = Omit<_RenderParamsModel, 'Wrapper'>;

export type RenderModel = _RenderModel;
