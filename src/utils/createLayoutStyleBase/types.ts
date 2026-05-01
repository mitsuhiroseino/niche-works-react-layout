import type { CSSProperties } from 'react';
import type { LayoutUtilOptionsBase } from '../../types';

export type CreateLayoutStyleBaseOptions = Record<string, unknown> &
  LayoutUtilOptionsBase;

export type CreateLayoutStyleBaseResult = {
  /**
   * コンテナーのスタイル
   */
  style: CSSProperties & {
    '& > *'?: CSSProperties;
  };

  /**
   * 子要素のスタイル
   */
  childStyle: CSSProperties | null;
};
