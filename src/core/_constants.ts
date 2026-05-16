import type {
  BalanceLayoutOptions,
  CreateLayout,
  FlowLayoutOptions,
  MatrixLayoutOptions,
  PackLayoutOptions,
  PinLayoutOptions,
  StackLayoutOptions,
  TileLayoutOptions,
} from '@niche-works/css-layouts';
import {
  balance,
  flow,
  matrix,
  pack,
  pin,
  stack,
  tile,
} from '@niche-works/css-layouts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LAYOUTS: Record<string, CreateLayout<any>> = {
  balance,
  flow,
  matrix,
  pack,
  pin,
  stack,
  tile,
} as const;

export const LAYOUT_PROPS_KEYS: {
  [K in keyof Required<
    BalanceLayoutOptions &
      FlowLayoutOptions &
      MatrixLayoutOptions &
      PackLayoutOptions &
      PinLayoutOptions &
      StackLayoutOptions &
      TileLayoutOptions
  >]: 1;
} = {
  adjustX: 1,
  adjustY: 1,
  alignX: 1,
  alignY: 1,
  childSizeX: 1,
  childSizeY: 1,
  direction: 1,
  spacing: 1,
  spacingX: 1,
  spacingY: 1,
  childCountX: 1,
  childCountY: 1,
  childY: 1,
};
