import _getGridChildAxisStyle from '../_getGridChildAxisStyle';
import _getGridContainerForContentStyle from '../_getGridContainerForContentStyle';
import type { LayoutDefinition } from '../types';
import type { TileLayoutOwnProps } from './types';

/**
 * tileレイアウト
 *
 * - 子要素を格子状に並べる
 * - 子要素が親要素の横幅に収まる様に要素数を調整し表示する
 */
const layout: LayoutDefinition<TileLayoutOwnProps> = {
  name: 'tile',
  defaultProps: {
    orientation: 'horizontal',
    alignHorizontal: 'left',
    alignVertical: 'top',
  },
  getContainerStyle: (props) => {
    const { orientation, ...rest } = props;

    return _getGridContainerForContentStyle(orientation, rest);
  },
  getChildStyle: (props) => {
    const {
      alignHorizontal,
      sizeHorizontal,
      adjustHorizontal,
      alignVertical,
      sizeVertical,
      adjustVertical,
    } = props;

    return {
      ..._getGridChildAxisStyle(
        'content',
        'width',
        alignHorizontal,
        sizeHorizontal,
        adjustHorizontal,
      ),
      ..._getGridChildAxisStyle(
        'content',
        'height',
        alignVertical,
        sizeVertical,
        adjustVertical,
      ),
    };
  },
};
export default layout;
