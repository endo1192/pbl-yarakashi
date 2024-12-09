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
  const [selectedNumber, setSelectedNumber] = useState<number>(10); // 初期値を10に設定
  //let array: number[];
  const array = [1,2,3,4,5,6,7,8,9,10]

  const arrayn = shuffleArray(array)

  const pagen = arrayn[0]

  //let answer: number[];
  const answer = [0,0,0,0,0,0,0,0,0,0]

  return (
    <>
      <br /><br /><br />
      <p>ビギナークラス・問題は10問</p><br /><br />
      <Sselect className="QNumber" value={selectedNumber} onChange={(e) => setSelectedNumber(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Sselect>
      <br /><br />
      <Link href={{ pathname: `/Bques${pagen}`, query: { arrayn: JSON.stringify(arrayn), count: 0, answer: JSON.stringify(answer), selected: selectedNumber, } }}><h1>start</h1></Link>
    </>
          
  );
}

const Sselect = styled.select`
    color: white;
    margin: auto;
    text-align: center;
`;