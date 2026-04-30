import proxyStyle from '@niche-works/react-style-proxy';
import ensureComponent from '@niche-works/react/utils/ensureComponent';
import transformContent from '@niche-works/react/utils/transformContent';
import type { ElementType, FunctionComponent, RefAttributes } from 'react';
import { cloneElement, forwardRef } from 'react';
import createLayoutStyle from './createLayoutStyle';
import { LAYOUT_PROPS_KEYS } from './layouts/_constants';
import type { LayoutProps, WidthLayoutOptions } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WidthLayoutOptions = {},
) {
  const Comp = ensureComponent(Component);
  const name = Comp.displayName ?? 'unknown';
  const { displayName = `withLayout(${name})`, ...opts } = options;
  /**
   * レイアウト機能を追加したコンテナー
   */
  const Layout: FunctionComponent<P & LayoutProps & RefAttributes<T>> =
    forwardRef<T, P & LayoutProps>((props, ref) => {
      const { containerStyle, childStyle } = createLayoutStyle(props);
      const { children, ...rest } = props;
      // restからlayout用のプロパティを削除
      for (const key in LAYOUT_PROPS_KEYS) {
        delete rest[key];
      }
      // コンテナーのスタイル
      const containerProps = proxyStyle(rest, containerStyle, opts);
      // 子要素のスタイル
      const styledChildren =
        childStyle == null
          ? children
          : transformContent(children, (child) => {
              if (typeof child === 'string' || typeof child === 'number') {
                return child;
              } else {
                return cloneElement(
                  child,
                  proxyStyle(child.props, childStyle, opts),
                );
              }
            });

      return (
        <Comp ref={ref} {...(containerProps as P)}>
          {styledChildren}
        </Comp>
      );
    });
  Layout.displayName = displayName;
  return Layout;
}
