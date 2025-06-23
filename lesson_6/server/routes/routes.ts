import express from 'express'; 
import { getUploadCode, postUploadCode } from '../controllers/image-controller';
import upload from '../utils/upload';
const router = express.Router();

router.get('/upload', (req: express.Request, res: express.Response) => {
  getUploadCode(req, res);
});
// in js 
// router.get('/upload', getUploadCode(req, res));
//it looks messy in ts due to all the types 

router.post('/upload',upload.single('file'), (req: express.Request, res: express.Response) => {
  postUploadCode(req, res);
});

// router.post('/registerNew', );

export default router;







