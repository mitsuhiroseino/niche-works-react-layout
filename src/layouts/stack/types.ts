import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../_types';

/**
 * stackのプロパティ
 */
export type StackLayoutProps = LayoutPropsBase<'stack'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
