import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { type Config } from 'vike/types';

export type FrameworkConfigModel = EmptyObjectModel;

export type _FrameworkConfigModel = Omit<
  Config,
  'Page' | 'onBeforePrerenderStart' | 'onPrerenderStart' | 'onRenderClient' | 'onRenderHtml'
>;
