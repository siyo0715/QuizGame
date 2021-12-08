const quiz = [
  {
    question: '問題1.'+'「くさタイプはどのポケモンですか？」',
    answers: [
    'リザードン',
    'フシギバナ',
    'カメックス',
    'ライチュウ'
    ],
    correct: 'フシギバナ'
  }, {
    question: '問題2.'+'「二刀流と呼ばれ大活躍を続けている野球選手といえば？」',
    answers: [
    'カエル',
    'ロロノアゾロ',
    'はるな愛',
    '大谷翔平'
    ],
    correct: '大谷翔平'
  }, {
    question: '問題3.'+'「食べられないパンはどれ？」',
    answers: [
    'カレーパン',
    'あんパン',
    'メロンパン',
    'サンドパン'
    ],
    correct: 'サンドパン'
  }, {
    question: '問題4.'+'「1+1は？」',
    answers: [
    '2',
    '11',
    '0',
    '3'
    ],
    correct: '2'
  },{
    question: '問題5.'+'「あなたはこれから先の未来で？」',
    answers: [
    '1億円を拾う',
    '空を飛ぶ',
    '宇宙人に会える',
    '幸せになる'
    ],
    correct: '幸せになる'
  }

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    // ここに命令↓
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  }
  else{
    window.alert('残念...');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  }
  else {
      // 問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です' )

  }
};

// ボタンクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}