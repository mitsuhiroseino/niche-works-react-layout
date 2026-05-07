import clsx from 'clsx';
import {
  clsLayoutAdjust,
  clsLayoutAlign,
  clsLayoutDirection,
} from '../_constants';
import _applyChildSize from '../_helpers/_applyChildSize';
import _applySpacing from '../_helpers/_applySpacing';
import { clsLayoutBalance } from '../constants';
import type { LayoutDefinition, StyleResult } from '../types';
import './styles.scss';
import type { BalanceLayoutOwnProps } from './types';

/**
 * balanceレイアウト
 *
 * - 子要素を均等に配置する
 */
const layout: LayoutDefinition<BalanceLayoutOwnProps> = {
  name: 'balance',
  defaultProps: {
    direction: 'x',
    alignX: 'left',
    alignY: 'top',
  },
  createStyle: (props) => {
    const {
      direction,
      alignX,
      alignY,
      adjustX,
      adjustY,
      spacing,
      spacingX,
      spacingY,
      childSizeX,
      childSizeY,
    } = props;
    const result: StyleResult = {
      className: clsx(
        clsLayoutBalance,
        clsLayoutDirection[direction],
        clsLayoutAlign.x[alignX],
        clsLayoutAlign.y[alignY],
        clsLayoutAdjust.x[adjustX],
        clsLayoutAdjust.y[adjustY],
      ),
      style: {},
    };

    // 間隔の適用
    _applySpacing(result, spacing, spacingX, spacingY);

    // 子要素のサイズ
    _applyChildSize(result, childSizeX, childSizeY);

    return result;
  },
};
export default layout;
