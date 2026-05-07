import type { CSSPropertiesWithVars } from '../../layouts';
import type { LayoutUtilOptionsBase } from '../../types';

export type CreateLayoutStyleBaseOptions = Record<string, unknown> &
  LayoutUtilOptionsBase;

export type CreateLayoutStyleBaseResult = {
  className?: string;

  /**
   * コンテナーのスタイル
   */
  style: CSSPropertiesWithVars;
};
