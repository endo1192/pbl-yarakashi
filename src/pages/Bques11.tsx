import Link from 'next/link';

interface Bques1Props {
  arrayn: number[];
  answer: number[];
  selected: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ req }: any) {
  // リクエストのURLからクエリパラメータを取得する
  const query = new URL(req.url || '', `http://${req.headers.host}`).searchParams;

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
      selected,
      arrayn: Carray,
      answer: Canswer,
    },
  };
}

export default function Bans1({ arrayn, answer, selected }: Bques1Props) {
  


  const Carray = arrayn;
  const Canswer = answer;

  const Kaito: string[] = ["d","d","d","d","d","d","d","d","d","d"]

  for(let i = 0;i<=9;i++){
    if(Canswer[i] == 0){
      Kaito[i] = "不正解です"
    }else if(Canswer[i] == 1){
      Kaito[i] = "正解です"
    }else{Kaito[i] = "error"}
  }

  const Kaisetsu: string[] = ["d","d","d","d","d","d","d","d","d","d"]

  for(let i = 0;i<=9;i++){
    switch(Carray[i]){
      case 1:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "1F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "1T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 2:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "2F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "2T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 3:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "3F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "3T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 4:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "4F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "4T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 5:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "5F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "5T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 6:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "6F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "6T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 7:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "7F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "7T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 8:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "8F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "8T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 9:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "9F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "9T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 10:
        if(Canswer[i] == 0){
          Kaisetsu[i] = "10F"
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = "10T"
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      default:
        Kaisetsu[i] = "2Error"
        break;
    }
  }

  const Gamen: string[] = ["d","d","d","d","d","d","d","d","d","d"]

  const Hselected = selected - 1

  for(let i = 0; i<=9; i++){
    if(Canswer[i] == 0){
      Gamen[i] = `第${i+1}問:不正解`
    } else if(Canswer[i] == 1){
      Gamen[i] = `第${i+1}問:不正解`
    } else{
      Gamen[i] = "error"
    }

    if(i > Hselected){
      Gamen[i] = ""
      Kaisetsu[i] = ""
    }
  }


  

  return (
    <div>
        <Link href="/">はじめに戻る</Link><br /><br /><br />
      <h1>正解発表fin</h1>
      <p>選択された回答: </p><br /><br />
      <p>結果: {}</p>
      <p>{Canswer}</p>
      <p>{Carray}</p>
      <p>{Gamen[0]}{Kaisetsu[0]}</p><br /><br />
      <p>{Gamen[1]}{Kaisetsu[1]}</p><br /><br />
      <p>{Gamen[2]}{Kaisetsu[2]}</p><br /><br />
      <p>{Gamen[3]}{Kaisetsu[3]}</p><br /><br />
      <p>{Gamen[4]}{Kaisetsu[4]}</p><br /><br />
      <p>{Gamen[5]}{Kaisetsu[5]}</p><br /><br />
      <p>{Gamen[6]}{Kaisetsu[6]}</p><br /><br />
      <p>{Gamen[7]}{Kaisetsu[7]}</p><br /><br />
      <p>{Gamen[8]}{Kaisetsu[8]}</p><br /><br />
      <p>{Gamen[9]}{Kaisetsu[9]}</p><br /><br />
    </div>
  );
}
