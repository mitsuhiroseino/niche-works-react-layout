import type {
  ChildCountProps,
  ChildSizeProps,
  DirectionProps,
  GridTemplateProps,
  LayoutDefinitionPropsBase,
  SpacingProps,
} from '../types';

export type MatrixLayoutProps = LayoutDefinitionPropsBase<'matrix'> &
  MatrixLayoutOwnProps;

export type MatrixLayoutOwnProps = ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  DirectionProps &
  SpacingProps;
