namespace FacadePattern {
  abstract class ImageRepainter {
    constructor() {}
    public abstract repaint(repaintableImg: RepaintableFormat);
  }

  class ImageRepainter16Bit extends ImageRepainter {
    public repaint(repaintableImg: RepaintableFormat) {
      console.log(`repainting ${repaintableImg.img} as 16 Bit IMG`);
      //repaintableImg.img = ...
      return repaintableImg;
    }
  }

  class ImageRepainter32Bit extends ImageRepainter {
    public repaint(repaintableImg: RepaintableFormat) {
      console.log(`repainting ${repaintableImg.img} as 32 Bit IMG`);
      //repaintableImg.img = ...
      return repaintableImg;
    }
  }

  class RepaintableFormat {
    constructor(public img: string) {
      this.img = this.convertedImg(img);
    }
    private convertedImg(img: string) {
      // ... some random actions ...
      return img;
    }
    public backToImg() {
      return this.img;
    }
  }

  export const enum ConvertOptions {
    bit16 = "bit16",
    bit32 = "bit32",
  }

  const repainters = {
    [ConvertOptions.bit16]: ImageRepainter16Bit,
    [ConvertOptions.bit32]: ImageRepainter32Bit,
  };

  export class ImageConverter {
    constructor() {}

    public convert(img: string, targetFormat: ConvertOptions) {
      return new repainters[targetFormat]()
        .repaint(new RepaintableFormat(img))
        .backToImg();
    }
  }
}
