import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { LayoutType } from '../../constaints';
import withLayoutBase from '../withLayoutBase';
import type { WithPinLayoutOptions, WithPinLayoutProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withPinLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WithPinLayoutOptions = {},
) {
  const LayoutComponentBase = withLayoutBase(Component, options);

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithPinLayoutProps>(
    (props, ref) => {
      return (
        <LayoutComponentBase
          ref={ref}
          layout={LayoutType.pin}
          {...(props as any)}
        />
      );
    },
  );
  return LayoutComponent;
}
