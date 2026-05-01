# @niche-works/react-layout

`@niche-works/react-layout` — a niche library for adding layout capabilities to React components.
It controls how child elements are arranged and applies consistent layouts across your UI.

**[日本語版 README はこちら](./README.ja.md)**

## Installation

```sh
npm install @niche-works/react-layout
```

## Usage

```tsx
import withLayout from '@niche-works/react-layout';

const LayoutDiv = withLayout('div');

export default function App() {
  return (
    <LayoutDiv layout="stack" orientation="horizontal" scroll>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </LayoutDiv>
  );
}
```

## API

### `withLayout(Component, options?)`

#### Arguments

- `Component`: The React component to apply layout to.
- `options`: Optional configuration of type `WithLayoutOptions`.

#### `WithLayoutOptions`

| Property          | Type                                       | Description                                                                                  |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `styleProp?`      | `'style'` \| `'css'` \| `'sx'` \| `string` | The prop used to apply layout styles (default: `style`)                                      |
| `styleApplyMode?` | `'merge'` \| `'append'`                    | How to apply layout styles when `styleProp` already has a value (default: `merge`)           |
| `displayName?`    | `string`                                   | The `displayName` of the created component (default: `withLayout(${Component.displayName})`) |

#### Return Value

Returns a new component with layout capabilities added.

## `LayoutProps`

Props that can be passed to the returned component. Available props vary depending on the `layout` value.

### Common Props

| Prop          | Type                                                                      | Description                                                 |
| ------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `layout`      | `'balance'` \| `'tile'` \| `'pack'` \| `'matrix'` \| `'pin'` \| `'stack'` | The layout type. Available props change based on the value. |
| `scroll?`     | `boolean`                                                                 | Whether to enable scrolling (default: `false`)              |
| `childStyle?` | `CSSProperties`                                                           | Styles applied to each child element                        |
| `children`    | `ReactNode`                                                               | Child elements                                              |

### Per-Layout Props

#### `balance`

Arranges child elements in a single row with even spacing.\
The key differences from `stack` are that spacing is added when children are smaller than the parent, and when `alignVertical` is `middle` or `alignHorizontal` is `center`, the top or left edge of children remains visible even when children overflow the parent.

