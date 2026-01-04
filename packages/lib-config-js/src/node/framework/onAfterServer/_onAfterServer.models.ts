import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import type { PageContextServer } from 'vike/types';

export type _OnAfterServerParamsModel = {
  render(
    params: FrameworkRenderParamsModel & PageContextServer,
  ): Promise<FrameworkRenderParamsModel & PageContextServer>;
};

export type _OnAfterServerModel = (
  params: FrameworkRenderParamsModel & PageContextServer,
) => Promise<FrameworkRenderParamsModel & PageContextServer>;
