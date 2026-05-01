import type { StyleProxyOptions } from '@niche-works/react-style-proxy';
import type { LayoutDefinition } from '../../layouts';
import type { LayoutPropsBase } from '../../types';

export type WithLayoutBaseProps = LayoutPropsBase & {
  /**
   * レイアウト定義
   */
  layout?: LayoutDefinition;
};

export type WithLayoutBaseOptions = StyleProxyOptions & {
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
