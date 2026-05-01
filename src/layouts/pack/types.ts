import type {
  LayoutDefinitionPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type PackLayoutProps = LayoutDefinitionPropsBase<'pack'> &
  PackLayoutOwnProps;

export type PackLayoutOwnProps = OrientationProps & SpacingProps;
