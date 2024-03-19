/*
Паттерн Adapter

Пусть имеется некоторая библиотека, из которой можно хранить какртинки в JPG-формате, и есть некоторый обработчик для изображений, который принимает только PNG. 
ImageProcessorAdapter - адаптер для такого обработчика, который позоляет работать и с JPG-форматом
*/
namespace AdapterPattern {
  type JPGImage = `${string}.jpg`;
  type PNGImage = `${string}.png`;

  class ImageLibrary {
    constructor(private images: JPGImage[] = []) {}
    public getImage(index:string | number): JPGImage {
      return this.images[index];
    }
    public addImage(image:JPGImage) {
      this.images.push(image);
    }
  }

  class ImageProcessor {
    public processImage(image: PNGImage) {
      console.log(`Processing ${image}...`);
      const result = image // (some extremely complex image processing here)
      return result
    }
  }

  class ImageProcessorAdapter {
    constructor(private imageProcessor: ImageProcessor) {
      this.imageProcessor = imageProcessor;
    }

    public processImage(image: JPGImage) {
      const imagePNG = this.convertJPGtoPNG(image);
      return this.convertPNGtoJPG(this.imageProcessor.processImage(imagePNG));
    }

    private convertJPGtoPNG(name: JPGImage): PNGImage {
      return name.replace(/(\.jpg)$/gi, ".png") as PNGImage;
    }

    private convertPNGtoJPG(name: PNGImage): JPGImage {
      return name.replace(/(\.png)$/gi, ".jpg") as JPGImage;
    }
  }
}
