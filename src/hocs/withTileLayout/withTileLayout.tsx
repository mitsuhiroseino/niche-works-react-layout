import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { LayoutType } from '../../constaints';
import withLayoutBase from '../withLayoutBase';
import type { WithTileLayoutOptions, WithTileLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withTileLayout<P = {}, T = unknown>(
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
          layout={LayoutType.tile}
          {...(props as any)}
        />
      );
    },
  );
  return LayoutComponent;
}
