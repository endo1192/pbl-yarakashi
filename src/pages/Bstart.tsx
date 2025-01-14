import Link from 'next/link';
import { useState } from 'react';
import styled from "styled-components";

const shuffleArray = (array: number[]) => {
  const cloneArray = [...array]

  for(let i = cloneArray.length - 1; i>=0; i--){
    const rand = Math.floor(Math.random() * (i+1))

    const tmpStorage = cloneArray[i]
    cloneArray[i] = cloneArray[rand]
    cloneArray[rand] = tmpStorage
  }

  return cloneArray
}

export default function Home() {
  const [selectedNumber, setSelectedNumber] = useState<number>(14);
  //let array: number[];
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  const arrayn = shuffleArray(array)

  const pagen = arrayn[0]

  //let answer: number[];
  const answer = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  return (
    <>
      <br /><br /><br />
      <p>初心者コース</p><br /><h1>以下のボタンで問題数を選択してください</h1><br />
      <Sselect className="QNumber" value={selectedNumber} onChange={(e) => setSelectedNumber(Number(e.target.value))}>
        <option value="1">1問</option>
        <option value="2">2問</option>
        <option value="3">3問</option>
        <option value="4">4問</option>
        <option value="5">5問</option>
        <option value="6">6問</option>
        <option value="7">7問</option>
        <option value="8">8問</option>
        <option value="9">9問</option>
        <option value="10">10問</option>
        <option value="11">11問</option>
        <option value="12">12問</option>
        <option value="13">13問</option>
        <option value="14">14問</option>
      </Sselect>
      <br /><br />
      <Link href={{ pathname: `/Bques${pagen}`, query: { arrayn: JSON.stringify(arrayn), count: 0, answer: JSON.stringify(answer), selected: selectedNumber, } }}><p className="bg-green-600 text-white font-bold py-1 px-0.1 rounded-md">start!</p></Link>
    </>
          
  );
}

const Sselect = styled.select`
    display: block;
    color: white;
    margin: auto;
    text-align-last: center;
`;