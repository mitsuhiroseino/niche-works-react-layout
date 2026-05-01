import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutDefinitionPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type BalanceLayoutProps = LayoutDefinitionPropsBase<'balance'> &
  BalanceLayoutOwnProps;

export type BalanceLayoutOwnProps = AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
