/** @jsxImportSource @emotion/react */
import { extractPartProps } from '@niche-works/react-parts-props';
import { withStyleProps } from '@niche-works/react-style-props';
import { forwardRef } from 'react';
import type { DivProps } from '../Div';
import Div from '../Div';
import type { BoxProps } from './types';

const StylableDiv = withStyleProps<DivProps, HTMLDivElement>(Div, {
  styleProp: 'css',
  styleApplyMode: 'append',
});

/**
 * スタイル関連の拡張を含んだdiv
 */
const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { partsProps, ...rest } = props;
  const divProps = extractPartProps('root', partsProps);
  return <StylableDiv ref={ref} {...rest} {...divProps} />;
});
Box.displayName = 'Box';
export default Box;
