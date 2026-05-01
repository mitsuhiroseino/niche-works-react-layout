import type { BalanceLayoutProps } from '../../layouts/balance';
import type { MatrixLayoutProps } from '../../layouts/matrix';
import type { PackLayoutProps } from '../../layouts/pack';
import type { PinLayoutProps } from '../../layouts/pin';
import type { StackLayoutProps } from '../../layouts/stack';
import type { TileLayoutProps } from '../../layouts/tile';

/**
 * 全レイアウトのプロパティ
 */
export type LayoutProps =
  | PinLayoutProps
  | BalanceLayoutProps
  | TileLayoutProps
  | PackLayoutProps
  | MatrixLayoutProps
  | StackLayoutProps;
