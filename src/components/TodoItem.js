import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
/* check color of item.text
    if classColor=="", color of item.text is black, onClick event change classColor to "has-text-grey-light" class
    click one more time, onClick event change classColor to ""
*/
function TodoItem( {item} ) {
  const [classColor, setClassColor] = React.useState("");
  return (
    <label className="panel-block">
      
      <input type="checkbox" onClick={(e)=>{classColor===""?(setClassColor("has-text-grey-light") && item.done:true):(setClassColor("") && item.done:false)}}/>
            <text class={classColor}>{item.text}</text>
    </label>
  );
}

export default TodoItem;