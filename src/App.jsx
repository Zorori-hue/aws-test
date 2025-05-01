import { useState } from 'react';

import{ Card } from "./components/Card"

export const App=()=> {
  const {isAdmin,setIsAdmin}=useState(false);
 const onClickSwtich=()=>setIsAdmin(!isAdmin);
  return (
   <div>
    <h1>AWSテストサイト</h1>
    {isAdmin?<span>管理者です</span>:<span>管理者以外です</span>}
    <button onClick={onClickSwtich}>切り替え</button>
    <Card isAdmin={isAdmin}/>
   </div>
  );
}


