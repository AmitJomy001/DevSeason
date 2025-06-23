import express from 'express';


export const getUploadCode = (req: express.Request, res: express.Response) => {
  res.send('Upload page from image-controller (get Method)');
}

export const postUploadCode = (req: express.Request, res: express.Response) => {
  res.send('File uploaded');
}
