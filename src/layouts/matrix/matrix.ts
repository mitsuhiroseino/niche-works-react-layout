import unit from '@niche-works/react/utils/unit';
import clsx from 'clsx';
import { clsLayoutDirection } from '../_constants';
import _applyChildSize from '../_helpers/_applyChildSize';
import _applySpacing from '../_helpers/_applySpacing';
import {
  clsLayoutMatrix,
  varLayoutTemplateX,
  varLayoutTemplateY,
} from '../constants';
import type { LayoutDefinition, StyleResult } from '../types';
import './styles.scss';
import type { MatrixLayoutOwnProps } from './types';

/**
 * matrixレイアウト
 *
 * - 下記のいくつかを指定して子要素を格子状に配置する
 *   - 縦の子要素数
 *   - 横の子要素数
 *   - 子要素のサイズ
 */
const layout: LayoutDefinition<MatrixLayoutOwnProps> = {
  name: 'matrix',
  defaultProps: {
    direction: 'x',
  },
  createStyle: (props) => {
    const {
      direction,
      childCountX,
      childCountY,
      templateX,
      templateY,
      spacing,
      spacingX = spacing,
      spacingY = spacing,
      childSizeX,
      childSizeY,
    } = props;
    const result: StyleResult = {
      className: clsx(clsLayoutMatrix, clsLayoutDirection[direction]),
      style: {
        [varLayoutTemplateX]: _getGridTemplate(
          templateX,
          childSizeX,
          childCountX,
        ),
        [varLayoutTemplateY]: _getGridTemplate(
          templateY,
          childSizeY,
          childCountY,
        ),
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
 * gridTemplateColumns / gridTemplateRowsを生成する
 * @param gridSetting 任意のグリッドテンプレート設定
 * @param size 子要素のサイズ
 * @param count 子要素数
 * @returns
 */
function _getGridTemplate(
  gridSetting: string | number | (string | number)[],
  size: string | number,
  count: number,
) {
  let template;
  if (Array.isArray(gridSetting)) {
    // 配列の場合、各要素に単位を付与して結合
    template = gridSetting.map((value) => unit(value)).join(' ');
  } else if (gridSetting) {
    // 文字列またはオブジェクトの場合、そのまま使用
    template = gridSetting;
  } else if (size != null) {
    // サイズが指定されている場合
    if (count != null) {
      // 子要素数とサイズが指定されている場合、指定されたサイズの子要素を指定された数だけ配置
      template = `repeat(${count}, ${unit(size)})`;
    } else {
      // サイズのみが指定されている場合、子要素数は自動で決定
      template = `repeat(auto-fit, ${unit(size)})`;
    }
  } else if (count != null) {
    // 子要素数のみが指定されている場合、親要素を満たすサイズで配置
    template = `repeat(${count}, 1fr)`;
  }
  return template;
}
