import type { CSSProperties, ReactNode } from 'react';
import type {
  AlignHorizontal,
  AlignVertical,
  LayoutAdjust,
  LayoutType,
  Orientation,
} from '../constaints';

/**
 * レイアウトの共通プロパティ
 */
export type LayoutPropsBase<L extends LayoutType> = {
  /**
   * レイアウト種別
   */
  layout?: L;

  /**
   * スクロールの有無
   */
  scroll?: boolean;

  /**
   * 子要素のスタイル
   */
  childStyle?: CSSProperties;

  /**
   * 子要素
   */
  children?: ReactNode;
};

/**
 * 子要素を並べる方向
 */
export type OrientationProps = {
  /**
   * 並べる方向
   */
  orientation?: Orientation;
};

/**
 * 子要素の位置
 */
export type AlignProps = {
  /**
   * 子要素の横位置
   */
  alignHorizontal?: AlignHorizontal;

  /**
   * 子要素の縦位置
   */
  alignVertical?: AlignVertical;
};

/**
 * 子要素のサイズ調整
 */
export type AdjustProps = {
  /**
   * 子要素の幅の調整
   * sizeHorizontalを指定した場合に有効
   * デフォルトは`none`
   */
  adjustHorizontal?: LayoutAdjust;

  /**
   * 子要素の高さの調整
   * sizeVerticalを指定した場合に有効
   * デフォルトは`none`
   */
  adjustVertical?: LayoutAdjust;
};

/**
 * 子要素のサイズ
 */
export type ChildSizeProps = {
  /**
   * 子要素の高さ
   */
  sizeHorizontal?: ChildSize;

  /**
   * 子要素の高さ
   */
  sizeVertical?: ChildSize;
};

/**
 * 子要素の数
 */
export type ChildCountProps = {
  /**
   * 横方向の要素数
   */
  countHorizontal?: number;

  /**
   * 縦方向の要素数
   */
  countVertical?: number;
};

/**
 * gridのテンプレート
 */
export type GridTemplateProps = {
  /**
   * 横方向の設定
   * このプロパティが設定されている場合、countHorizontal,sizeHorizontalは無効
   */
  templateHorizontal?: GridTemplate | (string | number)[];

  /**
   * 縦方向の設定
   * このプロパティが設定されている場合、countVertical,sizeVerticalは無効
   */
  templateVertical?: GridTemplate | (string | number)[];
};

/**
 * 要素間の余白
 */
export type SpacingProps = {
  /**
   * 余白
   */
  spacingAll?: ChildSpacing;

  /**
   * 横方向の余白
   */
  spacingHorizontal?: ChildSpacing;

  /**
   * 縦方向の余白
   */
  spacingVertical?: ChildSpacing;
};

/**
 * レイアウト設定
 */
export type Layout<P = {}> = {
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
  getContainerStyle?: (props: P) => CSSProperties;

  /**
   * 子要素のスタイル
   * @param props
   * @returns
   */
  getChildStyle?: (props: P) => CSSProperties;
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
