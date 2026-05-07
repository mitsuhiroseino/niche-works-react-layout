import unit from '@niche-works/react/utils/unit';
import clsx from 'clsx';
import {
  clsLayoutSpacingX,
  clsLayoutSpacingY,
  varLayoutSpacingX,
  varLayoutSpacingY,
} from '../constants';
import type { ChildSpacing, StyleResult } from '../types';
import _hasValue from './_hasValue';

/**
 * スペーシングに関する設定の適用
 * @param result
 * @param spacing
 * @param spacingX
 * @param spacingY
 */
export default function _applySpacing(
  result: StyleResult,
  spacing: ChildSpacing,
  spacingX: ChildSpacing,
  spacingY: ChildSpacing,
): void {
  spacingX = spacingX ?? spacing;
  if (_hasValue(spacingX)) {
    // 横方向のスペーシング
    result.className = clsx(result.className, clsLayoutSpacingX);
    result.style[varLayoutSpacingX] = unit(spacingX);
  }
  spacingY = spacingY ?? spacing;
  if (_hasValue(spacingY)) {
    // 縦方向のスペーシング
    result.className = clsx(result.className, clsLayoutSpacingY);
    result.style[varLayoutSpacingY] = unit(spacingY);
  }
}
