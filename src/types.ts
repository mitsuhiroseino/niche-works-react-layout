import type { StyleProxyOptions } from '@niche-works/react-style-proxy';
import type { CSSProperties, ReactNode } from 'react';

export type WidthLayoutOptions = StyleProxyOptions & {
  /**
   * コンポーネントに設定するdisplayName
   */
  displayName?: string;

  /**
   * プレーンなCSSで返す
   * trueの場合はコンテナーと子要素にそれぞれスタイルを適用する
   */
  flatCss?: boolean;
};

/**
 * レイアウトの共通プロパティ
 */
export type LayoutPropsBase = LayoutUtilOptionsBase & {
  /**
   * 子要素
   */
  children?: ReactNode;
};

/**
 * レイアウトユーティリティの共通プロパティ
 */
export type LayoutUtilOptionsBase = {
  /**
   * スクロールの有無
   */
  scroll?: boolean;

  /**
   * コンテナーのスタイル
   */
  style?: CSSProperties;

  /**
   * 子要素のスタイル
   */
  childStyle?: CSSProperties;

  /**
   * プレーンなCSSで返す
   * trueの場合はコンテナーと子要素のスタイルがそれぞれ返る
   */
  flatCss?: boolean;
};
