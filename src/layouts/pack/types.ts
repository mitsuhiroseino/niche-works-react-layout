import type {
  DirectionProps,
  LayoutDefinitionPropsBase,
  SpacingProps,
} from '../types';

export type PackLayoutProps = LayoutDefinitionPropsBase<'pack'> &
  PackLayoutOwnProps;

export type PackLayoutOwnProps = DirectionProps & SpacingProps;
