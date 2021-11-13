export const PROD = process.env.NODE_ENV === 'production';
export const DEV = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const PORT = Number(process.env.PORT) || 3000;
