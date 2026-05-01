import type { LayoutType } from '../../constaints';
import type { LayoutPropsBase } from '../../types';
import type { WithLayoutBaseOptions } from '../withLayoutBase';

export type WithLayoutProps = LayoutPropsBase & {
  /**
   * レイアウト
   */
  layout?: LayoutType;
};

export type WithLayoutOptions = WithLayoutBaseOptions;
