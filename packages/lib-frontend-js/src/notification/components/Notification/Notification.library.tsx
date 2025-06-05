import { LIBRARY_CATEGORY_NOTIFICATION } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import { type NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<NotificationPropsModel> = {
  Component: Notification,
  category: LIBRARY_CATEGORY_NOTIFICATION,
  defaultProps: { description: 'message', id: 'id', isInfinite: true },
  variants: [
    ...cartesianObject({ color: Object.values(THEME_COLOR) }).map((props) => ({ props })),
    { props: { icon: 'personCircle' } },
    { props: { title: 'title' } },
    { props: { icon: 'personCircle', title: 'title' } },
  ],
};
