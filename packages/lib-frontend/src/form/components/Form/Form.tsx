import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { _Form } from '#lib-frontend/form/components/Form/_Form';
import { type _FormPropsModel } from '#lib-frontend/form/components/Form/_Form.models';
import { type FormPropsModel } from '#lib-frontend/form/components/Form/Form.models';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Form = composeComponent<FormPropsModel, _FormPropsModel>({
  Component: _Form,

  stylers: [{ width: '100%' }],
});

process.env.APP_IS_DEBUG && (Form.displayName = variableName({ Form }));
