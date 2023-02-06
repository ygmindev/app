import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import isString from 'lodash/isString';
import { useMemo } from 'react';

const WRAPPER_FIXTURE_SIZE = 100;

export interface WrapperFixturePropsModel extends WrapperPropsModel {
  testID?: string;
}

export const WrapperFixture: SFCModel<WrapperFixturePropsModel> = ({
  children,
  testID,
  ...props
}) => {
  const _testID = useMemo(() => testID || 'wrapper-fixture', [testID]);
  return (
    <Wrapper
      backgroundColor={THEME_COLOR.PRIMARY}
      height={WRAPPER_FIXTURE_SIZE}
      isCenter
      key={_testID}
      round
      testID={_testID}
      width={WRAPPER_FIXTURE_SIZE}
      {...props}>
      {isString(children) ? (
        <Text
          align={FONT_ALIGN.CENTER}
          colorRole={THEME_ROLE.MAIN}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Wrapper>
  );
};
