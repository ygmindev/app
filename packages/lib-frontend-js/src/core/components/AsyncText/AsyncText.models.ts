import { type AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import { type UserStateModel } from '@lib/frontend/user/stores/userStore/userStore.models';

export type AsyncTextPropsModel = Omit<AnimatableTextPropsModel, 'children'> &
  ChildrenPropsModel<AsyncTextModel> & {
    ns?: Array<string>;
  };

export type AsyncTextModel =
  | string
  | ((params: Pick<UseTranslationModel, 't'> & Pick<UserStateModel, 'currentUser'>) => string);
