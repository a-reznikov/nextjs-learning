export const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_BASE_IMG_URL = process.env.NEXT_PUBLIC_API_BASE_IMG_URL;
export const API_SERVICE_NEWS = process.env.NEXT_PUBLIC_API_SERVICE_NEWS;
export const API_SERVICE_ARTICLES =
  process.env.NEXT_PUBLIC_API_SERVICE_ARTICLES;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  console.error("API_KEY not found");
}
