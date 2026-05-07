import type { WithPartsProps } from '@niche-works/react-parts-props';
import type { StyleProps } from '@niche-works/react-style-props';
import type { DivProps } from '../Div';

/**
 * プロパティ
 */
export type BoxProps = BoxOwnProps &
  StyleProps &
  WithPartsProps<{
    root: DivProps;
  }>;

/**
 * 固有のプロパティ
 */
export type BoxOwnProps = {};
