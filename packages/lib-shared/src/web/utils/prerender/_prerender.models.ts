import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type PageContextBuiltIn } from 'vike/types';

export type _PrerenderParamsModel = Pick<
  InternationalizeConfigModel,
  'languages' | 'languageDefault'
> & {
  i18n: _InternationalizeConfigModel;
};

export type _PrerenderModel = (params: { pageContexts: Array<PrerenderContextModel> }) => Promise<{
  prerenderContext: { pageContexts: Array<PrerenderContextModel> };
}>;

type PrerenderContextModel = Pick<PageContextBuiltIn, 'urlOriginal'> & {
  context: RootContextModel;
};
