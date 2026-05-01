import maybeDefault from '@niche-works/utils/object/maybeDefault';
import type { LayoutDefinition } from '../../layouts/types';
import type {
  CreateLayoutStyleBaseOptions,
  CreateLayoutStyleBaseResult,
} from './types';

/**
 * レイアウト用のスタイルを作成する
 * @param props レイアウトプロパティ
 * @returns
 */
export default function createLayoutStyleBase(
  layout: LayoutDefinition,
  options: CreateLayoutStyleBaseOptions = {},
): CreateLayoutStyleBaseResult {
  const { scroll, flatCss, style, childStyle: cStyle, ...rest } = options;
  // layoutを取得
  const { getContainerStyle, getChildStyle, defaultProps } = layout;
  const argProps = maybeDefault(rest, defaultProps);
  // コンテナーのスタイル
  let layoutedStyle = getContainerStyle ? getContainerStyle(argProps) : null;
  if (scroll) {
    layoutedStyle = layoutedStyle || {};
    layoutedStyle.overflow = 'auto';
  }
  if (style) {
    // コンテナーのスタイルのマージ
    layoutedStyle = { ...layoutedStyle, ...style };
  }

  // 子要素のスタイル
  let layoutedChildStyle = getChildStyle ? getChildStyle(argProps) : null;
  if (flatCss) {
    if (cStyle) {
      // 子要素のスタイルのマージ
      layoutedChildStyle = { ...layoutedChildStyle, ...cStyle };
    }
  } else {
    if (layoutedChildStyle) {
      // 子要素のスタイルをコンテナーのスタイルにネスト
      layoutedStyle['& > *'] = layoutedChildStyle;
      layoutedChildStyle = null;
    }
  }

  return { style: layoutedStyle, childStyle: layoutedChildStyle };
}
