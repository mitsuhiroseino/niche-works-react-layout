/**
 * レイアウト種別
 */
export const LayoutType = {
  balance: 'balance',
  brick: 'brick',
  conform: 'conform',
  matrix: 'matrix',
  plot: 'plot',
  stack: 'stack',
} as const;
export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

/**
 * 並べる方向
 */
export const Orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical',
} as const;
export type Orientation = (typeof Orientation)[keyof typeof Orientation];

/**
 * 縦横共通の位置
 */
export const CommonAlign = {
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
  fit: 'fit',
} as const;
export type CommonAlign = (typeof CommonAlign)[keyof typeof CommonAlign];

/**
 * 横位置
 */
export const AlignHorizontal = {
  ...CommonAlign,
  left: 'left',
  center: 'center',
  right: 'right',
} as const;
export type AlignHorizontal =
  (typeof AlignHorizontal)[keyof typeof AlignHorizontal];

/**
 * 縦位置
 */
export const AlignVertical = {
  ...CommonAlign,
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
} as const;
export type AlignVertical = (typeof AlignVertical)[keyof typeof AlignVertical];

/**
 * 親要素のサイズを基準にした子要素のサイズ調整
 *
 * - `none`
 *   - 親のサイズに足りないとき: そのまま
 *   - 親のサイズを超えるとき: そのまま
 * - `expand`
 *   - 親のサイズに足りないとき: 伸ばす
 *   - 親のサイズを超えるとき: そのまま
 * - `narrow`
 *   - 親のサイズに足りないとき: そのまま
 *   - 親のサイズを超えるとき: 縮める
 */
export const LayoutAdjust = {
  none: 'none',
  expand: 'expand',
  narrow: 'narrow',
} as const;
export type LayoutAdjust = (typeof LayoutAdjust)[keyof typeof LayoutAdjust];
