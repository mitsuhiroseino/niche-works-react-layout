import unit from '@niche-works/react/utils/unit';
import clsx from 'clsx';
import {
  clsLayoutChildSizeX,
  clsLayoutChildSizeY,
  varLayoutChildSizeX,
  varLayoutChildSizeY,
} from '../constants';
import type { ChildSpacing, StyleResult } from '../types';
import _hasValue from './_hasValue';

/**
 * 子要素のサイズに関する設定の適用
 * @param result
 * @param childSizeX
 * @param childSizeY
 */
export default function _applyChildSize(
  result: StyleResult,
  childSizeX: ChildSpacing,
  childSizeY: ChildSpacing,
): void {
  // 子要素のサイズ
  if (_hasValue(childSizeX)) {
    result.className = clsx(result.className, clsLayoutChildSizeX);
    result.style[varLayoutChildSizeX] = unit(childSizeX);
  }
  if (_hasValue(childSizeY)) {
    result.className = clsx(result.className, clsLayoutChildSizeY);
    result.style[varLayoutChildSizeY] = unit(childSizeY);
  }
}
