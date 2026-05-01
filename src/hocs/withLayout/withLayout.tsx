import type { ElementType } from 'react';
import { forwardRef } from 'react';
import * as LAYOUTS from '../../layouts';
import withLayoutBase from '../withLayoutBase';
import type { WithLayoutOptions, WithLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WithLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithLayoutProps>((props, ref) => {
    const { layout, ...rest } = props;

    return (
      <LayoutComponentBase
        ref={ref}
        layout={LAYOUTS[layout ?? 'stack']}
        {...(rest as any)}
      />
    );
  });
  return LayoutComponent;
}
