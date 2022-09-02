import multer from 'multer';
import path from 'path';
import HttpException from './handlers/error.handler';

const multerImageUpload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const extensions = ['.jpg', '.jpeg', '.png'];
    if (!extensions.includes(extension)) {
      cb(new HttpException(400, 'File format not supported'));
      return;
    }
    cb(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default multerImageUpload;