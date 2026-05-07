/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithBalanceLayoutProps } from '../src/hocs/withBalanceLayout';
import withBalanceLayout from '../src/hocs/withBalanceLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withBalanceLayout<BoxProps & WithBalanceLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withBalanceLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.balance,
  args: {
    ...ARGS.balance,
    childCount: 12,
  },
  parameters: CONTAINER_PARAMS,
};
