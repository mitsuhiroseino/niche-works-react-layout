import unit from '@niche-works/react/utils/unit';
import clsx from 'clsx';
import type { AlignX, AlignY, Direction, LayoutAdjust } from '../../constaints';
import {
  clsLayoutAdjust,
  clsLayoutAlign,
  clsLayoutChildSize,
  clsLayoutDirection,
  cssLayoutCrossAxisSizeProp,
  varLayoutChildSize,
} from '../_constants';
import _applySpacing from '../_helpers/_applySpacing';
import _hasValue from '../_helpers/_hasValue';
import { clsLayoutStack } from '../constants';
import type { ChildSize, LayoutDefinition, StyleResult } from '../types';
import './styles.scss';
import type { StackLayoutOwnProps } from './types';

/**
 * stackレイアウト
 *
 * - 子要素を並べて配置する
 */
const layout: LayoutDefinition<StackLayoutOwnProps> = {
  name: 'stack',
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
      spacing,
      spacingX = spacing,
      spacingY = spacing,
      childSizeX,
      adjustX,
      childSizeY,
      adjustY,
    } = props;

    const result: StyleResult = {
      // 基本的なクラス
      className: clsx(
        clsLayoutStack,
        clsLayoutDirection[direction],
        clsLayoutAlign.x[alignX],
        clsLayoutAlign.y[alignY],
      ),
      style: {},
    };

    // 間隔の適用
    _applySpacing(result, spacing, spacingX, spacingY);

    const resultList: StyleResult[] = [result];

    if (direction === 'x') {
      // 横並びの場合
      // 主軸(横方向)の設定
      resultList.push(_getStackMainAxisStyle('x', alignX, childSizeX, adjustX));
      // 交差軸(縦方向)の設定
      resultList.push(
        _getStackClossAxisStyle('y', alignY, childSizeY, adjustY),
      );
    } else {
      // 縦並びの場合
      // 主軸(縦方向)の設定
      resultList.push(
        _getStackClossAxisStyle('x', alignX, childSizeX, adjustX),
      );
      // 交差軸(横方向)の設定
      resultList.push(_getStackMainAxisStyle('y', alignY, childSizeY, adjustY));
    }

    // 全てのクラス&スタイルを統合
    return resultList.reduce<StyleResult>((styleResult, result) => {
      if (result.className) {
        styleResult.className = clsx(styleResult.className, result.className);
      }
      if (result.style) {
        styleResult.style = { ...styleResult.style, ...result.style };
      }
      return styleResult;
    }, {} satisfies StyleResult);
  },
};
export default layout;

/**
 * 主軸方向のスタイル
 * @param axis 横 or 縦
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズの調整
 * @returns スタイル
 */
function _getStackMainAxisStyle(
  axis: Direction,
  align: AlignY | AlignX,
  size: ChildSize,
  adjust: LayoutAdjust,
): StyleResult {
  let className: string;
  if (align === 'fit') {
    className = clsLayoutAlign[axis][align];
  } else if (adjust === 'expand') {
    // 伸ばす
    className = clsx(
      clsLayoutAlign[axis][align],
      clsLayoutAdjust[axis][adjust],
    );
  } else if (adjust === 'shrink') {
    // 縮める
    className = clsx(
      clsLayoutAlign[axis][align],
      clsLayoutAdjust[axis][adjust],
    );
  } else {
    // 指定なし
    className = clsx(
      clsLayoutAlign[axis][align],
      clsLayoutAdjust[axis][adjust],
    );
  }

  const result: StyleResult = { className };
  if (_hasValue(size)) {
    // 高さ or 幅の指定あり
    result.className = clsx(result.className, clsLayoutChildSize[axis]);
    result.style = { [varLayoutChildSize[axis]]: unit(size) };
  }

  return result;
}

/**
 * 交差軸方向のクラス
 * @param axis 横 or 縦
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズの調整
 * @returns スタイル
 */
function _getStackClossAxisStyle(
  axis: Direction,
  align: AlignY | AlignX,
  size: ChildSize,
  adjust: LayoutAdjust,
): StyleResult {
  if (align === 'fit') {
    return {
      className: clsLayoutAlign[axis][align],
    };
  } else if (adjust === 'expand') {
    // 伸ばす
    const result: StyleResult = {
      className: clsx(
        clsLayoutAlign[axis][align],
        clsLayoutAdjust[axis][adjust],
      ),
      style: {
        [`min-${cssLayoutCrossAxisSizeProp[axis]}`]: '100%',
      },
    };
    if (_hasValue(size)) {
      // 高さ or 幅の指定あり
      result.className = clsx(result.className, clsLayoutChildSize[axis]);
      result.style[varLayoutChildSize[axis]] = unit(size);
    }
    return result;
  } else if (adjust === 'shrink') {
    // 縮める
    const result: StyleResult = {
      className: clsx(
        clsLayoutAlign[axis][align],
        clsLayoutAdjust[axis][adjust],
      ),
    };
    if (_hasValue(size)) {
      // 高さ or 幅の指定あり
      result.className = clsx(result.className, clsLayoutChildSize[axis]);
      result.style = { [varLayoutChildSize[axis]]: `min(${unit(size)}, 100%)` };
    }
    return result;
  } else if (_hasValue(size)) {
    // 指定のサイズ
    return {
      className: clsx(clsLayoutAlign[axis][align], clsLayoutChildSize[axis]),
      style: {
        [varLayoutChildSize[axis]]: unit(size),
      },
    };
  } else {
    // 指定なし
    return {
      className: clsx(clsLayoutAlign[axis][align]),
    };
  }
}
