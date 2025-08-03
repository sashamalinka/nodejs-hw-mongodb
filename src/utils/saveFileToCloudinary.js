import cloudinary from 'cloudinary';
import getEnvVar from '../utils/getEnvVar.js';
import { CLOUDINARY } from '../constants/constants.js';
import fs from 'node:fs/promises';

let isConfigured = false;

function configureCloudinary() {
  if (isConfigured) return;
  cloudinary.v2.config({
    secure: true,
    cloud_name: getEnvVar(CLOUDINARY.CLOUD_NAME),
    api_key: getEnvVar(CLOUDINARY.API_KEY),
    api_secret: getEnvVar(CLOUDINARY.API_SECRET),
  });
  isConfigured = true;
}

export const saveFileToCloudinary = async (file) => {
  configureCloudinary(); // ✅ тепер env точно завантажений
  const response = await cloudinary.v2.uploader.upload(file.path);
  await fs.unlink(file.path);
  return response.secure_url;
};
