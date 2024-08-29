import { type _ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/_ChatContainer.models';

export type ChatContainerPropsModel = Omit<
  _ChatContainerPropsModel,
  | 'backgroundColor'
  | 'backgroundColorPrimary'
  | 'backgroundColorSecondary'
  | 'borderColor'
  | 'borderRadius'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'currentUser'
  | 'inputHeight'
  | 'placeholder'
  | 'sendElement'
  | 'spacing'
>;
