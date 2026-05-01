import type { ChildSizeProps, LayoutDefinitionPropsBase } from '../types';

export type PinLayoutProps = LayoutDefinitionPropsBase<'pin'> &
  PinLayoutOwnProps;

export type PinLayoutOwnProps = ChildSizeProps;
