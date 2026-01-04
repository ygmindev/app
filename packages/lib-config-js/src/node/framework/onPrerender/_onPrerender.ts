import {
  type _OnPrerenderModel,
  type _OnPrerenderParamsModel,
} from '@lib/config/node/framework/onPrerender/_onPrerender.models';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';

export const _onPrerender =
  ({ getContext, languages, onInitialize }: _OnPrerenderParamsModel): _OnPrerenderModel =>
  async ({ pageContexts }) => {
    await onInitialize?.();
    const pageContextPromises: Array<() => Promise<(typeof pageContexts)[number]>> = [];
    languages.forEach(({ id }) =>
      pageContexts.forEach((pageContext) =>
        pageContextPromises.push(async () => {
          const result = await getContext({
            context: pageContext.context,
            lang: id,
            pathname: pageContext.urlOriginal,
          });
          return { ...pageContext, context: result.context, urlOriginal: result.pathname };
        }),
      ),
    );
    return { prerenderContext: { pageContexts: await mapSequence(pageContextPromises) } };
  };
