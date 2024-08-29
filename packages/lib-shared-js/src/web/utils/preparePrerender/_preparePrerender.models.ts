import { type EmptyObjectModel } from '@lib/shared/core/core.models';

// TODO: type for page context

export type _PreparePrerenderParamsModel = {
  pages: Array<{ getContext?(): Promise<EmptyObjectModel>; pathname: string }>;
};

export type _PreparePrerenderModel = () => Promise<
  Array<{ pageContext: EmptyObjectModel; url: string }>
>;
