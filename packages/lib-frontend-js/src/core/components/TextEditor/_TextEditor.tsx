import { $toggleLink, AutoLinkNode, LinkNode } from '@lexical/link';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListItemNode,
  ListNode,
} from '@lexical/list';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { mergeRegister } from '@lexical/utils';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { ButtonGroup } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { type DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { type _TextEditorPropsModel } from '@lib/frontend/core/components/TextEditor/_TextEditor.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ModalFormButton } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton';
import { type ModalFormButtonPropsModel } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton.models';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
  ParagraphNode,
  type RangeSelection,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from 'lexical';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const _TextEditor: LFCModel<_TextEditorPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();

  const initialConfig = {
    namespace: 'MyEditor',
    nodes: [ParagraphNode, TextNode, AutoLinkNode, LinkNode, ListNode, ListItemNode],
    onError: (e: unknown) => console.warn(e),
    theme: {},
  };

  return (
    <Wrapper
      {...wrapperProps}
      border
      pBottom
      pHorizontal
      round>
      <LexicalComposer initialConfig={initialConfig}>
        <Wrapper s>
          <_Toolbar />

          <Wrapper
            border
            round>
            <RichTextPlugin
              ErrorBoundary={LexicalErrorBoundary}
              contentEditable={
                <ContentEditable
                  style={{
                    fontFamily: theme.font.fontFamily[FONT_FAMILY.MAIN],
                    fontSize: theme.font.size[THEME_SIZE.MEDIUM],
                    fontWeight: theme.font.weight.main,
                    outline: 'none',
                    padding: theme.shape.spacing[THEME_SIZE.MEDIUM],
                  }}
                />
              }
            />
          </Wrapper>
        </Wrapper>

        <AutoLinkPlugin
          matchers={[
            (text) => {
              const match =
                /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.exec(
                  text,
                );
              const fullMatch = match?.[0];
              return fullMatch
                ? {
                    attributes: { target: '_blank' },
                    index: match.index,
                    length: fullMatch.length,
                    text: fullMatch,
                    url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
                  }
                : null;
            },
          ]}
        />

        <TabIndentationPlugin />

        <LinkPlugin />

        <ListPlugin />

        <HistoryPlugin />
      </LexicalComposer>
    </Wrapper>
  );
};

