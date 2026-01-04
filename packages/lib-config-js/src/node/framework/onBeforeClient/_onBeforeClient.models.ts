import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import type { PageContextClient } from 'vike/types';

export type _OnBeforeClientModel = (
  params: FrameworkRenderParamsModel & PageContextClient,
) => Promise<FrameworkRenderParamsModel & PageContextClient>;
