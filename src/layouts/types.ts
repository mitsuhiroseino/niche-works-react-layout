import type { BalanceLayoutProps } from './balance';
import type { BrickLayoutProps } from './brick';
import type { ConformLayoutProps } from './conform';
import type { MatrixLayoutProps } from './matrix';
import type { PlotLayoutProps } from './plot';
import type { StackLayoutProps } from './stack';

/**
 * 全レイアウトのプロパティ
 */
export type LayoutProps =
  | PlotLayoutProps
  | BalanceLayoutProps
  | BrickLayoutProps
  | ConformLayoutProps
  | MatrixLayoutProps
  | StackLayoutProps;
