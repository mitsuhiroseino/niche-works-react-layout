/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithPackLayoutProps } from '../src/hocs/withPackLayout';
import withPackLayout from '../src/hocs/withPackLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withPackLayout<BoxProps & WithPackLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withPackLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.pack,
  args: {
    ...ARGS.pack,
    childCount: 12,
  },
  parameters: CONTAINER_PARAMS,
};
