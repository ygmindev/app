import type { ContentPropsModel } from '@lib/frontend/core/components/Content/Content.models';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const Content: SFCModel<ContentPropsModel> = ({
  children,
  header,
  icon,
  testID,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      {...props}
      spacing
      style={styles}
      testID={testID}>
      {(title || header) && (
        <Wrapper isRowAlign>
          {title && (
            <IconText
              icon={icon}
              isSubtitle>
              {title}
            </IconText>
          )}
          {header}
        </Wrapper>
      )}
      {children}
    </Wrapper>
  );
};
