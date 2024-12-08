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
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const bCardList: BData[] = await response.json();
    return bCardList;
  } catch (error: unknown) {
    // 型アサーションを使ってエラーの型を指定
    if (error instanceof Error) {
      console.error("Failed to fetch data:", error.message);
      throw error; // エラーを再スロー
    }
    // unknown型の場合、適切なエラーハンドリングを行う
    console.error("An unknown error occurred.");
    throw new Error("An unknown error occurred.");
  }
}

export default function Home() {
  const [bCardList, setBCardList] = useState<BData[] | null>(null); // 初期状態はnull
  const [loading, setLoading] = useState<boolean>(true); // ローディング状態を管理
  const [error, setError] = useState<string | null>(null); // エラーメッセージを管理

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setBCardList(data);  // データをstateにセット
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // エラーがErrorオブジェクトであればそのメッセージを表示
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false); // ローディング終了
      }
    };

    fetchData();
  }, []);  // 空の依存配列で初回のみ実行

  if (loading) {
    return <div>Loading...</div>; // ローディング中に表示する内容
  }

  if (error) {
    return (
      <div>
        <h2>Error occurred while fetching data</h2>
        <p>{error}</p>
        <button onClick={() => location.reload()} className="bg-red-500 text-white py-2 px-4 rounded-md">
          再試行
        </button>
      </div>
    );
  }

  if (!bCardList || bCardList.length === 0) {
    return <div>No data available</div>; // データが空の場合
  }

  return (
    <>
      <Link href="/" className=" px-4 py-4 gap-4">ホームに戻る</Link>
      <Link href="/bbs-posts/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">投稿</Link>
      <br /><br /> 
      <h1>やらかし掲示板k</h1>
      <br />
      <main>
        <CardList bCardList={bCardList} /> {/* bCardListをCardListに渡す */}
      </main>
    </>
  );
}
