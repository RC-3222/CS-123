namespace AdapterPattern {
  type JPGImage = `${string}.jpg`;
  type PNGImage = `${string}.png`;

  class ImageLibrary {
    public getImage(): JPGImage {
      return "someRandomImg.jpg";
    }
  }

  class ImageProcessor {
    public processImage(image: PNGImage) {
      console.log(`Processing ${image}...`);
    }
  }

  class ImageProcessorAdapter {
    constructor(private imageProcessor: ImageProcessor) {
      this.imageProcessor = imageProcessor;
    }

    public processImage(image: JPGImage) {
      const imagePNG = this.convertJPGtoPNG(image);
      this.imageProcessor.processImage(imagePNG);
    }

    private convertJPGtoPNG(name: JPGImage): PNGImage {
      return name.replace(/(\.jpg)$/gi, ".png") as PNGImage;
    }
  }
}
