// DOM読み込みタイミングで実行
document.addEventListener('DOMContentLoaded', function(){

  // 対象ボタンを取得
  var add = document.getElementById("add");
  var del = document.getElementById("del");

  // addボタンをクリック時の処理
  add.addEventListener('click', function(){
    // 入力フォームのelement取得
    var name =  document.getElementById("name");
    var position = document.getElementById("position");

    // elementノード生成
    var tr = document.createElement('tr')
    var td_1 = document.createElement('td');
    var td_2 = document.createElement('td');

    // txtノード生成
    var txt_name = document.createTextNode(name.value);
    var txt_position = document.createTextNode(position.value);

    // output用element生成
    td_1.appendChild(txt_name);
    td_2.appendChild(txt_position);
    tr.appendChild(td_1);
    tr.appendChild(td_2);

    // テーブルの最終行に追加
    var table = document.querySelector('#playerList tbody');
    table.appendChild(tr);

  }, false)


  // deleteボタンをクリック時の処理
  del.addEventListener('click', function(){
    // テーブルの最終行を削除
    var table = document.querySelector('#playerList tbody');
    var table_node = table.childNodes;

    // textノードを削除
    for (var i = 0; i < table_node.length; i++){
      if(table_node[i].nodeName === '#text'){
        table.removeChild(table_node[i]);
      }
    }

    table.removeChild(table.lastChild);

  }, false);


}, false);
