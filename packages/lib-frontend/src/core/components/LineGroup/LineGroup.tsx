import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import type { LineGroupPropsModel } from '@lib/frontend/core/components/LineGroup/LineGroup.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { interleave } from '@lib/shared/core/utils/interleave/interleave';
import type { ReactNode } from 'react';
import { Children } from 'react';

export const LineGroup: SFCModel<LineGroupPropsModel> = ({ children, testID, title, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      spacing
      style={styles}
      testID={testID}>
      {title && <Text type={FONT_TYPE.HEADLINE}>{title}</Text>}

      <Wrapper
        border
        pHorizontal={THEME_SIZE.SMALL}
        round>
        {interleave<ReactNode>({ element: <Divider />, values: Children.toArray(children) || [] })}
      </Wrapper>
    </Wrapper>
  );
};
