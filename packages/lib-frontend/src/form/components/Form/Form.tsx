import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _Form } from '@lib/frontend/form/components/Form/_Form';
import type { _FormPropsModel } from '@lib/frontend/form/components/Form/_Form.models';
import type { FormPropsModel } from '@lib/frontend/form/components/Form/Form.models';

export const Form = composeComponent<FormPropsModel, _FormPropsModel>({
  getComponent: () => _Form,
});
