import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { StylePropsModel } from '@lib/frontend/style/style.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithTestParamsModel } from '@lib/shared/test/utils/withTest/withTest.models';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

export interface WithStoryParamsModel<TProps> extends WithTestParamsModel<ComponentType<TProps>> {
  defaultProps: TProps;
  variants?: Array<Omit<StoryParamsModel<TProps>, 'children'>>;
}

export interface WithStoryModel<TProps> {
  Story: StoryObj<ComponentType<TProps>>;
  meta: Meta<ComponentType<TProps>>;
}

export interface StoryParamsModel<TProps> extends ChildrenPropsModel, StylePropsModel {
  name?: string;
  props?: PartialModel<TProps>;
}
