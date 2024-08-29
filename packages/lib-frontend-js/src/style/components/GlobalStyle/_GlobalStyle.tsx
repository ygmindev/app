import { type GlobalProps } from '@emotion/react';
import { css, Global } from '@emotion/react';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _GlobalStylePropsModel } from '@lib/frontend/style/components/GlobalStyle/_GlobalStyle.models';

export const _GlobalStyle = composeComponent<_GlobalStylePropsModel, GlobalProps>({
  Component: Global,

  getProps: ({ sheet }) => ({
    styles: css`
      ${sheet}
    `,
  }),
});
