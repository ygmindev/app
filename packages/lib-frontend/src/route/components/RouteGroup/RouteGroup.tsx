import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const RouteGroup: SFCModel<RouteGroupPropsModel> = ({ label, root, routes, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location, push } = useRouter();
  return (
    <LineGroup
      {...wrapperProps}
      title={t(label)}>
      {routes?.map(({ icon, id, label, value }) => (
        <LineItem
          icon={icon}
          key={id}
          label={label}
          onPress={() =>
            push({ pathname: `${root === true ? location.pathname : root ?? ''}/${id}` })
          }
          rightElement={(isActive) => (
            <Button
              elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
              icon="chevronRight"
              type={BUTTON_TYPE.INVISIBLE}
            />
          )}
          value={value}
        />
      ))}
    </LineGroup>
  );
};
