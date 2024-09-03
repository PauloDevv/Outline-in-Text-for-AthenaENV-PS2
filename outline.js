export class FontOutline {
    constructor(font) {
      this.font = font;
    }
  
    print(x, y, text, outlineScale = 2, outlineColor) {

      const offsets = [-outlineScale, 0, outlineScale];
      const originalColor = this.font.color;
  

      this.font.color = outlineColor;
      for (let dx of offsets) {
        for (let dy of offsets) {
          if (dx !== 0 || dy !== 0) {
            this.font.print(x + dx, y + dy, text);
          }
        }
      }
  
      this.font.color = originalColor;
      this.font.print(x, y, text);
    }
  }