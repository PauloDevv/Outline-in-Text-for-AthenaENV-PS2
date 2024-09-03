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
