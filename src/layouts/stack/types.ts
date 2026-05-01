import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutDefinitionPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * stackのプロパティ
 */
export type StackLayoutProps = LayoutDefinitionPropsBase<'stack'> &
  StackLayoutOwnProps;

export type StackLayoutOwnProps = AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
