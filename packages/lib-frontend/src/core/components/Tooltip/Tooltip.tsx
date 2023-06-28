import isString from 'lodash/isString';
import type { ReactNode } from 'react';

import { Droppable } from '#lib-frontend/core/components/Droppable/Droppable';
import type { DroppablePropsModel } from '#lib-frontend/core/components/Droppable/Droppable.models';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import type { TooltipPropsModel } from '#lib-frontend/core/components/Tooltip/Tooltip.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { THEME_COLOR, THEME_ROLE } from '#lib-frontend/style/style.constants';
import { palette } from '#lib-frontend/style/utils/palette/palette';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Tooltip = composeComponent<TooltipPropsModel, DroppablePropsModel>({
  Component: Droppable,

  getProps: ({ children, color = THEME_COLOR.PRIMARY, icon = 'info' }, theme) => {
    const colorF = theme.colors.tone[color][THEME_ROLE.MAIN];
    return {
      anchor: (isActive) => (
        <Icon
          color={
            isActive ? palette({ color: colorF, lightness: theme.colors.activeLightness }) : colorF
          }
          icon={icon}
        />
      ),

      children: isString(children) ? (
        <TranslatableText>{children}</TranslatableText>
      ) : (
        (children as ReactNode)
      ),
    };
  },
});

process.env.APP_IS_DEBUG && (Tooltip.displayName = variableName({ Tooltip }));
