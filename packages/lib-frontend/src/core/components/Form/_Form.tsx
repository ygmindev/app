import type { _FormPropsModel } from '@lib/frontend/core/components/Form/_Form.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { FormHTMLAttributes, SyntheticEvent } from 'react';

export const _Form = composeComponent<_FormPropsModel, FormHTMLAttributes<HTMLFormElement>>({
  Component: 'form',
  getProps: ({ children, onSubmit }) => ({
    children: (
      <>
        {children}
        <button
          aria-label="submit"
          style={{ display: 'none' }}
          type="submit"
        />
      </>
    ),
    onSubmit: (e: SyntheticEvent) => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
  }),
  isWeb: true,
});
