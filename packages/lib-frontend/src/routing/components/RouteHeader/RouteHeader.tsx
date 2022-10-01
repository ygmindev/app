import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ROUTE_HEADER_HEIGHT } from '@lib/frontend/routing/components/RouteHeader/RouteHeader.constants';
import type { RouteHeaderPropsModel } from '@lib/frontend/routing/components/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { Fragment } from 'react';

export const RouteHeader: SFCModel<RouteHeaderPropsModel> = ({
  icon,
  onBack,
  paths,
  testID,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      {paths && (
        <Wrapper isRowAlign>
          {paths.map((path, i) =>
            path.title ? (
              <Fragment key={path.pathname}>
                <Link onPress={() => push(path.pathname)}>{path.title}</Link>
                {i ? <Icon icon={ICON.chevronRight} /> : null}
              </Fragment>
            ) : null,
          )}
          {title && <Text>{title}</Text>}
        </Wrapper>
      )}
      <Wrapper
        height={ROUTE_HEADER_HEIGHT}
        isRowAlign>
        <Icon
          icon={ICON.chevronLeft}
          isTitle
          onPress={onBack}
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
