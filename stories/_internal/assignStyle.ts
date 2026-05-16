import type { LooseDictionary } from '@niche-works/types';

export default function assignStyle(
  element: HTMLElement,
  style: LooseDictionary,
): void {
  for (const name in style) {
    if (name.startsWith('--')) {
      element.style.setProperty(name, style[name]);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      element.style[name as any] = style[name];
    }
  }
}
