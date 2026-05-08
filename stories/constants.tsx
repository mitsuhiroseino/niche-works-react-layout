/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlignX,
  AlignY,
  Direction,
  LayoutAdjust,
  LayoutType,
} from '@niche-works/react-layout';
import type {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  DirectionProps,
  SpacingProps,
} from '@niche-works/react-layout/layouts';
import type { StyleProps } from '@niche-works/react-style-props';
import type { ArgTypes } from '@storybook/react-vite';
import type { LayoutUtilOptionsBase } from '../src/types';

export const LAYOUT_OPTIONS = Object.values(LayoutType);

export const DIRECTION_OPTIONS = Object.values(Direction);

export const ALAGN_X_OPTIONS = Object.values(AlignX);

export const ALAGN_Y_OPTIONS = Object.values(AlignY);

export const LAYOUT_ADJUST_OPTIONS = Object.values(LayoutAdjust);

export const LAYOUT_ARG_TYPES: ArgTypes = {
  layout: {
    control: { type: 'select' },
    options: LAYOUT_OPTIONS,
  },
  scroll: { type: 'boolean' },
};

export const DIRECTION_ARG_TYPES: ArgTypes = {
  direction: {
    control: { type: 'select' },
    options: DIRECTION_OPTIONS,
  },
};

export const ALIGN_ARG_TYPES: ArgTypes = {
  alignX: {
    control: { type: 'select' },
    options: ALAGN_X_OPTIONS,
  },
  alignY: {
    control: { type: 'select' },
    options: ALAGN_Y_OPTIONS,
  },
};

export const ADJUST_ARG_TYPES: ArgTypes = {
  adjustX: {
    control: { type: 'select' },
    options: LAYOUT_ADJUST_OPTIONS,
  },
  adjustY: {
    control: { type: 'select' },
    options: LAYOUT_ADJUST_OPTIONS,
  },
};

export const CHILD_SIZE_ARG_TYPES: ArgTypes = {
  childSizeX: {
    type: 'string',
  },
  childSizeY: {
    type: 'string',
  },
};

export const SPACING_ARG_TYPES: ArgTypes = {
  spacing: {
    type: 'string',
  },
  spacingX: {
    type: 'string',
  },
  spacingY: {
    type: 'string',
  },
};

export const CHILD_COUNT_ARG_TYPES: ArgTypes = {
  childCountX: {
    type: 'string',
  },
  childCountY: {
    type: 'string',
  },
};

export const GRID_TEMPLATE_ARG_TYPES: ArgTypes = {
  templateX: {
    type: 'string',
  },
  templateY: {
    type: 'string',
  },
};

export const DEBUG_ARG_TYPES: ArgTypes = {
  childCount: {
    type: 'number',
  },
  sizeType: {
    control: { type: 'select' },
    options: ['none', 'rand', 'static'],
  },
  posType: {
    control: { type: 'select' },
    options: ['none', 'rand', 'static'],
  },
};

export const ARG_TYPES = {
  all: {
    ...LAYOUT_ARG_TYPES,
    ...DIRECTION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...GRID_TEMPLATE_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  nosize: {
    ...LAYOUT_ARG_TYPES,
    ...DIRECTION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...GRID_TEMPLATE_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  balance: {
    ...DIRECTION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  matrix: {
    ...DIRECTION_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...GRID_TEMPLATE_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  pack: {
    ...DIRECTION_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  pin: {
    ...CHILD_SIZE_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  stack: {
    ...DIRECTION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
  tile: {
    ...DIRECTION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...DEBUG_ARG_TYPES,
  },
} as const;

export const LAYOUT_PROPS: LayoutUtilOptionsBase = {
  scroll: true,
};

export const DIRECTION_PROPS: DirectionProps = {
  direction: 'x',
};

export const ALIGN_PROPS: AlignProps = {
  alignX: 'left',
  alignY: 'top',
};

export const CHILD_SIZE_PROPS: ChildSizeProps = {
  childSizeX: '160',
  childSizeY: '80',
};

export const ADJUST_PROPS: AdjustProps = {
  adjustX: 'none',
  adjustY: 'none',
};

export const SPACING_PROPS: SpacingProps = {
  spacing: '8',
  spacingX: undefined,
  spacingY: undefined,
};

export const CHILD_COUNT_PROPS: any = {
  childCountX: '4',
  childCountY: '3',
};

export const GRID_TEMPLATE_PROPS = {
  templateX: undefined,
  templateY: undefined,
};

export const CONTAINER_PROPS: StyleProps = {
  xPadding: '0',
};

export const CONTAINER_PARAMS: any = {
  defaultSize: {
    width: 400,
    height: 400,
  },
};

export const DEBUG_PARAMS: any = {
  childCount: 12,
  sizeType: 'none',
  posType: 'none',
};

export const ARGS: Record<string, Record<string, any>> = {
  all: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...CHILD_SIZE_PROPS,
    ...GRID_TEMPLATE_PROPS,
    ...SPACING_PROPS,
    ...CHILD_COUNT_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
  nosize: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...GRID_TEMPLATE_PROPS,
    ...SPACING_PROPS,
    ...CHILD_COUNT_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
  balance: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...CHILD_SIZE_PROPS,
    ...SPACING_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
  matrix: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CHILD_COUNT_PROPS,
    ...GRID_TEMPLATE_PROPS,
    ...SPACING_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
  pin: {
    ...LAYOUT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
    posType: 'rand',
  },
  pack: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...SPACING_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
  stack: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
  tile: {
    ...LAYOUT_PROPS,
    ...DIRECTION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...CHILD_SIZE_PROPS,
    ...SPACING_PROPS,
    ...CONTAINER_PROPS,
    ...DEBUG_PARAMS,
  },
};

export const ENABLED_ARGS: Record<string, Record<string, any>> = {};
for (const layout in ARGS) {
  ENABLED_ARGS[layout] = {};
  for (const arg in ARGS[layout]) {
    ENABLED_ARGS[layout][arg] = true;
  }
}
