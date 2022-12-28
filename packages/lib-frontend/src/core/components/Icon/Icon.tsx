import { _Icon } from '@lib/frontend/core/components/Icon/_Icon';
import { ICON_FONT_SIZE_OFFSET } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const Icon: SFCModel<IconPropsModel> = (props) => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  return (
    <_Icon
      {...props}
      style={{
        ...styles,
        fontSize: styles.fontSize ? styles.fontSize + ICON_FONT_SIZE_OFFSET : styles.fontSize,
      }}
    />
  );
};
