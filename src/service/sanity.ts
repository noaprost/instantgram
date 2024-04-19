import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: false, // 주로 동적인 데이터를 쓸것이기 때문에 cdn에 캐시할 필요가 없음
  apiVersion: "2024-04-19", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN, // 데이터를 그냥 읽기만 한다면 사용하지 않아도 되지만, 데이터 수정 시에는 꼭 토큰을 명시해줘야함
});