| Prop                 | Type                                      | Description                                             |
| -------------------- | ----------------------------------------- | ------------------------------------------------------- |
| `layout`             | `'balance'`                               |                                                         |
| `orientation`        | See [Orientation](#orientation)           | Direction to arrange children (default: `'horizontal'`) |
| `alignHorizontal?`   | See [Horizontal Align](#horizontal-align) | Horizontal alignment (default: `'left'`)                |
| `alignVertical?`     | See [Vertical Align](#vertical-align)     | Vertical alignment of children (default: `'top'`)       |
| `sizeHorizontal?`    | `number`                                  | Width of child elements                                 |
| `sizeVertical?`      | `number`                                  | Height of child elements                                |
| `adjustHorizontal?`  | See [Size Adjust](#size-adjust)           | Horizontal size adjustment                              |
| `adjustVertical?`    | See [Size Adjust](#size-adjust)           | Vertical size adjustment                                |
| `spacingAll?`        | `number`                                  | Spacing around child elements                           |
| `spacingHorizontal?` | `number`                                  | Horizontal spacing around child elements                |
| `spacingVertical?`   | `number`                                  | Vertical spacing around child elements                  |

#### `matrix`

Arranges child elements in a grid.\
When the number of columns or rows is specified, the number of rendered elements is limited accordingly.

| Prop                  | Type                               | Description                                                      |
| --------------------- | ---------------------------------- | ---------------------------------------------------------------- |
| `layout`              | `'matrix'`                         |                                                                  |
| `sizeHorizontal?`     | `number`                           | Width of child elements                                          |
| `sizeVertical?`       | `number`                           | Height of child elements                                         |
| `spacingAll?`         | `number`                           | Spacing around child elements                                    |
| `spacingHorizontal?`  | `number`                           | Horizontal spacing around child elements                         |
| `spacingVertical?`    | `number`                           | Vertical spacing around child elements                           |
| `countHorizontal?`    | `number`                           | Number of children in the horizontal direction                   |
| `countVertical?`      | `number`                           | Number of children in the vertical direction                     |
| `templateHorizontal?` | `string` \| `(string \| number)[]` | CSS `grid-template-columns` format, or an array of column widths |
| `templateVertical?`   | `string` \| `(string \| number)[]` | CSS `grid-template-rows` format, or an array of row heights      |

#### `pack`

Fits child elements to match both the height and width of the parent.

| Prop                 | Type                            | Description                                             |
| -------------------- | ------------------------------- | ------------------------------------------------------- |
| `layout`             | `'pack'`                        |                                                         |
| `orientation`        | See [Orientation](#orientation) | Direction to arrange children (default: `'horizontal'`) |
| `spacingAll?`        | `number`                        | Spacing between elements                                |
| `spacingHorizontal?` | `number`                        | Horizontal spacing                                      |
| `spacingVertical?`   | `number`                        | Vertical spacing                                        |

#### `pin`

Positions child elements at absolute coordinates according to the styles (`top`, `bottom`, `left`, `right`) set on each child.

| Prop              | Type     | Description              |
| ----------------- | -------- | ------------------------ |
| `layout`          | `'pin'`  |                          |
| `sizeHorizontal?` | `number` | Width of child elements  |
| `sizeVertical?`   | `number` | Height of child elements |

#### `stack`

Arranges child elements in a single row.\
The key differences from `balance` are that no spacing is added when children are smaller than the parent, and when `alignVertical` is `middle` or `alignHorizontal` is `center`, the top or left edge of children becomes hidden when children overflow the parent.

| Prop                 | Type                                      | Description                                             |
| -------------------- | ----------------------------------------- | ------------------------------------------------------- |
| `layout`             | `'stack'`                                 |                                                         |
| `orientation`        | See [Orientation](#orientation)           | Direction to arrange children (default: `'horizontal'`) |
| `alignHorizontal?`   | See [Horizontal Align](#horizontal-align) | Horizontal alignment (default: `'left'`)                |
| `alignVertical?`     | See [Vertical Align](#vertical-align)     | Vertical alignment of children (default: `'top'`)       |
| `sizeHorizontal?`    | `number`                                  | Width of child elements                                 |
| `sizeVertical?`      | `number`                                  | Height of child elements                                |
| `adjustHorizontal?`  | See [Size Adjust](#size-adjust)           | Horizontal size adjustment                              |
| `adjustVertical?`    | See [Size Adjust](#size-adjust)           | Vertical size adjustment                                |
| `spacingAll?`        | `number`                                  | Spacing between elements                                |
| `spacingHorizontal?` | `number`                                  | Horizontal spacing                                      |
| `spacingVertical?`   | `number`                                  | Vertical spacing                                        |

#### `tile`

Arranges child elements in a grid that wraps to fit the parent's size.\
Children wrap when they exceed the parent's size in the `orientation` direction.

| Prop                 | Type                                      | Description                                                          |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| `layout`             | `'tile'`                                  |                                                                      |
| `orientation`        | See [Orientation](#orientation)           | Direction to arrange children (default: `'horizontal'`)              |
| `alignHorizontal?`   | See [Horizontal Align](#horizontal-align) | Horizontal alignment (default: `'left'`)                             |
| `alignVertical?`     | See [Vertical Align](#vertical-align)     | Vertical alignment of children (default: `'top'`)                    |
| `sizeHorizontal?`    | `number`                                  | Width of child elements                                              |
| `sizeVertical?`      | `number`                                  | Height of child elements                                             |
| `adjustHorizontal?`  | See [Size Adjust](#size-adjust)           | Horizontal size adjustment (ignored when `orientation='horizontal'`) |
| `adjustVertical?`    | See [Size Adjust](#size-adjust)           | Vertical size adjustment (ignored when `orientation='vertical'`)     |
| `spacingAll?`        | `number`                                  | Spacing around child elements                                        |
| `spacingHorizontal?` | `number`                                  | Horizontal spacing around child elements                             |
| `spacingVertical?`   | `number`                                  | Vertical spacing around child elements                               |

## Prop Values

### Orientation

Specifies the direction in which child elements are arranged.

| Value          | Description                   |
| -------------- | ----------------------------- |
| `'horizontal'` | Arrange children horizontally |
| `'vertical'`   | Arrange children vertically   |

### Horizontal Align

Specifies the horizontal position of child elements.\
Generally relative to the parent's bounds, though some layouts use each child's own allocated area as the reference.

| Value             | Description                    |
| ----------------- | ------------------------------ |
| `'left'`          | Left-aligned                   |
| `'center'`        | Centered                       |
| `'right'`         | Right-aligned                  |
| `'space-between'` | Even spacing between elements  |
| `'space-around'`  | Spacing added on both ends     |
| `'space-evenly'`  | All spacing distributed evenly |
| `'fit'`           | Stretch to fit the parent      |

### Vertical Align

Specifies the vertical position of child elements.\
Generally relative to the parent's bounds, though some layouts use each child's own allocated area as the reference.

| Value             | Description                    |
| ----------------- | ------------------------------ |
| `'top'`           | Top-aligned                    |
| `'middle'`        | Centered                       |
| `'bottom'`        | Bottom-aligned                 |
| `'space-between'` | Even spacing between elements  |
| `'space-around'`  | Spacing added on both ends     |
| `'space-evenly'`  | All spacing distributed evenly |
| `'fit'`           | Stretch to fit the parent      |

### Size Adjust

Specifies how to adjust child size when children are smaller or larger than the parent.\
If you want children to always match the parent size, use `'fit'` on [Vertical Align](#vertical-align) or [Horizontal Align](#horizontal-align) instead.

| Value      | Description                     |
| ---------- | ------------------------------- |
| `'none'`   | No adjustment                   |
| `'expand'` | Expand to fill the parent       |
| `'narrow'` | Shrink to fit within the parent |

## License

MIT
