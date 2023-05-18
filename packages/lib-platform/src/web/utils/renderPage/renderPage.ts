import { _renderPage } from 'packages/lib-platform/src/web/utils/renderPage/_renderPage';
import type {
  RenderPageModel,
  RenderPageParamsModel,
} from '@lib/platform/web/utils/renderPage/renderPage.models';

export const renderPage = async ({ ...params }: RenderPageParamsModel): Promise<RenderPageModel> =>
  _renderPage({ ...params });
