/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithMatrixLayoutProps } from '../src/hocs/withMatrixLayout';
import withMatrixLayout from '../src/hocs/withMatrixLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withMatrixLayout<BoxProps & WithMatrixLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withMatrixLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.matrix,
  args: {
    ...ARGS.matrix,
    childCount: 12,
  },
  parameters: CONTAINER_PARAMS,
};
