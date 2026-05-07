import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  DirectionProps,
  LayoutDefinitionPropsBase,
  SpacingProps,
} from '../types';

export type BalanceLayoutProps = LayoutDefinitionPropsBase<'balance'> &
  BalanceLayoutOwnProps;

export type BalanceLayoutOwnProps = AdjustProps &
  AlignProps &
  ChildSizeProps &
  DirectionProps &
  SpacingProps;
