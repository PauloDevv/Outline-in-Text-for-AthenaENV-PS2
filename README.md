---

# FontOutline

`FontOutline` is a class that adds an outline to texts in AthenaENV. With it, you can create texts with customizable outlines, making them easier to read against various backgrounds and styles.

## Installation

Make sure the `outline.js` file and the font file are in the same directory, or adjust the import paths as needed.

## Basic Usage

To use `FontOutline`, follow these steps:

1. **Import the `FontOutline` class from the `outline.js` file.**

2. **Create an instance of the `FontOutline` class, passing an instance of `Font` as an argument.**

3. **Use the `print` method of the `FontOutline` instance to draw text with an outline.**

Here’s a basic example of how to use the `FontOutline` class:

### Code Example

**main.js**

```javascript
import { FontOutline } from "./outline.js";

const font = new Font("default");
const fontOutline = new FontOutline(font);

const outlineColor = Color.new(0, 0, 0, 200); 
const backgroundColor = Color.new(100, 100, 100, 200);

os.setInterval(() => {
  Screen.clear(backgroundColor); 
  fontOutline.print(0, 0, "Hello World!", 1, outlineColor); 
  Screen.flip(); 
}, 0);
```

### Parameters

**`fontOutline.print(x, y, text, outlineScale, outlineColor);`**
- **`x`**: The X coordinate for the text position.
- **`y`**: The Y coordinate for the text position.
- **`text`**: The text to be drawn.
- **`outlineScale`**: The size of the text outline (optional, default is 2).
- **`outlineColor`**: The color of the outline (should be a `Color` object).
