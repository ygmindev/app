import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type NavigationBarPropsModel } from '@lib/frontend/core/containers/NavigationBar/NavigationBar.models';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import map from 'lodash/map';
import toString from 'lodash/toString';
import { type ReactElement } from 'react';
import { useMemo } from 'react';

export const NavigationBar = ({
  isHorizontal,
  onChange,
  options,
  testID,
  value,
  ...props
}: SFCPropsModel<NavigationBarPropsModel>): ReactElement<
  SFCPropsModel<NavigationBarPropsModel>
> => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const theme = useTheme();

  const categories = useMemo(
    () => groupBy(options, ({ category }) => toString(category)),
    [options],
  );
  const valueF = value && trimPathname(value);

  const isHorizontalF = isHorizontal || isMobile;
  return (
    <Activatable style={styles}>
      <Wrapper
        basis={0}
        border={isHorizontalF ? DIRECTION.BOTTOM : DIRECTION.RIGHT}
        isAlign={isHorizontalF}
        isFullWidth={isHorizontalF}
        isHorizontalScrollable={isHorizontalF}
        isRow={isHorizontalF}
        isVerticalScrollable={!isHorizontalF}
        p
        s
        testID={testID}
        width={isHorizontalF ? undefined : theme.layout.navigation.width}>
        {map(categories, (v, k) => {
          const optionsF = (
            <Wrapper
              isAlign={!k && isHorizontalF}
              isRow={!k && isHorizontalF}
              key={toString(k)}
              s={THEME_SIZE.SMALL}>
              {v.map(({ icon, id, label, onPress }) => (
                <Button
                  elementState={trimPathname(id) === valueF ? ELEMENT_STATE.ACTIVE : undefined}
                  icon={icon}
                  key={id}
                  onPress={async () => {
                    onPress && (await onPress());
                    onChange && onChange(id);
                  }}
                  testID={id}
                  type={BUTTON_TYPE.INVISIBLE}>
                  {label}
                </Button>
              ))}
            </Wrapper>
          );
          return k ? (
            isHorizontalF ? (
              <Droppable
                anchor={(isOpen) => (
                  <Button
                    leftElement={<Rotatable isActive={isOpen} />}
                    type={BUTTON_TYPE.INVISIBLE}>
                    {k}
                  </Button>
                )}
                key={toString(k)}
                trigger={ACTIVATABLE_TRIGGER.PRESS}>
                {optionsF}
              </Droppable>
            ) : (
              <Accordion
                defaultValue={ELEMENT_STATE.ACTIVE}
                key={toString(k)}
                title={k}>
                {optionsF}
              </Accordion>
            )
          ) : (
            optionsF
          );
        })}
      </Wrapper>
    </Activatable>
  );
};
