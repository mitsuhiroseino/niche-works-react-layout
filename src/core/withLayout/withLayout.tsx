import type { LooseDictionary } from '@niche-works/types';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { LAYOUTS } from '../_constants';
import withLayoutBase from '../_internal/withLayoutBase';
import type { WithLayoutOptions, WithLayoutProps } from './types';
/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withLayout<P = LooseDictionary, T = unknown>(
  Component: ElementType<P>,
  options: WithLayoutOptions = {},
) {
  const LayoutComponents = Object.keys(LAYOUTS).reduce((result, key) => {
    result[key] = withLayoutBase(Component, LAYOUTS[key], options);
    return result;
  }, {});

  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithLayoutProps>((props, ref) => {
    const { layout, ...rest } = props;
    const LayoutComponent = LayoutComponents[layout ?? 'stack'];

    return (
      <LayoutComponent
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(rest as any)}
      />
    );
  });
  return LayoutComponent;
}
