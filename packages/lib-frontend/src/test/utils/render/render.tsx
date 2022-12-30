import { _render } from '@lib/frontend/test/utils/render/_render';
import type { RenderModel, RenderParamsModel } from '@lib/frontend/test/utils/render/render.models';

export const render = (params: RenderParamsModel): RenderModel => _render(params);
