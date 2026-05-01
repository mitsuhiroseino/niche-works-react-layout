import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { LayoutType } from '../../constaints';
import withLayoutBase from '../withLayoutBase';
import type { WithStackLayoutOptions, WithStackLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withStackLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WithStackLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithStackLayoutProps>(
    (props, ref) => {
      return (
        <LayoutComponentBase
          ref={ref}
          layout={LayoutType.stack}
          {...(props as any)}
        />
      );
    },
  );
  return LayoutComponent;
}
