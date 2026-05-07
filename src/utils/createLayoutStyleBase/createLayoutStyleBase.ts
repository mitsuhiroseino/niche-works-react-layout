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
  const { scroll, style, ...rest } = options;
  // layoutを取得
  const { createStyle, defaultProps } = layout;
  const argProps = maybeDefault(rest, defaultProps);
  // コンテナーのスタイル
  const { className, style: layoutedStyle = {} } = createStyle
    ? createStyle(argProps)
    : {};
  if (scroll) {
    layoutedStyle.overflow = 'auto';
  }
  if (style) {
    // コンテナーのスタイルのマージ
    Object.assign(layoutedStyle, style);
  }

  const result = {
    className,
    style: layoutedStyle,
  };
  console.log(result);
  return result;
}
