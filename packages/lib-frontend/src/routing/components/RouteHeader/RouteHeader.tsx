import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
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
          {paths.map(({ pathname, title }, i) =>
            title ? (
              <Fragment key={pathname}>
                <Link onPress={() => push({ params: {}, pathname })}>{title}</Link>

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
