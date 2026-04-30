import type { StyleProxyOptions } from '@niche-works/react-style-proxy';
import type { BalanceLayoutProps } from './layouts/balance';
import type { BrickLayoutProps } from './layouts/brick';
import type { ConformLayoutProps } from './layouts/conform';
import type { MatrixLayoutProps } from './layouts/matrix';
import type { PlotLayoutProps } from './layouts/plot';
import type { StackLayoutProps } from './layouts/stack';

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

export type WidthLayoutOptions = StyleProxyOptions & {
  /**
   * コンポーネントに設定するdisplayName
   */
  displayName?: string;
};
