import type { BalanceLayoutProps } from './balance';
import {
  clsLayoutAdjustXExpand,
  clsLayoutAdjustXNone,
  clsLayoutAdjustXShrink,
  clsLayoutAdjustYExpand,
  clsLayoutAdjustYNone,
  clsLayoutAdjustYShrink,
  clsLayoutAlignXCenter,
  clsLayoutAlignXFit,
  clsLayoutAlignXLeft,
  clsLayoutAlignXRight,
  clsLayoutAlignXSpaceAround,
  clsLayoutAlignXSpaceBetween,
  clsLayoutAlignXSpaceEvenly,
  clsLayoutAlignYBottom,
  clsLayoutAlignYFit,
  clsLayoutAlignYMiddle,
  clsLayoutAlignYSpaceAround,
  clsLayoutAlignYSpaceBetween,
  clsLayoutAlignYSpaceEvenly,
  clsLayoutAlignYTop,
  clsLayoutChildSizeX,
  clsLayoutChildSizeY,
  clsLayoutDirectionX,
  clsLayoutDirectionY,
  varLayoutChildSizeX,
  varLayoutChildSizeY,
} from './constants';
import type { MatrixLayoutProps } from './matrix';
import type { PackLayoutProps } from './pack';
import type { PinLayoutProps } from './pin';
import type { StackLayoutProps } from './stack';
import type { TileLayoutProps } from './tile';

export const LAYOUT_PROPS_KEYS: {
  [K in keyof Required<
    Omit<
      BalanceLayoutProps &
        TileLayoutProps &
        PackLayoutProps &
        MatrixLayoutProps &
        PinLayoutProps &
        StackLayoutProps,
      'children' | 'className' | 'style'
    >
  >]: number;
} = {
  layout: 1,
  direction: 1,
  scroll: 1,
  spacing: 1,
  alignX: 1,
  childSizeX: 1,
  adjustX: 1,
  childCountX: 1,
  spacingX: 1,
  templateX: 1,
  alignY: 1,
  childSizeY: 1,
  adjustY: 1,
  childCountY: 1,
  spacingY: 1,
  templateY: 1,
};

export const MIN_MAX_PROPS = {
  height: {
    min: 'minHeight',
    max: 'maxHeight',
  },
  width: {
    min: 'minWidth',
    max: 'maxWidth',
  },
};

/**
 * 整列
 */
export const clsLayoutDirection = {
  x: clsLayoutDirectionX,
  y: clsLayoutDirectionY,
} as const;

/**
 * 横位置・縦位置
 */
export const clsLayoutAlign = {
  x: {
    left: clsLayoutAlignXLeft,
    center: clsLayoutAlignXCenter,
    right: clsLayoutAlignXRight,
    'space-between': clsLayoutAlignXSpaceBetween,
    'space-around': clsLayoutAlignXSpaceAround,
    'space-evenly': clsLayoutAlignXSpaceEvenly,
    fit: clsLayoutAlignXFit,
  },
  y: {
    top: clsLayoutAlignYTop,
    middle: clsLayoutAlignYMiddle,
    bottom: clsLayoutAlignYBottom,
    'space-between': clsLayoutAlignYSpaceBetween,
    'space-around': clsLayoutAlignYSpaceAround,
    'space-evenly': clsLayoutAlignYSpaceEvenly,
    fit: clsLayoutAlignYFit,
  },
} as const;

/**
 * 子要素の幅・高さ調整
 */
export const clsLayoutAdjust = {
  x: {
    none: clsLayoutAdjustXNone,
    expand: clsLayoutAdjustXExpand,
    shrink: clsLayoutAdjustXShrink,
  },
  y: {
    none: clsLayoutAdjustYNone,
    expand: clsLayoutAdjustYExpand,
    shrink: clsLayoutAdjustYShrink,
  },
} as const;

/**
 * 子要素の幅・高さ
 */
export const clsLayoutChildSize = {
  x: clsLayoutChildSizeX,
  y: clsLayoutChildSizeY,
} as const;

/**
 * 子要素の幅・高さ
 */
export const varLayoutChildSize = {
  x: varLayoutChildSizeX,
  y: varLayoutChildSizeY,
} as const;

/**
 * 交差軸方向のサイズプロパティ
 */
export const cssLayoutCrossAxisSizeProp = {
  x: 'height',
  y: 'width',
} as const;
