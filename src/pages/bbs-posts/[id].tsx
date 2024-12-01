import { GetServerSideProps } from "next";
import { BData } from "../../types/types";
import Link from 'next/link';

// 非同期にデータを取得する関数
async function getData(id: number): Promise<BData | null> {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return null;
  }

  const detailData: BData = await response.json();
  return detailData;
}

// サーバーサイドでパラメータを取得
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {}; // 動的ルートから id を取得

  if (!id || Array.isArray(id)) {
    return {
      notFound: true, // ID がない場合は 404 ページを表示
    };
  }

  const data = await getData(parseInt(id, 10)); // ID を数値に変換してデータを取得

  if (!data) {
    return {
      notFound: true, // データが取得できなかった場合も 404 ページを表示
    };
  }

  return {
    props: { data }, // データをコンポーネントに渡す
  };
};

// コンポーネント
const Detail = ({ data }: { data: BData }) => {
  const { title, content, username } = data;

  return (
    <div className="mx-auto max-w-4xl p-4">
    <div className="mb-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-700">{username}</p>
    </div>

    <div className="mb-8">
      <p className="text-gray-900">{content}</p>
    </div>

    <Link href={"/Kmenu"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">menu</Link>
    </div>
  );
};

export default Detail;
