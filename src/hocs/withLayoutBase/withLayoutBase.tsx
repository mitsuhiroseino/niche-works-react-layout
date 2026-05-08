import { styleProxy } from '@niche-works/react-style-proxy';
import ensureComponent from '@niche-works/react/utils/ensureComponent';
import clsx from 'clsx';
import type { ElementType } from 'react';
import { createElement, forwardRef } from 'react';
import { LAYOUT_PROPS_KEYS } from '../../layouts/_constants';
import type { TargetComponentProps } from '../../types';
import createLayoutStyleBase from '../../utils/createLayoutStyleBase';
import type { WithLayoutBaseOptions, WithLayoutBaseProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withLayoutBase<
  P extends TargetComponentProps = TargetComponentProps,
  T = unknown,
>(Component: ElementType<P>, options: WithLayoutBaseOptions = {}) {
  const EnsuredComponent = ensureComponent(Component);
  const name = EnsuredComponent.displayName ?? 'unknown';
  const { displayName = `withLayout(${name})`, ...proxyStyleOpts } = options;
  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithLayoutBaseProps>(
    (props, ref) => {
      console.log(props);
      const { className, layout, ...rest } = props;
      const { className: clsNm, style } = createLayoutStyleBase(layout, rest);
      // restからlayout用のプロパティを削除
      for (const key in LAYOUT_PROPS_KEYS) {
        delete rest[key];
      }
      // コンテナーのスタイル
      const containerProps = styleProxy<P>(
        rest as unknown as P,
        style,
        proxyStyleOpts,
      );

      return createElement(EnsuredComponent, {
        ref,
        className: clsx(clsNm, className),
        ...containerProps,
      });
    },
  );
  LayoutComponent.displayName = displayName;
  return LayoutComponent;
}
