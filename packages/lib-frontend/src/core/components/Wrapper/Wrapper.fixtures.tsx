import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { THEME_BASIC_SIZE, THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { useMemo } from 'react';

const WRAPPER_FIXTURE_SIZE = 100;

export interface WrapperFixturePropsModel extends WrapperPropsModel {
  testID?: string;
  text?: string;
}

export const WrapperFixture: SFCModel<WrapperFixturePropsModel> = ({
  children,
  testID: testIDProps,
  text: textProps,
  ...props
}) => {
  const testID = useMemo(() => testIDProps || uid('wrapper-fixture'), [testIDProps]);
  const text = useMemo(
    () => (textProps === undefined ? uid('wrapper-fixture') : textProps),
    [textProps],
  );
  return (
    <Wrapper
      backgroundColor={THEME_COLOR.PRIMARY}
      height={WRAPPER_FIXTURE_SIZE}
      isCenter
      key={testID}
      p={THEME_BASIC_SIZE.SMALL}
      round
      testID={testID}
      width={WRAPPER_FIXTURE_SIZE}
      {...props}>
      <Text
        align={FONT_ALIGN.CENTER}
        colorRole={THEME_ROLE.MAIN}>
        {text}
      </Text>

      {children}
    </Wrapper>
  );
};
