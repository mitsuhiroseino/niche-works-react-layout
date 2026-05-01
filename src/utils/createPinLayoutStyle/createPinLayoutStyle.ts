import pin from '../../layouts/pin';
import createLayoutStyleBase from '../createLayoutStyleBase';
import type { CreatePinLayoutStyleProps } from './types';

export default function createPinLayoutStyle(props: CreatePinLayoutStyleProps) {
  return createLayoutStyleBase(pin, props);
}
