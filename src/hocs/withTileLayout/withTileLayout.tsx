import type { LooseRecord } from '@niche-works/types';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import tile from '../../layouts/tile';
import withLayoutBase from '../withLayoutBase';
import type { WithTileLayoutOptions, WithTileLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withTileLayout<P = LooseRecord, T = unknown>(
  Component: ElementType<P>,
  options: WithTileLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithTileLayoutProps>(
    (props, ref) => {
      return (
        <LayoutComponentBase
          ref={ref}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
          layout={tile}
        />
      );
    },
  );
  return LayoutComponent;
}
