import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { file } from '@babel/types';
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {items} ) {
  const [filter, setFilter] = React.useState(false)
  const [filterItems, setItems] = React.useState(items)
  const handle = (filter) => {
    setItems(filterItems => items.filter(item => (item.done === filter)))
  }
  return (
    <div className="panel">
      <div className="panel-tabs">
      <a onClick={(e)=>{setItems(filterItems => items)}}>すべて</a>
      <a onClick={(e)=>{handle(false)}}>未完了</a>
      <a onClick={(e)=>{handle(true)}}>完了済み</a>
      </div>
      
      {filterItems.map(item => (
        <TodoItem 
          key={item.key}
          item={item}
        />
      ))}
      <div className="panel-block">
        {filterItems.length} items
      </div>
    </div>
    
    
  );
}

export default Filter