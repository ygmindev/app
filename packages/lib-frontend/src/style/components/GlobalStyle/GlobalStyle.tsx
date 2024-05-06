import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/_GlobalStyle';
import { type _GlobalStylePropsModel } from '@lib/frontend/style/components/GlobalStyle/_GlobalStyle.models';
import { type GlobalStylePropsModel } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const GlobalStyle = composeComponent<GlobalStylePropsModel, _GlobalStylePropsModel>({
  Component: _GlobalStyle,
});

process.env.APP_IS_DEBUG && (GlobalStyle.displayName = variableName({ GlobalStyle }));
