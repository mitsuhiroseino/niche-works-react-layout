import type { LooseRecord } from '@niche-works/types';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import stack from '../../layouts/stack';
import withLayoutBase from '../withLayoutBase';
import type { WithStackLayoutOptions, WithStackLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withStackLayout<P = LooseRecord, T = unknown>(
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
          layout={stack}
        />
      );
    },
  );
  return LayoutComponent;
}
