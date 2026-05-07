/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WithPinLayoutProps } from '../src/hocs/withPinLayout';
import withPinLayout from '../src/hocs/withPinLayout';
import _createContainerDecorator from './_createContainerDecorator';
import _createResizableContainer from './_createResizableContainer';
import type { BoxProps } from './Box';
import Box from './Box';
import { ARGS, ARG_TYPES, CONTAINER_PARAMS } from './constants';

const ResizableContainer = _createResizableContainer(
  withPinLayout<BoxProps & WithPinLayoutProps, HTMLDivElement>(Box),
);
const meta = {
  title: 'withPinLayout',
  component: ResizableContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator(),
} satisfies Meta<typeof ResizableContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: ARG_TYPES.pin,
  args: {
    ...ARGS.pin,
    childCount: 12,
  },
  parameters: CONTAINER_PARAMS,
};
