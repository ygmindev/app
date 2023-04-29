import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import type { LineGroupPropsModel } from '@lib/frontend/core/components/LineGroup/LineGroup.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { interleave } from '@lib/shared/core/utils/interleave/interleave';
import { uid } from '@lib/shared/core/utils/uid/uid';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';

export const LineGroup: SFCModel<LineGroupPropsModel> = ({ children, testID, title, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      border
      pHorizontal={THEME_SIZE.SMALL}
      round
      style={styles}
      testID={testID}>
      {interleave<ReactElement>({
        element: <Divider />,
        value: [
          title && (
            <Text
              p
              type={FONT_TYPE.TITLE}>
              {title}
            </Text>
          ),
          ...((Children.toArray(children) as Array<ReactElement>) || []),
        ].filter(Boolean) as Array<ReactElement>,
      }).map((child) => cloneElement(child, { key: uid() }))}
    </Wrapper>
  );
};
