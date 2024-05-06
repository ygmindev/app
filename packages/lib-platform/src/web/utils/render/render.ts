import { _render } from '@lib/platform/web/utils/render/_render';
import {
  type RenderModel,
  type RenderParamsModel,
} from '@lib/platform/web/utils/render/render.models';

export const render = async (params: RenderParamsModel): Promise<RenderModel> => _render(params);
