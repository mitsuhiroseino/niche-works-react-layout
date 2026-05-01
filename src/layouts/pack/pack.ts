import type { LayoutDefinition } from '../types';
import type { PackLayoutOwnProps } from './types';

/**
 * packレイアウト
 *
 * - 子要素で親要素を満たす
 */
const layout: LayoutDefinition<PackLayoutOwnProps> = {
  name: 'pack',
  defaultProps: {
    orientation: 'horizontal',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      spacingAll,
      spacingHorizontal = spacingAll,
      spacingVertical = spacingAll,
    } = props;
    return {
      display: 'grid',
      rowGap: spacingVertical,
      columnGap: spacingHorizontal,
      ...(orientation === 'horizontal'
        ? {
            gridAutoFlow: 'column',
            gridTemplateRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
          }
        : {
            gridAutoFlow: 'row',
            gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))',
            gridTemplateColumns: 'auto',
          }),
    };
  },
  getChildStyle: () => {
    return {
      height: 'auto',
      width: 'auto',
      minHeight: 0,
      minWidth: 0,
    };
  },
};
export default layout;
