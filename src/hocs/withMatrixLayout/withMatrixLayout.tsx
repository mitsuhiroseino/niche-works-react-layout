import type { LooseRecord } from '@niche-works/types';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import matrix from '../../layouts/matrix';
import withLayoutBase from '../withLayoutBase';
import type { WithMatrixLayoutOptions, WithMatrixLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withMatrixLayout<P = LooseRecord, T = unknown>(
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
          layout={matrix}
        />
      );
    },
  );
  return LayoutComponent;
}
