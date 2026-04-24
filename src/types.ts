import type { StyleProxyOptions } from '@niche-works/react-style-proxy';

export type { LayoutProps } from './layouts/types';

export type WidthLayoutOptions = StyleProxyOptions & {
  /**
   * コンポーネントに設定するdisplayName
   */
  displayName?: string;
};
