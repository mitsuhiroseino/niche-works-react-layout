/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithTileLayoutProps } from '../src/hocs/withTileLayout';
import withTileLayout from '../src/hocs/withTileLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withTileLayout<BoxProps & WithTileLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withTileLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.tile,
  args: {
    ...ARGS.tile,
    childCount: 12,
  },
  parameters: CONTAINER_PARAMS,
};
