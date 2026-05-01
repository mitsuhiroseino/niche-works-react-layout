import matrix from '../../layouts/matrix';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { CreateMatrixLayoutStyleProps } from './types';

export default function createMatrixLayoutStyle(
  props: CreateMatrixLayoutStyleProps,
) {
  return createLayoutStyleBase(matrix, props);
}
