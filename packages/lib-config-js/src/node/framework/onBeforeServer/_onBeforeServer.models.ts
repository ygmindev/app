import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import type { PageContextServer } from 'vike/types';

export type _OnBeforeServerParamsModel = {
  render: (
    params: FrameworkRenderParamsModel & PageContextServer,
  ) => Promise<FrameworkRenderParamsModel & PageContextServer>;
};

export type _OnBeforeServerModel = (
  params: FrameworkRenderParamsModel & PageContextServer,
) => Promise<FrameworkRenderParamsModel & PageContextServer>;
