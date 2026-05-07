import _applyChildSize from '../_helpers/_applyChildSize';
import { clsLayoutPin } from '../constants';
import type { LayoutDefinition, StyleResult } from '../types';
import './styles.scss';
import type { PinLayoutOwnProps } from './types';

/**
 * pinレイアウト
 *
 * - 子要素のtop,left,bottom,rightに従い配置する
 */
const layout: LayoutDefinition<PinLayoutOwnProps> = {
  name: 'pin',
  createStyle: (props) => {
    const { childSizeX, childSizeY } = props;
    const result: StyleResult = {
      className: clsLayoutPin,
      style: {},
    };

    // 子要素のサイズ
    _applyChildSize(result, childSizeX, childSizeY);

    return result;
  },
};
export default layout;
