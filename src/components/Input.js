import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
import useStorage from '../hooks/storage';
import {getKey} from "../lib/util";
function Input( {items, putItems} ) {

  return (
    <div className="panel-block">
        <input type="text" 
          onKeyPress={(ev)=>{
            if(ev.key === 'Enter' && ev.target.value.length > 0) {
              putItems(items => [...items, { key: getKey(), text: ev.target.value, done: false }]);
            }  
          }}/>
      </div> 
  );
}

export default Input;
