import type {
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../_types';

export type ConformLayoutProps = LayoutPropsBase<'conform'> &
  OrientationProps &
  SpacingProps;
