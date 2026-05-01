import pack from '../../layouts/pack';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { CreatePackLayoutStyleProps } from './types';

export default function createPackLayoutStyle(
  props: CreatePackLayoutStyleProps,
) {
  return createLayoutStyleBase(pack, props);
}
