import { useState } from 'react';
import Link from 'next/link';


interface Bans1Props {
  num: string;
  count: number;
  selected: number;
  arrayn: number[];
  answer: number[];
}

export default function Bans1({ num, count, arrayn, answer, selected }: Bans1Props) {
  const [showPopup, setShowPopup] = useState(false);

  const Cnumber = count;
  const Carray = arrayn;
  const Canswer = answer;
  const Selected = selected;

  let pagen = Carray[Cnumber];

  const Hselected = Selected - 1;

  if (Cnumber > Hselected) {
    pagen = 111;
  }

  let answ = null;

  if (num === "2") {
    answ = "正解です！";
    Canswer[Cnumber - 1] = 1;
  } else if (num === "1") {
    answ = "残念、不正解です";
  } else if (num === "3") {
    answ = "残念、不正解です";
  } else if (num === "4") {
    answ = "残念、不正解です";
  } else {
    console.log("error");
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="answer">
      <br />
      <br />
      <br />
      <h1>{Cnumber}問,正解発表,1</h1>
      <p>選択された回答: {num}</p>
      <br />
      <br />
      <p>結果: {answ}</p>
      

      <button onClick={togglePopup}><h1 className="bg-green-500 text-white font-bold py-1 px-4 rounded-md">解説を見る</h1></button>

      <br />
      <br />
      <Link
        href={{
          pathname: `/Bques${pagen}`,
          query: {
            arrayn: JSON.stringify(Carray),
            count: Cnumber,
            answer: JSON.stringify(Canswer),
            selected: Selected,
          },
        }}
      >
        <h1>次の問題に進む</h1>
      </Link>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={togglePopup}>閉じる</button>
            <img src="./images/pbl11.jpg" alt="ポップアップ画像" />
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          bottom: 30px;
          left: 0;
          width: 100%;
          height: 80%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        img {
          width: 50%;
          height: 50%;
          margin: auto;
        }
      `}</style>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ req }: any) {
  // リクエストのURLからクエリパラメータを取得する
  const query = new URL(req.url || '', `http://${req.headers.host}`).searchParams;

  const num = query.get('num') || "0";
  const count = query.get('count') ? parseInt(query.get('count') as string, 10) : 0;
  const selected = query.get('selected') ? parseInt(query.get('selected') as string, 10) : 0;
  
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
      num,
      count,
      selected,
      arrayn: Carray,
      answer: Canswer,
    },
  };
}
