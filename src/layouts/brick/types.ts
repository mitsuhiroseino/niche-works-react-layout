import type {
  AdjustProps,
  AlignProps,
  ChildCountProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../_types';

/**
 * brickのプロパティ
 */
export type BrickLayoutProps = LayoutPropsBase<'brick'> &
  AdjustProps &
  AlignProps &
  ChildCountProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
