import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { LayoutType } from '../../constaints';
import withLayoutBase from '../withLayoutBase';
import type { WithBalanceLayoutOptions, WithBalanceLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withBalanceLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WithBalanceLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithBalanceLayoutProps>(
    (props, ref) => {
      return (
        <LayoutComponentBase
          ref={ref}
          layout={LayoutType.balance}
          {...(props as any)}
        />
      );
    },
  );
  return LayoutComponent;
}
