import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _MarkdownEditor } from '@lib/frontend/documentation/components/MarkdownEditor/_MarkdownEditor';
import {
  type MarkdownEditorPropsModel,
  type MarkdownEditorRefModel,
} from '@lib/frontend/documentation/components/MarkdownEditor/MarkdownEditor.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const MarkdownEditor: RLFCModel<MarkdownEditorRefModel, MarkdownEditorPropsModel> = ({
  defaultValue,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  // const x = useStatic({ src: '/assets/images/brands/google.svg' });
  // console.warn(x);
  return (
    <Wrapper
      {...wrapperProps}
      border
      height={theme.layout.height[THEME_SIZE.SMALL]}
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      round>
      <_MarkdownEditor
        defaultValue={defaultValue}
        height={theme.layout.height[THEME_SIZE.SMALL]}
      />
    </Wrapper>
  );
};
