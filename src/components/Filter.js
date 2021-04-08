/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ onChange, value }) {
  const handleClick = (selectedTab, e) => {
    e.preventDefault();
    onChange(selectedTab);
  }

  return (
    <div className="panel-tabs">
    <a
      href="#"
      onClick={handleClick.bind(null, "ALL")}
      className={value === 'ALL' ? 'isActive' : ''}
    >全て</a>
    <a
      href="#"
      onClick={handleClick.bind(null, "TODO")}
      className={value === 'TODO' ? 'isActive' : ''}
    >未完了</a>
    <a
      href="#"
      onClick={handleClick.bind(null, "DONE")}
      className={value === 'DONE' ? 'isActive' : ''}
    >完了済み</a>
    </div>
  );
}

export default Filter
