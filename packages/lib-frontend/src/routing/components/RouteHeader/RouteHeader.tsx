import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { ROUTE_HEADER_HEIGHT } from '@lib/frontend/routing/components/RouteHeader/RouteHeader.constants';
import type { RouteHeaderPropsModel } from '@lib/frontend/routing/components/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const RouteHeader: SFCModel<RouteHeaderPropsModel> = ({ icon, testID, title, ...props }) => {
  const { styles } = useStyles({ props });
  const { up } = useRouter();
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Wrapper
        height={ROUTE_HEADER_HEIGHT}
        isRowAlign>
        <Icon
          icon={ICON.chevronLeft}
          isTitle
          onPress={up}
        />

        {title && (
          <IconText
            icon={icon}
            isTitle>
            {title}
          </IconText>
        )}
      </Wrapper>
    </Wrapper>
  );
};
