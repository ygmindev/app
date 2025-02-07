import { ModalFormButton } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton';
import { type ModalFormButtonPropsModel } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton.models';
import {
  FORM_CONTAINER_PROPS_FIXTURE,
  type FormContainerFixtureModel,
} from '@lib/frontend/data/components/FormContainer/FormContainer.fixtures';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ModalFormButtonPropsModel<FormContainerFixtureModel>> = {
  Component: ModalFormButton,
  defaultProps: {
    ...FORM_CONTAINER_PROPS_FIXTURE,
    children: 'modal form button',
    onSubmit: async (data) => {
      console.warn(data);
    },
  },
  variants: [],
};
