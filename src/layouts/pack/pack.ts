import clsx from 'clsx';
import { clsLayoutDirection } from '../_constants';
import _applySpacing from '../_helpers/_applySpacing';
import { clsLayoutPack } from '../constants';
import type { LayoutDefinition, StyleResult } from '../types';
import './styles.scss';
import type { PackLayoutOwnProps } from './types';

/**
 * packレイアウト
 *
 * - 子要素で親要素を満たす
 */
const layout: LayoutDefinition<PackLayoutOwnProps> = {
  name: 'pack',
  defaultProps: {
    direction: 'x',
  },
  createStyle: (props) => {
    const { direction, spacing, spacingX, spacingY } = props;
    const result: StyleResult = {
      className: clsx(clsLayoutPack, clsLayoutDirection[direction]),
      style: {},
    };

    // 間隔の適用
    _applySpacing(result, spacing, spacingX, spacingY);

    return result;
  },
};
export default layout;
