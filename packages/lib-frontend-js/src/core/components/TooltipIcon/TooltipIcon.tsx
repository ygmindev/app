import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { type DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { type TooltipIconPropsModel } from '@lib/frontend/core/components/TooltipIcon/TooltipIcon.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import { type ReactNode } from 'react';

export const TooltipIcon = composeComponent<TooltipIconPropsModel, DroppablePropsModel>({
  Component: Droppable,

  getProps: ({ children, color = THEME_COLOR.PRIMARY, icon = 'info' }, theme) => {
    const colorF = theme.color.palette[color][THEME_ROLE.MAIN];
    return {
      anchor: (isActive) => (
        <Icon
          color={isActive ? theme.color.palette[color][THEME_ROLE.ACTIVE] : colorF}
          icon={icon}
        />
      ),

      children:
        isString(children) || isFunction(children) ? (
          <AsyncText>{children}</AsyncText>
        ) : (
          (children as ReactNode)
        ),
    };
  },
});

process.env.APP_IS_DEBUG && (TooltipIcon.displayName = variableName({ TooltipIcon }));
