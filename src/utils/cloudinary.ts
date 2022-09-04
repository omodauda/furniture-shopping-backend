import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret
});

class Cloudinary {
  private cloud = cloudinary;

  public uploadImage = async (image: { path: string }, folder: any): Promise<UploadApiResponse> => {
    return await this.cloud.uploader.upload(image.path, {
      folder: `furniture-shopping/${folder}`
    })
  }

  public deleteImage = async (publicId: string): Promise<void> => {
    await cloudinary.uploader.destroy(publicId)
  }
};

export default Cloudinary