import type {
  ChildCountProps,
  ChildSizeProps,
  GridTemplateProps,
  LayoutDefinitionPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type MatrixLayoutProps = LayoutDefinitionPropsBase<'matrix'> &
  MatrixLayoutOwnProps;

export type MatrixLayoutOwnProps = ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  OrientationProps &
  SpacingProps;
