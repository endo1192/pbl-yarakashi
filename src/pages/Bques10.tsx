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
      <p>第{Cnumber}問10</p><br />
      <p>通信制限がかかっているので、Wi-Fiに接続したい。</p><br /><br />
      
      <li>
      <Link href={{ pathname: '/Bans10', query: { num: 1, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>1:よく分からないWi-Fiに接続する。</Link></li><br />
      <li><Link href={{ pathname: '/Bans10', query: { num: 2, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>2:いつも使っている信頼できるWi-Fiに接続する。</Link></li><br />
      <li><Link href={{ pathname: '/Bans10', query: { num: 3, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>3:知ってる会社の名前が入っているWi-Fiに接続する。</Link></li><br />
      <li><Link href={{ pathname: '/Bans10', query: { num: 4, arrayn: JSON.stringify(Carray), count: Cnumber, answer: JSON.stringify(Canswer), selected: Selected, } }}>選択肢4</Link>
      </li>
    </div>
          
  );
}