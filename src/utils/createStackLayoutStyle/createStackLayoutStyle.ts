import stack from '../../layouts/stack';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { CreateStackLayoutStyleProps } from './types';

export default function createStackLayoutStyle(
  props: CreateStackLayoutStyleProps,
) {
  return createLayoutStyleBase(stack, props);
}
