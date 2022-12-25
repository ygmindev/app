import { STORY_WIDTH_DEFAULT } from '@app/web-storybook/utils/withStory/withStory.constants';
import type {
  StoryParamsModel,
  WithStoryModel,
  WithStoryParamsModel,
} from '@app/web-storybook/utils/withStory/withStory.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { uid } from '@lib/shared/core/utils/uid/uid';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { isArray, isFunction, isPlainObject, map, trim } from 'lodash';
import type { ComponentType, ReactElement } from 'react';
import { createElement, isValidElement } from 'react';

const _Component = <TProps,>({
  children,
  name,
  props,
  style,
}: StoryParamsModel<TProps>): ReactElement<TProps> => (
  <Wrapper spacing style={style}>
    {name ? (
      <Text isTitle>{name}</Text>
    ) : (
      <Wrapper isRowAlign>
        {map(props as object, (v, k) => (
          <Wrapper isRow key={uid()}>
            <Text isTitle>{`${k}=`}</Text>

            <Text color={THEME_COLOR.PRIMARY} isTitle>{`${
              isFunction(v)
                ? 'function'
                : isValidElement(v)
                ? 'element'
                : isPlainObject(v)
                ? JSON.stringify(v)
                : isArray(v)
                ? 'array'
                : v
            }`}</Text>
          </Wrapper>
        ))}
      </Wrapper>
    )}

    <Wrapper align={FLEX_ALIGN.FLEX_START} mLeft>
      {children}
    </Wrapper>
  </Wrapper>
);

export const withStory = <TProps,>({
  defaultProps,
  displayName,
  target,
  variants,
}: WithStoryParamsModel<TProps>): WithStoryModel<TProps> => {
  const _displayName = displayName || target.displayName || target.name || uid('display-name');
  const meta: Meta<ComponentType<TProps>> = {
    argTypes: { children: { control: false } } as Partial<ArgTypes<TProps>>,
    component: target,
    title: trim(_displayName, '_'),
  };
  const _variants = variants ? withId(variants) : [];
  const Story: StoryObj<ComponentType<TProps>> = {
    args: defaultProps,
    decorators: [
      (Component, { args }) => (
        <Wrapper p spacing width={STORY_WIDTH_DEFAULT}>
          <_Component name="Story">
            <Component />
          </_Component>

          {_variants.map((variant) => (
            <_Component key={variant.id} name={variant.name} props={variant.props}>
              {createElement<TProps & object>(
                target as ComponentType<TProps & object>,
                { ...defaultProps, ...args, ...variant.props } as TProps & object,
              )}
            </_Component>
          ))}
        </Wrapper>
      ),
    ],
    render: (props) =>
      createElement<TProps & object>(
        target as ComponentType<TProps & object>,
        props as TProps & object,
      ),
  };

  return { Story, meta };
};
