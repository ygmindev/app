import { _render } from '@lib/shared/web/utils/render/_render';
import {
  type RenderModel,
  type RenderParamsModel,
} from '@lib/shared/web/utils/render/render.models';

export const render = async (params: RenderParamsModel): Promise<RenderModel> => _render(params);
