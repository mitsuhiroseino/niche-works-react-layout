/** @jsxImportSource @emotion/react */
import withLayout from '../../src/hocs/withLayout';
import Box from '../Box';
import type { LayoutContainerProps } from './types';

const LayoutContainer = withLayout<LayoutContainerProps, HTMLDivElement>(Box, {
  displayName: 'LayoutContainer',
});
export default LayoutContainer;
