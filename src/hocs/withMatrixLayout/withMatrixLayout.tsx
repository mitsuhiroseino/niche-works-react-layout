import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { LayoutType } from '../../constaints';
import withLayoutBase from '../withLayoutBase';
import type { WithMatrixLayoutOptions, WithMatrixLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withMatrixLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WithMatrixLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithMatrixLayoutProps>(
    (props, ref) => {
      return (
        <LayoutComponentBase
          ref={ref}
          layout={LayoutType.matrix}
          {...(props as any)}
        />
      );
    },
  );
  return LayoutComponent;
}
