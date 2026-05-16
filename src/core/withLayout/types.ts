import type {
  WithLayoutBaseOptions,
  WithLayoutBaseProps,
} from '../_internal/withLayoutBase';
import type { LayoutType } from '../constants';

export type WithLayoutProps = Omit<WithLayoutBaseProps, 'layout'> & {
  /**
   * レイアウト
   */
  layout?: LayoutType;
};

export type WithLayoutOptions = WithLayoutBaseOptions;
