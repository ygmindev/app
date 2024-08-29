import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { FORM_CONTAINER_PROPS_FIXTURE } from '@lib/frontend/data/components/FormContainer/FormContainer.fixtures';
import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<FormContainerPropsModel<unknown>> = {
  Component: FormContainer,
  defaultProps: FORM_CONTAINER_PROPS_FIXTURE,
  variants: [
    { props: { isFullWidth: true } },
    { props: { cancelLabel: 'cancel label', onCancel: () => null } },
  ],
};
