/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithStackLayoutProps } from '../src/hocs/withStackLayout';
import withStackLayout from '../src/hocs/withStackLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withStackLayout<BoxProps & WithStackLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withStackLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.stack,
  args: {
    ...ARGS.stack,
    childCount: 12,
  },
  parameters: CONTAINER_PARAMS,
};
