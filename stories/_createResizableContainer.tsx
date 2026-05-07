/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import type { ResizableProps } from 're-resizable';
import { Resizable } from 're-resizable';
import { ComponentType } from 'react';
import type { LayoutContainerProps } from './LayoutContainer';

const RESIZABLE_PROPS = [
  'as',
  'ref',
  'style',
  'className',
  'grid',
  'gridGap',
  'snap',
  'bounds',
  'boundsByDirection',
  'size',
  'defaultSize',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'lockAspectRatio',
  'lockAspectRatioExtraWidth',
  'lockAspectRatioExtraHeight',
  'enable',
  'handleStyles',
  'handleClasses',
  'handleWrapperStyle',
  'handleWrapperClass',
  'onResizeStart',
  'onResize',
  'onResizeStop',
  'handleComponent',
  'scale',
  'resizeRatio',
  'snapGap',
];

export default function _createResizableContainer(
  Component: ComponentType<any>,
) {
  return (
    props: LayoutContainerProps & ResizableProps & { childCount: number },
  ) => {
    const { children, ...rest } = props;
    const resizableProps: ResizableProps = {};
    const containerProps: LayoutContainerProps = {};
    for (const prop in rest) {
      const value = (rest as any)[prop];
      if (RESIZABLE_PROPS.includes(prop)) {
        (resizableProps as any)[prop] = value;
      } else {
        (containerProps as any)[prop] = value;
      }
    }

    return (
      <Resizable {...resizableProps}>
        <Component
          {...containerProps}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
          }}
        >
          {children}
        </Component>
      </Resizable>
    );
  };
}
