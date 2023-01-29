import { _renderPage } from '@lib/framework/web/utils/renderPage/_renderPage';
import type {
  RenderPageModel,
  RenderPageParamsModel,
} from '@lib/framework/web/utils/renderPage/renderPage.models';

export const renderPage = async (params: RenderPageParamsModel): Promise<RenderPageModel> =>
  _renderPage(params);
