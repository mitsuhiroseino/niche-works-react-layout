import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../_types';

export type BalanceLayoutProps = LayoutPropsBase<'balance'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
