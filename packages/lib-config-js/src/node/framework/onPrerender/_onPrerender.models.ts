import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type PageContextServer } from 'vike/types';

export type _OnPrerenderParamsModel = {
  languages: Array<WithIdModel>;

  getContext(
    params: FrameworkRenderParamsModel & { lang: string; pathname: string },
  ): Promise<FrameworkRenderParamsModel & { pathname: string }>;

  onInitialize?(): Promise<void>;
};

export type _OnPrerenderModel = (params: {
  pageContexts: Array<PageContextServer & FrameworkRenderParamsModel>;
}) => Promise<{
  prerenderContext: {
    pageContexts: Array<PageContextServer & FrameworkRenderParamsModel>;
  };
}>;
