'use client' // client component

// export default function Client() {
//   return (
//     <div></div>
//   );
// }
// export default는 js파일 1개당 1개만 export 가능
// 다른 파일에서 사용하려면 =? import Client from "경로"

const STUDY_DATE = '2023-07-10';

function LogButton() {
  return (
    <button onClick={() => {
      console.log("버튼 클릭");
    }}>
      로그 버튼
    </button>
  );
}

export {STUDY_DATE, LogButton}
// 다른 파일에서 사용하려면 =? import {STUDY_DATE, LogButton} from "경로"