import { LAYOUT_PROPS } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.constants';
import {
  type UseLayoutStylesModel,
  type UseLayoutStylesParamsModel,
} from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { viewStyler } from '#lib-frontend/style/utils/styler/viewStyler/viewStyler';
import { pick } from '#lib-shared/core/utils/pick/pick';

export const useLayoutStyles = <TType,>({
  props,
}: UseLayoutStylesParamsModel<TType>): UseLayoutStylesModel => {
  const { align, isCenter, isHorizontalCenter, isRow, isRowAlign, isVerticalCenter, justify } =
    props;
  const styles = useStyles({
    props: {
      ...props,
      align: isCenter || isRowAlign || (isHorizontalCenter && !isRow) ? FLEX_ALIGN.CENTER : align,
      isRow: props.isRow || isRowAlign,
      justify: isCenter || (isVerticalCenter && !isRow) ? FLEX_ALIGN.CENTER : justify,
    },
    stylers: [viewStyler],
  });
  return {
    ...styles,
    wrapperProps: { ...pick(props, LAYOUT_PROPS), style: styles.styles },
  };
};
