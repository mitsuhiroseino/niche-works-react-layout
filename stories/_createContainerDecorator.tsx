/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import type { Decorator } from '@storybook/react-vite';
import chroma from 'chroma-js';
import { useMemo } from 'react';
import Box from './Box';

function _random(scale: number) {
  const value = Math.random();
  return Math.floor(value * scale);
}

function _fromNumericStrings(obj: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const key in obj) {
    const value = obj[key];
    result[key] = _fromNumericString(value);
  }
  return result;
}

function _fromNumericString(value: any) {
  if (_isNumericString(value)) {
    return Number(value);
  }
  return value || undefined;
}

function _isNumericString(value: any) {
  return value != null && value !== '' && !isNaN(Number(value));
}

export default function _createContainerDecorator(
  options: {
    defaultProps?: Record<string, any>;
    defaultChildProps?: Record<string, any>;
  } = {},
): Decorator {
  const { defaultProps = {}, defaultChildProps = {} } = options;

  return (Story, configs: any) => {
    const { args, parameters } = configs;
    const { sizeType, randPos, defaultLayout, defaultSize } = parameters;
    const { layout = defaultLayout, childCount = 12, ...rest } = args;
    const colors = chroma.scale(['d9ed92', '184e77']).colors(childCount);
    console.log({ parameters, colors });
    const {
      childSizeX,
      childSizeY,
      spacing,
      spacingX,
      spacingY,
      childCountX,
      childCountY,
      xHeight,
      xWidth,
      xPadding,
      ...restProps
    } = {
      ...defaultProps,
      ...rest,
    };
    const sizeProps = useMemo(() => {
      if (sizeType === 'rand') {
        return Array.from({ length: childCount }).map(() => ({
          xHeight: _random(100),
          xWidth: _random(200),
        }));
      } else if (sizeType === 'none') {
        return Array.from({ length: childCount }).map(() => ({}));
      } else {
        return Array.from({ length: childCount }).map(() => ({
          xHeight: 80,
          xWidth: 160,
        }));
      }
    }, [sizeType, childCount]);
    const positionProps = useMemo(() => {
      if (randPos) {
        return Array.from({ length: childCount }).map(() => ({
          top: _random(defaultSize.height ?? 40),
          left: _random(defaultSize.width ?? 40),
        }));
      } else {
        return Array.from({ length: childCount }).map((item, index) => ({
          top: 40 * index,
          left: 40 * index,
        }));
      }
    }, [randPos, childCount, defaultSize]);

    return (
      <Story
        args={{
          layout,
          defaultSize,
          ...restProps,
          ..._fromNumericStrings({
            childSizeX,
            childSizeY,
            spacing,
            spacingX,
            spacingY,
            childCountX,
            childCountY,
            xHeight,
            xWidth,
            xPadding,
          }),
          children: colors.map((color, index) => {
            const childProps = {
              ...sizeProps[index],
              style: {
                ...positionProps[index],
                backgroundColor: color,
                color: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            };

            return (
              <Box key={index} {...(childProps as any)} {...defaultChildProps}>
                {index + 1}
              </Box>
            );
          }),
        }}
      />
    );
  };
}
