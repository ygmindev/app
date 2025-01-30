import { _buildApp } from '@lib/shared/web/utils/buildApp/_buildApp';
import {
  type BuildAppModel,
  type BuildAppParamsModel,
} from '@lib/shared/web/utils/buildApp/buildApp.models';

export const buildApp = async ({ ...params }: BuildAppParamsModel): BuildAppModel =>
  _buildApp({ ...params });
