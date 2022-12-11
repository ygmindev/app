import { STORY_WIDTH_DEFAULT } from '@app/web-storybook/utils/withStory/withStory.constants';
import type {
  StoryParamsModel,
  WithStoryModel,
  WithStoryParamsModel,
} from '@app/web-storybook/utils/withStory/withStory.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { THEME_COLOR } from '@lib/frontend/style/utils/theme/theme.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { uid } from '@lib/shared/core/utils/uid/uid';
import type { PartialStoryFn, StoryContext } from '@storybook/addons';
import type { ArgTypes, Meta, Story } from '@storybook/react';
import { isArray, isFunction, isPlainObject, map, trim } from 'lodash';
import type { ComponentType, ReactElement } from 'react';
import { createElement, isValidElement } from 'react';

const _Story = <TProps,>({
  children,
  name,
  props,
  style,
}: StoryParamsModel<TProps>): ReactElement => (
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
  const meta: Meta<TProps> = {
    argTypes: { children: { control: false } } as PartialModel<ArgTypes<TProps>>,
    component: target,
    title: trim(_displayName, '_'),
  };
  const _variants = variants ? withId(variants) : [];
  const Template: Story<TProps> = (params) =>
    createElement<TProps & object>(
      target as ComponentType<TProps & object>,
      params as TProps & object,
    );
  const Default = Template.bind({});
  Default.args = defaultProps;
  Default.decorators = [
    ...(Default.decorators || []),
    (Story: PartialStoryFn<ReactElement>, { args }: StoryContext): ReactElement<TProps> => (
      <Wrapper p spacing width={STORY_WIDTH_DEFAULT}>
        <_Story name="Default">
          <Story />
        </_Story>

        {_variants.map((variant) => (
          <_Story key={variant.id} name={variant.name} props={variant.props}>
            {createElement<TProps & object>(
              target as ComponentType<TProps & object>,
              { ...defaultProps, ...args, ...variant.props } as TProps & object,
            )}
          </_Story>
        ))}
      </Wrapper>
    ),
  ] as Array<PartialStoryFn<ReactElement>>;

  return { Default, meta };
};
