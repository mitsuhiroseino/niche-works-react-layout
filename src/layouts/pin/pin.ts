import type { LayoutDefinition } from '../types';
import type { PinLayoutOwnProps } from './types';

/**
 * pinレイアウト
 *
 * - 子要素のtop,left,bottom,rightに従い配置する
 */
const layout: LayoutDefinition<PinLayoutOwnProps> = {
  name: 'pin',
  getContainerStyle: () => {
    return {
      display: 'block',
      position: 'relative',
    };
  },
  getChildStyle: (props) => {
    const { sizeHorizontal, sizeVertical } = props;
    return {
      position: 'absolute',
      width: sizeHorizontal,
      height: sizeVertical,
    };
  },
};
export default layout;
