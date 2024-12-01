import { useEffect, useState } from 'react';
import Link from 'next/link';
import CardList from "./components/CardList";
import { BData } from "../types/types";
import { Button } from "@/components/ui/button"

// 非同期にデータを取得する関数
async function getData(): Promise<BData[]> {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return []; // エラー時は空の配列を返す
  }

  const bCardList: BData[] = await response.json();
  return bCardList;
}

export default function Home() {
  const [bCardList, setBCardList] = useState<BData[] | null>(null); // 初期状態はnull
  const [loading, setLoading] = useState<boolean>(true); // ローディング状態を管理

  useEffect(() => {
    // コンポーネントがマウントされた後にデータを取得
    const fetchData = async () => {
      const data = await getData();
      setBCardList(data);  // データをstateにセット
      setLoading(false);  // ローディング終了
    };
    
    fetchData();
  }, []);  // 空の依存配列で初回のみ実行

  if (loading) {
    return <div>Loading...</div>;  // ローディング中に表示する内容
  }

  if (!bCardList) {
    return <div>No data available</div>;  // データがない場合
  }

  return (
    <>
      <Link href="/" className=" px-4 py-4 gap-4">ホームに戻る</Link>
      <Button><Link href="/bbs-posts/create">投稿</Link></Button>
      <br /><br /><br />
      <main>
        <CardList bCardList={bCardList} /> {/* bCardListをCardListに渡す */}
      </main>
    </>
  );
}
