import unit from '@niche-works/react/utils/unit';
import clsx from 'clsx';
import type { AlignX, AlignY, Direction, LayoutAdjust } from '../../constaints';
import {
  clsLayoutAdjust,
  clsLayoutAlign,
  clsLayoutDirection,
} from '../_constants';
import _applyChildSize from '../_helpers/_applyChildSize';
import _applySpacing from '../_helpers/_applySpacing';
import _hasValue from '../_helpers/_hasValue';
import {
  clsLayoutTile,
  varLayoutAutoTracsX,
  varLayoutAutoTracsY,
  varLayoutTemplateX,
  varLayoutTemplateY,
} from '../constants';
import type {
  ChildSize,
  CSSPropertiesWithVars,
  LayoutDefinition,
  StyleResult,
} from '../types';
import './styles.scss';
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
        clsLayoutTile,
        clsLayoutDirection[direction],
        clsLayoutAlign.x[alignX],
        clsLayoutAlign.y[alignY],
        clsLayoutAdjust.x[adjustX],
        clsLayoutAdjust.y[adjustY],
      ),
      style: {
        ..._getStyleByDirection[direction](props),
      },
    };

    // 間隔の適用
    _applySpacing(result, spacing, spacingX, spacingY);

    // 子要素のサイズ
    _applyChildSize(result, childSizeX, childSizeY);

    return result;
  },
};
export default layout;

/**
 * 向きに関するスタイル
 */
const _getStyleByDirection: {
  [direction in Direction]: (
    props: TileLayoutOwnProps,
  ) => CSSPropertiesWithVars;
} = {
  x: ({ childSizeX, alignX, childCountX, childSizeY, adjustY }) => {
    return {
      [varLayoutTemplateX]: _getGridMainAxisTemplate(
        alignX,
        childSizeX,
        childCountX,
      ),
      [varLayoutAutoTracsY]: _getGridClossAxisAuto(adjustY, childSizeY),
    };
  },
  y: ({ childSizeY, alignY, childCountY, childSizeX, adjustX }) => {
    return {
      [varLayoutAutoTracsX]: _getGridClossAxisAuto(adjustX, childSizeX),
      [varLayoutTemplateY]: _getGridMainAxisTemplate(
        alignY,
        childSizeY,
        childCountY,
      ),
    };
  },
};

/**
 * direction方向の子要素のサイズを指定するためのテンプレート
 * @param align 子要素の配置
 * @param childSize 子要素のサイズ
 * @param count 子要素の数
 * @returns
 */
function _getGridMainAxisTemplate(
  align: AlignX | AlignY,
  childSize: ChildSize,
  count: number,
) {
  const hasChildSize = _hasValue(childSize);
  const hasCount = _hasValue(count);
  if (align === 'fit') {
    // fitの場合
    if (hasChildSize && hasCount) {
      return `repeat(${count}, minmax(${unit(childSize)}, 1fr))`;
    } else if (hasChildSize) {
      return `repeat(auto-fill, minmax(${unit(childSize)}, 1fr))`;
    } else if (hasCount) {
      return `repeat(${count}, 1fr)`;
    } else {
      return 'repeat(auto-fill, minmax(0, 1fr))';
    }
  } else {
    // fit以外の場合
    if (hasChildSize && hasCount) {
      return `repeat(${count}, ${unit(childSize)})`;
    } else if (hasChildSize) {
      return `repeat(auto-fill, ${unit(childSize)})`;
    } else if (hasCount) {
      return `repeat(${count}, max-content)`;
    } else {
      return 'repeat(auto-fill, minmax(max-content, 100%))';
    }
  }
}

/**
 * 交差軸方向
 * @param adjust
 * @param childSize
 * @returns
 */
function _getGridClossAxisAuto(adjust: LayoutAdjust, childSize: ChildSize) {
  const hasChildSize = _hasValue(childSize);
  if (adjust === 'expand') {
    if (hasChildSize) {
      return `minmax(${unit(childSize)}, 100%)`;
    } else {
      return `minmax(auto, 100%)`;
    }
  } else if (adjust === 'shrink') {
    if (hasChildSize) {
      return `minmax(0, ${unit(childSize)})`;
    } else {
      return `minmax(0, auto)`;
    }
  }
}
