
Riin（果物リン）FruitRiin — 今日 15:36
おもちゃでいいんじゃない？
tns — 今日 15:36
ぽちぽちぽち
おもちゃ作ろ〜〜〜　ガチャガチャからかな
Riin（果物リン）FruitRiin — 今日 15:37
Math.random() ってのがあるよ
Math.random()  % 5 → 0〜5
だったかな
tns — 今日 15:38
わーい！調べてみる
N、R、SRとかで排出率決めてランダムでいい感じに出すをやりたい
あとできれば画像？画像の中に（例えば、絵の中のボタン）ポチって押すところ設定したい　これはCSSかな
Riin（果物リン）FruitRiin — 今日 15:39
排出率はJS　画像の中にボタンは
画像置いて、そこにボタン重ねればいいのかな
tns — 今日 15:40
おそらく。特定範囲でクリックだかボタンダウンのイベント受け取れればよい
Riin（果物リン）FruitRiin — 今日 15:40
```
<div style="position:relative;">
   <img>
  <button style="position: absolute; top: 10px; left: 50px"> ぼたん</button>
</div>
```
こうすると 
親のdivタグの左上を基準にボタンを配置できる
tns — 今日 15:41
pojishonn
Riin（果物リン）FruitRiin — 今日 15:41
positionだ
tns — 今日 15:41
ローマ字で送っちゃった　ぽじしょんあぶそりゅーとくん！　大学で覚えた　いい文明
Riin（果物リン）FruitRiin — 今日 15:41
displayじゃないね
この方法だと、ボタンはボタンとして背景画像透けたりしないから
んー
button じゃなくて div とかにして
空の領域つくったりとかしてもいいね
tns — 今日 15:43
うんうん　そんな気がする
Riin（果物リン）FruitRiin — 今日 15:43
んで @click="" だ
tns — 今日 15:43
わーい　メモしとこ