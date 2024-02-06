export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_SERVICE = process.env.NEXT_PUBLIC_API_SERVICE;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  console.error("API_KEY not found");
}
