import type { LooseDictionary } from '@niche-works/types';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import balance from '../../layouts/balance';
import withLayoutBase from '../withLayoutBase';
import type { WithBalanceLayoutOptions, WithBalanceLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withBalanceLayout<P = LooseDictionary, T = unknown>(
  Component: ElementType<P>,
  options: WithBalanceLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithBalanceLayoutProps>(
    (props, ref) => {
      console.log(props, balance);
      return (
        <LayoutComponentBase
          ref={ref}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
          layout={balance}
        />
      );
    },
  );
  return LayoutComponent;
}
