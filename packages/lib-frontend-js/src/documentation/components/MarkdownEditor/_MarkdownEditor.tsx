import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { type _MarkdownEditorPropsModel } from '@lib/frontend/documentation/components/MarkdownEditor/_MarkdownEditor.models';
import MDEditor from '@uiw/react-md-editor';

export const _MarkdownEditor: LFCModel<_MarkdownEditorPropsModel> = ({
  defaultValue,
  height,
  onChange,
  value,
}) => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  return (
    <div data-color-mode="light">
      <MDEditor
        height={height}
        onChange={valueControlledSet}
        overflow={false}
        value={valueControlled}
      />
    </div>
  );
};
