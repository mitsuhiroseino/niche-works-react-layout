import type { StyleProxyOptions } from '@niche-works/react-style-proxy';
import type { CSSProperties, ReactNode } from 'react';

export type WidthLayoutOptions = StyleProxyOptions & {
  /**
   * コンポーネントに設定するdisplayName
   */
  displayName?: string;
};

/**
 * レイアウトの共通プロパティ
 */
export type LayoutPropsBase = TargetComponentProps & LayoutUtilOptionsBase;

/**
 * レイアウトユーティリティの共通プロパティ
 */
export type LayoutUtilOptionsBase = {
  /**
   * スクロールの有無
   */
  scroll?: boolean;

  /**
   * スタイル
   */
  style?: CSSProperties;
};

/**
 * レイアウトを付与する対象のコンポーネントの最低限のプロパティ
 */
export type TargetComponentProps = {
  /**
   * クラス名
   */
  className?: string;

  /**
   * 子要素
   */
  children?: ReactNode;
};
