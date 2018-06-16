document.addEventListener('DOMContentLoaded', function(){

  // elements
  var selecter = document.getElementById('player'); // 選択項目
  var result = document.getElementById('result'); // 結果出力先

  // SELECTフォームが選択されたタイミング
  selecter.addEventListener('change',function(){
    // 選択項目取得
    var select = selecter.value;

    if(select === 'initial'){ // 初期項目選択時
      result.textContent = '選手を選択せよ！'
    } else {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){ // 通信完了時
          if (xhr.status === 200){ // 通信成功時
            var text = xhr.responseText; // 結果を取得
            result.textContent = text;
          } else { // 通信失敗時
            result.textContent = '通信に失敗しました。'
          }
        } else { // 通信完了前
          result.textContent = '現在、通信中…';
        }
      };
      //サーバーとの非同期通信を開始
      xhr.open('GET', 'player.php?player=' + encodeURIComponent(select), true);
      xhr.send(null);
    }
  }, false);

}, false);
