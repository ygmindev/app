import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import { type ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export const props: LibraryPropsModel<ResourceFormPropsModel<TestableRelatedResourceModel>> = {
  Component: ResourceForm,
  defaultProps: {
    name: '',
    onSubmit: async () => {},
  },
  variants: [],
};
