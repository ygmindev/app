import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import type { NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NotificationPropsModel> = {
  Component: Notification,
  category: 'notification',
  defaultProps: { id: '', isInfinite: true, message: 'message' },
  variants: [
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { icon: 'person' } },
    { props: { title: 'title' } },
    { props: { icon: 'person', title: 'title' } },
  ],
};
