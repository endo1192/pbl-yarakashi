import Link from 'next/link';



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
      <br /><br /><br />
      <p>第{Cnumber}問8</p><br />
      <p>個人情報を24時間以内に送信しないとゲームが使えなくなる、という通知がきた</p><br /><br />
      
      <li>
      <Link href={{ pathname: '/Bans8', query: { num: 1, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>1:怪しいので送らない</Link></li><br />
      <li><Link href={{ pathname: '/Bans8', query: { num: 2, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>2:自分の個人情報を送信するのは怖いので、親の情報を送信した</Link></li><br />
      <li><Link href={{ pathname: '/Bans8', query: { num: 3, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>3:普通に個人情報を入力して送る</Link></li><br />
      <li><Link href={{ pathname: '/Bans8', query: { num: 4, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>選択肢4</Link>
      </li>
    </div>
          
  );
}