import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import {
  type UseTextStylesModel,
  type UseTextStylesParamsModel,
} from '@lib/frontend/style/hooks/useTextStyles/useTextStyles.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const useTextStyles = <TType,>({
  props,
}: UseTextStylesParamsModel<TType>): UseTextStylesModel => {
  const styles = useStyles({ props, stylers: [textStyler] });
  return {
    ...styles,
    textProps: { ...props, style: styles.styles },
  };
};
