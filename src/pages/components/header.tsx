import React from 'react';
import Link from "next/link";
import styled from "styled-components";


function Cheader() {
    return (
        <Sheader>
            <Link href="/">ホームに戻る</Link>
            <Sh1>やらかし事例集</Sh1>
            <Link href="/Kmenu" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">やらかし掲示板</Link>
        </Sheader>
    );
}


export default Cheader;

const Sheader = styled.header`
  background-color: white;
  color: black;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Sh1 = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  color: #0bc9a0;
  font-size: 1.8rem;
  @media (max-width: 560px) {
    font-size: 0px;
  }
`;