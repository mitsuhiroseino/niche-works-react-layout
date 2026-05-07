import type {
  AdjustProps,
  AlignProps,
  ChildCountProps,
  ChildSizeProps,
  DirectionProps,
  LayoutDefinitionPropsBase,
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
  DirectionProps &
  SpacingProps;
