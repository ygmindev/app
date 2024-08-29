import isString from 'lodash/isString';
import { useMemo } from 'react';

import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

const WRAPPER_FIXTURE_SIZE = 200;

export type WrapperFixturePropsModel = {
  testID?: string;
} & WrapperPropsModel;

export const WrapperFixture: SFCModel<WrapperFixturePropsModel> = ({
  backgroundColor = THEME_COLOR.PRIMARY,
  backgroundRole = THEME_ROLE.MUTED,
  children,
  testID,
  ...props
}) => {
  const testIDF = useMemo(() => testID || 'wrapper-fixture', [testID]);
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      backgroundRole={backgroundRole}
      height={WRAPPER_FIXTURE_SIZE}
      isCenter
      key={testIDF}
      round
      testID={testIDF}
      width={WRAPPER_FIXTURE_SIZE}
      {...props}>
      {isString(children) ? (
        <Text
          align={FONT_ALIGN.CENTER}
          colorRole={THEME_ROLE.CONTRAST}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Wrapper>
  );
};
