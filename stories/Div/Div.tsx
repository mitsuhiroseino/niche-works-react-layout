/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import type { DivProps } from './types';

const Div = forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});
Div.displayName = 'Div';
export default Div;
