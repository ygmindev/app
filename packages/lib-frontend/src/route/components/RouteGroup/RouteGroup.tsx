import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { LineGroup } from '@lib/frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '@lib/frontend/core/components/LineItem/LineItem';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { RouteGroupPropsModel } from '@lib/frontend/route/components/RouteGroup/RouteGroup.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const RouteGroup: SFCModel<RouteGroupPropsModel> = ({ groups, root, testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  return (
    <Wrapper
      spacing
      style={styles}
      testID={testID}>
      {groups?.map((group) => (
        <LineGroup
          key={group.id}
          title={t(group.label)}>
          {group.options.map(({ icon, id, label, value }) => (
            <LineItem
              icon={icon}
              key={id}
              label={label}
              onPress={() => push({ pathname: `${root ? `${root}/` : ''}${id}` })}
              rightElement={(isActive) => (
                <Button
                  elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
                  icon="chevronRight"
                  type={BUTTON_TYPE.TRANSPARENT}
                />
              )}
              value={value}
            />
          ))}
        </LineGroup>
      ))}
    </Wrapper>
  );
};