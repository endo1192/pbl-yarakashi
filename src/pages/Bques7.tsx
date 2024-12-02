import Link from 'next/link';
import { Button } from "@/components/ui/button"


interface Bques1Props {
  count: number;
  selected: number;
  arrayn: number[];
  answer: number[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ req }: any) {
  // リクエストのURLからクエリパラメータを取得する
  const query = new URL(req.url || '', `http://${req.headers.host}`).searchParams;

  const selected = query.get('selected') ? parseInt(query.get('selected') as string, 10) : 0;

  
  const count = query.get('count') ? parseInt(query.get('count') as string, 10) : 0;
  
  // arraynとanswerをパース
  let Carray: number[] = [];
  const arrayn = query.get('arrayn');
  if (arrayn) {
    try {
      Carray = JSON.parse(arrayn);
    } catch (error) {
      console.error("Failed to parse arrayn:", error);
    }
  }

  let Canswer: number[] = [];
  const answer = query.get('answer');
  if (answer) {
    try {
      Canswer = JSON.parse(answer);
    } catch (error) {
      console.error("Failed to parse answer:", error);
    }
  }

  return {
    props: {
      count,
      selected,
      arrayn: Carray,
      answer: Canswer,
    },
  };
}


export default function Home({ count, arrayn, answer, selected }: Bques1Props) {
  

  const Carray = arrayn;
  const Canswer = answer;

  const Selected = selected;

  const Fnumber = count;

  const Cnumber = Fnumber + 1



  return ( 
    <div className="answer">
      <Button><Link href="/">はじめに戻る</Link></Button><br />
      <p>パスワードを設定しよう </p><br /><br />
      <p>第{Cnumber}問7、～</p><br /><br /><br />
      <p>{Carray}</p>
      <p>{Canswer}</p>
      <li>
      <Link href={{ pathname: '/Bans7', query: { num: 1, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>1自分にしかわからないパスワードにする </Link></li><br />
      <li><Link href={{ pathname: '/Bans7', query: { num: 2, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>2:生年月日に設定する</Link></li><br />
      <li><Link href={{ pathname: '/Bans7', query: { num: 3, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>3:覚えやすいので、他のサイトでも使っているパスワードと同じパスワードを設定する。 </Link></li><br />
      <li><Link href={{ pathname: '/Bans7', query: { num: 4, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>選択肢4</Link>
      </li>
    </div>
          
  );
}