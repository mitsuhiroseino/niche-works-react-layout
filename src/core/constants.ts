export {
  Adjust,
  AlignX,
  AlignY,
  Direction,
} from '@niche-works/css-layouts/constants';

/**
 * レイアウト種別
 */
export const LayoutType = {
  balance: 'balance',
  flow: 'flow',
  matrix: 'matrix',
  pack: 'pack',
  pin: 'pin',
  stack: 'stack',
  tile: 'tile',
} as const;
export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];
