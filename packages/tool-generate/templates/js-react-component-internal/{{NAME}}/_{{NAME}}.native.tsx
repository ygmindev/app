import type { _{{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/_{{NAME}}.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { {{NAME}}Props } from '{{NAME}}';
import { {{NAME}} } from '{{NAME}}';

export const _{{NAME}} = composeComponent<_{{NAME}}PropsModel, {{NAME}}Props>({
  getComponent: () => {{NAME}},
  getProps: () => ({}),
});
