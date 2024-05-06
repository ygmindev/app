import { type FormHTMLAttributes, type SyntheticEvent } from 'react';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _FormPropsModel } from '@lib/frontend/data/components/Form/_Form.models';

export const _Form = composeComponent<_FormPropsModel, FormHTMLAttributes<HTMLFormElement>>({
  Component: 'form',

  getProps: ({ children, onSubmit, testID }) => ({
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

    testID,
  }),

  isWeb: true,

  stylers: [{ display: 'flex', flex: 1, height: '100%' }],
});
