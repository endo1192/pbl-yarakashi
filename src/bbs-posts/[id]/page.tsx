import Link from 'next/link';
import { BData } from "../../types/types";

// 非同期にデータを取得する関数
async function getData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return ; // エラー時は空の配列を返す
  }

  const detailData: BData = await response.json();
  return detailData;
}

const detail = async ({params}: { params: {id: number}}) => {

  
  const Adata = await getData(params.id);

  // データが取得できなかった場合の処理
  if (!Adata) {
    return <div>No data available</div>;
  }


  const { title, content, username} = Adata;

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
}

export default detail;
