import proxyStyle from '@niche-works/react-style-proxy';
import ensureComponent from '@niche-works/react/utils/ensureComponent';
import transformContent from '@niche-works/react/utils/transformContent';
import type { ElementType } from 'react';
import { cloneElement, forwardRef, isValidElement } from 'react';
import { LAYOUT_PROPS_KEYS } from '../../layouts/_constants';
import createLayoutStyleBase from '../../utils/createLayoutStyleBase';
import type { WithLayoutBaseOptions, WithLayoutBaseProps } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withLayoutBase<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WithLayoutBaseOptions = {},
) {
  const EnsuredComponent = ensureComponent(Component);
  const name = EnsuredComponent.displayName ?? 'unknown';
  const {
    displayName = `withLayout(${name})`,
    flatCss,
    ...proxyStyleOpts
  } = options;
  /**
   * レイアウト機能を追加したコンテナー
   */
  const LayoutComponent = forwardRef<T, P & WithLayoutBaseProps>(
    (props, ref) => {
      const { layout, children, ...rest } = props;
      const { style, childStyle } = createLayoutStyleBase(layout, {
        flatCss,
        ...rest,
      });
      // restからlayout用のプロパティを削除
      for (const key in LAYOUT_PROPS_KEYS) {
        delete rest[key];
      }
      // コンテナーのスタイル
      const containerProps = proxyStyle(rest, style, proxyStyleOpts);
      // 子要素のスタイル
      const styledChildren =
        childStyle == null
          ? children
          : transformContent(children, (child) => {
              if (isValidElement(child)) {
                return cloneElement(
                  child,
                  proxyStyle(child.props, childStyle, proxyStyleOpts),
                );
              } else {
                return child;
              }
            });

      return (
        <EnsuredComponent ref={ref} {...(containerProps as P)}>
          {styledChildren}
        </EnsuredComponent>
      );
    },
  );
  LayoutComponent.displayName = displayName;
  return LayoutComponent;
}
