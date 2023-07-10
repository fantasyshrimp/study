import { STUDY_DATE, LogButton } from "./client";

// 이미지 최적화
//import Image from "next/image";
//import profile from '/public/fshrimp.png'

export default function Info() {

  let infoList = ['info 1', 'info 2', 'info 3'];
  return (
    <div>
      <h4 className="title">info page {STUDY_DATE}</h4>

      <ul className="info-list">
        {infoList.map((e, i) => {
          return (
            <InfoItem key={i} title={e}/>
          );
        })}
      </ul>

    </div>
  )
}


function InfoItem(props) {
  return (
    <li>
      <img src="/fshrimp.png"/>
      {/* <Image src={profile} alt="이미지를 최적화 하려면
        Image태그 사용, 이미지 import후 사용"/> */}
      {/* <Image src="외부 url" width={}, height={}
        alt="외부 url일 경우 width, height설정 필요, next.config.js파일에 셋팅 필요"/> */}
      <span>{props.title}</span>
      <LogButton />
    </li>
  );
}

// server component (default)
// -> 자바스크립트 기능넣기 불가능(ex) onClick)
// -> useState, useEffect 등 사용불가
// => page loading빠름, 검색엔진 노출좋음

// client component (.js최상단에 'use client' -> client.js참고)
// => page loading느림, 기능부분만 구현해서 쓰기