import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import { type NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NotificationPropsModel> = {
  Component: Notification,
  category: 'notification',
  defaultProps: { description: 'message', id: 'id', isInfinite: true },
  variants: [
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { icon: 'personCircle' } },
    { props: { title: 'title' } },
    { props: { icon: 'personCircle', title: 'title' } },
  ],
};