const _Toolbar: LFCModel = () => {
  const { t } = useTranslation();
  const [editor] = useLexicalComposerContext();
  const [enabled, enabledSet] = useState<Record<string, boolean>>({});
  const [disabled, disabledSet] = useState<Record<string, boolean>>({ redo: true, undo: true });
  const [selected, selectedSet] = useState<string>();

  const getSelection = useCallback((): RangeSelection | null => {
    const selection = $getSelection();
    return $isRangeSelection(selection) ? selection : null;
  }, []);

  editor.registerCommand(
    SELECTION_CHANGE_COMMAND,
    () => {
      const selection = getSelection();
      selectedSet(selection ? selection.getTextContent() : '');
      return true;
    },
    1,
  );

  const $updateToolbar = useCallback(() => {
    const selection = getSelection();
    selection &&
      enabledSet({
        bold: selection.hasFormat('bold'),
        italic: selection.hasFormat('italic'),
        underline: selection.hasFormat('underline'),
      });
  }, [enabledSet]);

  const insertLink = ({ link, text }: { link: string; text: string }): void => {
    editor.update(() => {
      const selection = getSelection();
      if (selection) {
        const { anchor, focus } = selection;
        selection.insertText(text);
        anchor.offset -= text.length;
        focus.offset = anchor.offset + text.length;
        $toggleLink(link);
      }
    });
  };

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => editorState.read($updateToolbar)),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        1,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          disabledSet({ ...disabled, undo: !payload });
          return false;
        },
        1,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          disabledSet({ ...disabled, redo: !payload });
          return false;
        },
        1,
      ),
    );
  }, [editor, $updateToolbar, disabled, disabledSet]);

  const buttons = useMemo<
    Array<ButtonPropsModel & PartialModel<ModalFormButtonPropsModel<unknown>> & DividerPropsModel>
  >(
    () => [
      {
        icon: 'undo',
        onPress: () => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        },
        tooltip: t('text:undo'),
      },

      {
        icon: 'redo',
        onPress: () => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        },
        tooltip: t('text:redo'),
      },

      {},

      {
        icon: 'indent',
        onPress: () => {
          editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
        },
        tooltip: t('text:indent'),
      },

      {
        icon: 'outdent',
        onPress: () => {
          editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
        },
        tooltip: t('text:outdent'),
      },

      {},

      {
        icon: 'bold',
        onPress: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
          enabledSet({ ...enabled, bold: !enabled.bold });
        },
        tooltip: t('text:bold'),
      },

      {
        icon: 'italic',
        onPress: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
          enabledSet({ ...enabled, italic: !enabled.italic });
        },
        tooltip: t('text:italic'),
      },

      {
        icon: 'underline',
        onPress: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
          enabledSet({ ...enabled, underline: !enabled.underline });
        },
        tooltip: t('text:underline'),
      },

      {},

      {
        icon: 'alignLeft',
        onPress: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
          enabledSet({ ...enabled, alignLeft: !enabled.alignLeft });
        },
        tooltip: t('text:alignLeft'),
      },
      {
        icon: 'alignCenter',
        onPress: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
          enabledSet({ ...enabled, alignCenter: !enabled.alignCenter });
        },
        tooltip: t('text:alignCenter'),
      },
      {
        icon: 'alignRight',
        onPress: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
          enabledSet({ ...enabled, alignRight: !enabled.alignRight });
        },
        tooltip: t('text:alignRight'),
      },
      {
        icon: 'alignJustify',
        onPress: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
          enabledSet({ ...enabled, alignJustify: !enabled.alignJustify });
        },
        tooltip: t('text:justify'),
      },

      {},

      {
        icon: 'bulletList',
        onPress: () => {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        },
        tooltip: t('text:bulletList'),
      },
      {
        icon: 'numberList',
        onPress: () => {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        },
        tooltip: t('text:numberList'),
      },

      {},

      {
        fields: [
          {
            element: (
              <TextInput
                icon="text"
                label={t('core:text')}
              />
            ),
            id: 'text',
          },
          {
            element: (
              <TextInput
                icon="link"
                label={t('core:link')}
              />
            ),
            id: 'link',
          },
        ],
        icon: 'link',
        initialValues: { text: selected },
        onSubmit: async (data: { link: string; text: string }) => {
          void insertLink(data);
        },
        tooltip: t('text:link'),
        validators: {
          link: validateNotEmpty,
          text: validateNotEmpty,
        },
      },
    ],
    [enabled, enabledSet, selected, disabled, disabledSet],
  );

  return (
    <Wrapper
      border={DIRECTION.BOTTOM}
      isFullWidth
      isRow>
      <ButtonGroup type={BUTTON_TYPE.INVISIBLE}>
        {buttons.map(({ fields, icon, initialValues, onClose, onPress, onSubmit, tooltip }, i) => {
          const elementState = icon
            ? enabled?.[icon]
              ? ELEMENT_STATE.ACTIVE
              : disabled?.[icon]
                ? ELEMENT_STATE.DISABLED
                : undefined
            : undefined;
          return onPress ? (
            <Button
              elementState={elementState}
              icon={icon}
              key={icon}
              onPress={onPress}
              tooltip={tooltip}
            />
          ) : onSubmit ? (
            <ModalFormButton
              elementState={elementState}
              fields={fields ?? []}
              icon={icon}
              initialValues={initialValues}
              key={icon}
              onClose={onClose}
              onPress={onPress}
              onSubmit={onSubmit}
              title={tooltip}
              tooltip={tooltip}
            />
          ) : (
            <Divider key={`divider-${i}`} />
          );
        })}
      </ButtonGroup>
    </Wrapper>
  );
};
