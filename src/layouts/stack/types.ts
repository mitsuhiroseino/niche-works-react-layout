import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  DirectionProps,
  LayoutDefinitionPropsBase,
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
  DirectionProps &
  SpacingProps;
