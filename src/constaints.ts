/**
 * レイアウト種別
 */
export const LayoutType = {
  balance: 'balance',
  matrix: 'matrix',
  pack: 'pack',
  pin: 'pin',
  stack: 'stack',
  tile: 'tile',
} as const;
export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

/**
 * 整列方向
 */
export const Direction = {
  x: 'x',
  y: 'y',
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction];

/**
 * 横位置
 *
 * - left: 左
 * - center: 中央
 * - right: 右
 * - space-between: 両端揃え
 * - space-around: 両端余白あり均等
 * - space-evenly: 完全均等
 * - fit: 親のサイズで均等配置
 */
export const AlignX = {
  left: 'left',
  center: 'center',
  right: 'right',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
  fit: 'fit',
} as const;
export type AlignX = (typeof AlignX)[keyof typeof AlignX];

/**
 * 縦位置
 *
 * - top: 上
 * - middle: 中央
 * - bottom: 下
 * - space-between: 両端揃え
 * - space-around: 両端余白あり均等
 * - space-evenly: 完全均等
 * - fit: 親のサイズで均等配置
 */
export const AlignY = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
  fit: 'fit',
} as const;
export type AlignY = (typeof AlignY)[keyof typeof AlignY];

/**
 * 親要素のサイズを基準にした子要素のサイズ調整
 *
 * - `none`
 *   - 親のサイズに足りないとき: そのまま
 *   - 親のサイズを超えるとき: そのまま
 * - `expand`
 *   - 親のサイズに足りないとき: 伸ばす
 *   - 親のサイズを超えるとき: そのまま
 * - `shrink`
 *   - 親のサイズに足りないとき: そのまま
 *   - 親のサイズを超えるとき: 縮める
 */
export const LayoutAdjust = {
  none: 'none',
  expand: 'expand',
  shrink: 'shrink',
} as const;
export type LayoutAdjust = (typeof LayoutAdjust)[keyof typeof LayoutAdjust];
