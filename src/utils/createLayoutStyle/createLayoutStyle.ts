import type { LooseDictionary } from '@niche-works/types';
import * as LAYOUTS from '../../layouts';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { LayoutProps } from './types';

/**
 * レイアウト用のスタイルを作成する
 * @param props レイアウトプロパティ
 * @returns
 */
export default function createLayoutStyle<
  P extends LayoutProps = LooseDictionary,
>(props: P) {
  const { layout, ...rest } = props;
  return createLayoutStyleBase(LAYOUTS[layout] || LAYOUTS.stack, rest);
}
