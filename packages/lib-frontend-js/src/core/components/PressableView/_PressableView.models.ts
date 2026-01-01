import { type _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';

export type _PressableViewPropsModel = _ViewPropsModel & {
  onPress?: (() => void) | (() => Promise<void>);
};
