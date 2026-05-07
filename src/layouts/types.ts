import type { LooseRecord } from '@niche-works/types';
import type { CSSProperties } from 'react';
import type {
  AlignX,
  AlignY,
  Direction,
  LayoutAdjust,
  LayoutType,
} from '../constaints';
import type { LayoutPropsBase } from '../types';

/**
 * レイアウト定義の共通プロパティ
 */
export type LayoutDefinitionPropsBase<L extends LayoutType> =
  LayoutPropsBase & {
    /**
     * レイアウト種別
     */
    layout?: L;
  };

/**
 * 子要素を並べる方向
 */
export type DirectionProps = {
  /**
   * 並べる方向
   */
  direction?: Direction;
};

/**
 * 子要素の位置
 */
export type AlignProps = {
  /**
   * 子要素の横位置
   */
  alignX?: AlignX;

  /**
   * 子要素の縦位置
   */
  alignY?: AlignY;
};

/**
 * 子要素のサイズ調整
 */
export type AdjustProps = {
  /**
   * 子要素の幅の調整
   * childSizeXを指定した場合に有効
   * デフォルトは`none`
   */
  adjustX?: LayoutAdjust;

  /**
   * 子要素の高さの調整
   * childSizeYを指定した場合に有効
   * デフォルトは`none`
   */
  adjustY?: LayoutAdjust;
};

/**
 * 子要素のサイズ
 */
export type ChildSizeProps = {
  /**
   * 子要素の幅
   */
  childSizeX?: ChildSize;

  /**
   * 子要素の高さ
   */
  childSizeY?: ChildSize;
};

/**
 * 子要素の数
 */
export type ChildCountProps = {
  /**
   * 横方向の要素数
   */
  childCountX?: number;

  /**
   * 縦方向の要素数
   */
  childCountY?: number;
};

/**
 * gridのテンプレート
 */
export type GridTemplateProps = {
  /**
   * 横方向の設定
   * このプロパティが設定されている場合、childCountX,childSizeXは無効
   */
  templateX?: GridTemplate | (string | number)[];

  /**
   * 縦方向の設定
   * このプロパティが設定されている場合、childCountY,childSizeYは無効
   */
  templateY?: GridTemplate | (string | number)[];
};

/**
 * 要素間の余白
 */
export type SpacingProps = {
  /**
   * 余白
   */
  spacing?: ChildSpacing;

  /**
   * 横方向の余白
   */
  spacingX?: ChildSpacing;

  /**
   * 縦方向の余白
   */
  spacingY?: ChildSpacing;
};

/**
 * レイアウト定義
 */
export type LayoutDefinition<P = LooseRecord> = {
  /**
   * レイアウト名
   */
  name: string;

  /**
   * プロパティのデフォルト値
   */
  defaultProps?: Partial<P>;

  /**
   * コンテナーのスタイル
   * @param props
   * @returns
   */
  createStyle: (props: P) => StyleResult;
};

/**
 * 子要素の高さ or 幅
 */
export type ChildSize = CSSProperties['flexBasis'];

/**
 * 余白
 */
export type ChildSpacing = CSSProperties['gap'];

/**
 * gridのテンプレート
 */
export type GridTemplate = CSSProperties['gridTemplateColumns'] &
  CSSProperties['gridTemplateRows'];

export type StyleResult = {
  /**
   * クラス
   */
  className?: string;

  /**
   * スタイル
   */
  style?: CSSPropertiesWithVars;
};

/**
 * CSS変数を許容するCSSProperties
 */
export type CSSPropertiesWithVars = CSSProperties & {
  [key: `--${string}`]: string | number | undefined;
};
