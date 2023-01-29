import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Tooltip = composeComponent<TooltipPropsModel, DroppablePropsModel>({
  getComponent: () => Droppable,

  getProps: ({ children, color = THEME_COLOR.NEUTRAL }, theme) => {
    const _color =
      theme.colors.tone[color][
        color === THEME_COLOR.NEUTRAL ? THEME_ROLE.MAIN_CONTRAST : THEME_ROLE.MAIN
      ];
    return {
      anchor: (isActive) => (
        <Icon
          color={
            isActive ? palette({ color: _color, lightness: theme.colors.activeLightness }) : _color
          }
          icon="info"
        />
      ),

      children: <TranslatableText>{children}</TranslatableText>,
    };
  },
});

process.env.APP_DEBUG && (Tooltip.displayName = variableName(() => Tooltip));
