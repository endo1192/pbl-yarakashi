import { useEffect, useState } from 'react';
import Link from 'next/link';
import CardList from "./components/CardList";
import { BData } from "../types/types";

// 非同期にデータを取得する関数
async function getData(): Promise<BData[]> {
  try {
    const response = await fetch("https://pbl-yarakashi.vercel.app/api/post", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const bCardList: BData[] = await response.json();
    return bCardList;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // エラーを上位でキャッチするために再スロー
  }
}

export default function Home() {
  const [bCardList, setBCardList] = useState<BData[] | null>(null); // 初期状態はnull
  const [loading, setLoading] = useState<boolean>(true); // ローディング状態を管理
  const [error, setError] = useState<string | null>(null); // エラーメッセージを管理

  useEffect(() => {
    // コンポーネントがマウントされた後にデータを取得
    const fetchData = async () => {
      try {
        const data = await getData();
        setBCardList(data);  // データをstateにセット
      } catch (error: any) {
        setError(error.message || "An unknown error occurred"); // エラー内容をセット
      } finally {
        setLoading(false);  // ローディング終了
      }
    };

    fetchData();
  }, []);  // 空の依存配列で初回のみ実行

  if (loading) {
    return <div>Loading中です...</div>;  // ローディング中に表示する内容
  }

  if (error) {
    return (
      <div>
        <p>Error fetching data: {error}</p>
        <button onClick={() => location.reload()}>Retry</button>
      </div>
    ); // エラー時に表示する内容
  }

  if (!bCardList || bCardList.length === 0) {
    return <div>No data available</div>;  // データがない場合
  }

  return (
    <>
      <Link href="/" className="px-4 py-4 gap-4">ホームに戻る</Link>
      <Link href="/bbs-posts/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">投稿</Link>
      <br /><br /> 
      <h1>やらかし掲示板</h1>
      <br />
      <main>
        <CardList bCardList={bCardList} /> {/* bCardListをCardListに渡す */}
      </main>
    </>
  );
}
