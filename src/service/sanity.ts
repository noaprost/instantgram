import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: false, // 주로 동적인 데이터를 쓸것이기 때문에 cdn에 캐시할 필요가 없음
  apiVersion: "2024-04-19", // 이걸 쓸 당시의 날짜
  token: process.env.SANITY_SECRET_TOKEN, // 데이터를 그냥 읽기만 한다면 사용하지 않아도 되지만, 데이터 수정 시에는 꼭 토큰을 명시해줘야함
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url(); // width가 적어도 800을 넘어가지 않도록
}
