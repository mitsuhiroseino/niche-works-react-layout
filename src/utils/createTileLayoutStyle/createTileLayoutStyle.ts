import tile from '../../layouts/tile';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { CreateTileLayoutStyleProps } from './types';

export default function createTileLayoutStyle(
  props: CreateTileLayoutStyleProps,
) {
  return createLayoutStyleBase(tile, props);
}
