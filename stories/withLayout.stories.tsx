/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithLayoutProps } from '../src/hocs/withLayout';
import withLayout from '../src/hocs/withLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withLayout<BoxProps & WithLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.all,
  args: {
    layout: 'stack',
    ...ARGS.all,
    childCount: 12,
    sizeType: 'rand',
  },
  parameters: {
    ...CONTAINER_PARAMS,
  },
};

export const NoSize: Story = {
  argTypes: ARG_TYPES.nosize,
  args: {
    layout: 'stack',
    ...ARGS.nosize,
    childCount: 12,
  },
  parameters: {
    sizeType: 'rand',
    posType: 'rand',
    ...CONTAINER_PARAMS,
  },
};

export const Balance: Story = {
  argTypes: ARG_TYPES.balance,
  args: {
    ...ARGS.balance,
    childCount: 12,
  },
  parameters: {
    defaultLayout: 'balance',
    ...CONTAINER_PARAMS,
  },
};

export const Pack: Story = {
  argTypes: ARG_TYPES.pack,
  args: {
    ...ARGS.pack,
    childCount: 12,
  },
  parameters: {
    defaultLayout: 'pack',
    sizeType: 'none',
    ...CONTAINER_PARAMS,
  },
};

export const Matrix: Story = {
  argTypes: ARG_TYPES.matrix,
  args: {
    ...ARGS.matrix,
    childCount: 12,
  },
  parameters: {
    defaultLayout: 'matrix',
    ...CONTAINER_PARAMS,
  },
};

export const Pin: Story = {
  argTypes: ARG_TYPES.pin,
  args: {
    ...ARGS.pin,
    childCount: 12,
  },
  parameters: {
    defaultLayout: 'pin',
    ...CONTAINER_PARAMS,
  },
};

export const Stack: Story = {
  argTypes: ARG_TYPES.stack,
  args: {
    ...ARGS.stack,
    childCount: 12,
  },
  parameters: {
    defaultLayout: 'stack',
    ...CONTAINER_PARAMS,
  },
};

export const Tile: Story = {
  argTypes: ARG_TYPES.tile,
  args: {
    ...ARGS.tile,
    childCount: 12,
  },
  parameters: {
    defaultLayout: 'tile',
    ...CONTAINER_PARAMS,
  },
};
