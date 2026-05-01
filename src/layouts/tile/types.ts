import type {
  AdjustProps,
  AlignProps,
  ChildCountProps,
  ChildSizeProps,
  LayoutDefinitionPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * tileのプロパティ
 */
export type TileLayoutProps = LayoutDefinitionPropsBase<'tile'> &
  TileLayoutOwnProps;

export type TileLayoutOwnProps = AdjustProps &
  AlignProps &
  ChildCountProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
