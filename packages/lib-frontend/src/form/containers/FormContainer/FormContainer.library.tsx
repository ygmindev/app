import { FormContainer } from '#lib-frontend/form/containers/FormContainer/FormContainer';
import { FORM_CONTAINER_PROPS_FIXTURE } from '#lib-frontend/form/containers/FormContainer/FormContainer.fixtures';
import { type FormContainerPropsModel } from '#lib-frontend/form/containers/FormContainer/FormContainer.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FormContainerPropsModel<unknown>> = {
  Component: FormContainer,
  defaultProps: FORM_CONTAINER_PROPS_FIXTURE,
  variants: [
    { props: { isFullWidth: true } },
    { props: { cancelLabel: 'cancel label', onCancel: () => null } },
  ],
};
