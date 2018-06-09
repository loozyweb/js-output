// DOM読み込みタイミングで実行
document.addEventListener('DOMContentLoaded', function(){

  /* ================================================
  / initial
  */

  // var
  const MAX = 11; // 選択上限数
  var counter = 0; // 選択数カウンター

  // player分のelementsを取得
  var player = document.getElementsByClassName('player');


  /* ================================================
  / click処理
  */

  // playerクリック時処理
  for(let value of player){
    value.addEventListener('click', function(){
      // 上限数選択済の処理
      if(value.style.fontWeight === 'bold'){
        deletePlayer(value);
      } else if(counter === MAX){
        alert();
      } else {
        addPlayer(value);
      }
    }, false);
  };

  // decideクリック時処理
  var decide = document.getElementById('decide');
  decide.addEventListener('click', function(){
    if (counter === MAX){
      var decide_player = document.getElementsByClassName('s_player');
      var out_txt = '';
      for (let value of decide_player){
        out_txt = (out_txt === '') ? value.innerText : out_txt += '\n' + value.innerText;
      }
      out_txt = '君のイレブンはこのメンバーだ！' + '\n' + out_txt;
      window.alert(out_txt);
    } else{
      window.alert(MAX + '項目選択してください');
    }
  }, false);

  // clearクリック時処理
  var clear = document.getElementById('clear');
  clear.addEventListener('click', function(){
    // player状態初期化
    for(var i = 0; player.length > i; i++){
      player[i].style.fontWeight = 'normal';
      player[i].style.backgroundColor = 'transparent';
    }

    // select list 初期化
    var select_player = document.getElementById('select_player');
    select_player.innerText = "";

    // counter 初期化
    counter = 0;

  }, false);


  /* ================================================
  / function
  */

  // 選手数超過 alert処理
  function alert(){
    window.alert(MAX + '項目選択済です');
  };

  // 削除処理
  function deletePlayer(tgt){
    counter -= 1;

    // player style デフォルト
    tgt.style.fontWeight = 'normal';
    tgt.style.backgroundColor = 'transparent';

    // select listから要素削除
    var select_player = document.getElementById('select_player');
    var select_player_child = select_player.childNodes;

    for(var i = 0; i < select_player_child.length; i++){
      if(select_player_child[i].innerText === tgt.innerText){
        select_player.removeChild(select_player_child[i]);
      }
    }
  };

  // 追加処理
  function addPlayer(tgt){
    counter += 1;

    // player style 変更
    tgt.style.fontWeight = 'bold';
    tgt.style.backgroundColor = '#99ccff';

    // select listに要素追加
    var select_player = document.getElementById('select_player');
    var add_ele = document.createElement('li');
    var add_txt = document.createTextNode(tgt.innerText);
    add_ele.appendChild(add_txt);
    add_ele.className = 's_player';
    select_player.appendChild(add_ele);

    // 追加要素のイベントリスナー追加
    add_ele.addEventListener('click', function(){
      selectPlayer(this.innerText);
    }, false);
  };

  // select listクリック時処理
  function selectPlayer(tgt){
    for(var i = 0; i < player.length; i++){
      if(player[i].innerText === tgt){
        deletePlayer(player[i]);
      }
    }
  };

}, false);
