import type { BalanceLayoutProps } from './balance';
import type { MatrixLayoutProps } from './matrix';
import type { PackLayoutProps } from './pack';
import type { PinLayoutProps } from './pin';
import type { StackLayoutProps } from './stack';
import type { TileLayoutProps } from './tile';

export const LAYOUT_PROPS_KEYS: {
  [K in keyof Required<
    BalanceLayoutProps &
      TileLayoutProps &
      PackLayoutProps &
      MatrixLayoutProps &
      PinLayoutProps &
      StackLayoutProps
  >]: number;
} = {
  layout: 1,
  orientation: 1,
  children: 1,
  childStyle: 1,
  scroll: 1,
  spacingAll: 1,
  alignHorizontal: 1,
  sizeHorizontal: 1,
  adjustHorizontal: 1,
  countHorizontal: 1,
  spacingHorizontal: 1,
  templateHorizontal: 1,
  alignVertical: 1,
  sizeVertical: 1,
  adjustVertical: 1,
  countVertical: 1,
  spacingVertical: 1,
  templateVertical: 1,
  flatCss: 1,
  style: 1,
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
