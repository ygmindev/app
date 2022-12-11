import { Drop } from '@lib/frontend/core/components/Drop/Drop';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { TOOLTIP_MAX_WIDTH } from '@lib/frontend/core/components/Tooltip/Tooltip.constants';
import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { isString } from 'lodash';

export const Tooltip: SFCModel<TooltipPropsModel> = ({ children, style, testID, tooltip }) => (
  <Drop
    maxWidth={TOOLTIP_MAX_WIDTH}
    render={() => (isString(tooltip) ? <Text align={FONT_ALIGN.CENTER}>{tooltip}</Text> : tooltip)}
    style={style}
    testID={testID}
  >
    {children}
  </Drop>
);
