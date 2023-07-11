import { _renderPage } from '#lib-platform/web/utils/renderPage/_renderPage';
import {
  type RenderPageModel,
  type RenderPageParamsModel,
} from '#lib-platform/web/utils/renderPage/renderPage.models';

export const renderPage = async ({ ...params }: RenderPageParamsModel): Promise<RenderPageModel> =>
  _renderPage({ ...params });
