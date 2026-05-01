import balance from '../../layouts/balance';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { CreateBalanceLayoutStyleProps } from './types';

export default function createBalanceLayoutStyle(
  props: CreateBalanceLayoutStyleProps,
) {
  return createLayoutStyleBase(balance, props);
}
