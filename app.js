const scenarios = [
  {
    title: "클레르몽 공의회", year: "1095년",
    text: "교황이 클레르몽 대성당 앞에서 외칩니다. '셀주크 튀르크에게 빼앗긴 성지 예루살렘을 되찾아야 한다!' 유럽 전역의 제후와 기사들이 동요하고 있습니다. 십자군 원정에 병력을 보내시겠습니까?",
    choices: [
      { text: "신의 뜻대로! 참전하라!", effects: {pope: 10, noble: -10, king: 0, merchant: 0}, log: "교황의 권위가 높아지고 기사들의 전력이 약화되었습니다." },
      { text: "우리 영지 방어가 먼저다. 1명만 보낸다.", effects: {pope: -20, king: 10, noble: 0, merchant: 0}, log: "교황의 눈밖에 났으나 왕권이 강화되었습니다." }
    ]
  },
  {
    title: "십자군 원정 자금 조달", year: "12세기",
    text: "성지까지는 수천 킬로미터. 기사들의 갑옷과 말, 식량을 모두 갖추려면 엄청난 돈이 필요합니다. 원정 자금을 어떻게 마련할까요?",
    choices: [
      { text: "이탈리아 상인들에게 돈을 빌린다.", effects: {pope: 0, noble: -10, king: 0, merchant: 20}, log: "상인들이 높은 이자로 막대한 부를 쌓은 반면, 원정을 마친 제후들은 빚더미에 올라앉았습니다." },
      { text: "농노들에게 세금을 10배로 걷는다.", effects: {pope: 0, noble: 10, king: 0, merchant: -10}, log: "원정 자금은 채웠지만, 등골이 휜 농노들은 그해 겨울을 버티기 어려워졌습니다." }
    ]
  },
  {
    title: "지중해 무역의 발달", year: "12세기 후반",
    text: "십자군이 오가는 항로를 따라 베네치아, 제노바 같은 상업 도시들이 빠르게 성장했습니다. 상인 길드가 협상을 요청합니다. '세금을 꼬박꼬박 내드릴 테니, 도시 운영의 자치권을 인정해 주십시오.'",
    choices: [
      { text: "자치권을 인정하고 대가를 받는다.", effects: {pope: 0, noble: 0, king: 10, merchant: 10}, log: "왕실 재정이 튼튼해지고 상업도시가 발전합니다." },
      { text: "분수를 모르는 길드를 짓눌러라!", effects: {pope: 0, noble: 10, king: 0, merchant: -20}, log: "제후들의 통제력이 유지되었으나 상인들이 반란을 준비합니다." }
    ]
  },
  {
    title: "제4차 십자군 전쟁", year: "1204년",
    text: "상인들이 배를 빌려주는 대신, 성지가 아닌 상업적 경쟁 도시인 '콘스탄티노폴리스(비잔티움 제국)'를 공격하자고 유혹합니다.",
    choices: [
      { text: "약탈은 언제나 달콤하지.", effects: {pope: -20, noble: 0, king: 0, merchant: 10}, log: "같은 그리스도교 도시를 약탈한 십자군 소식에 교황의 권위가 땅에 떨어졌습니다." },
      { text: "배신은 거절한다. 성지로 가자.", effects: {pope: 10, noble: -15, king: 0, merchant: 0}, log: "교황의 신뢰는 지켰으나 무리한 원정으로 제후들이 큰 피해를 입었습니다." }
    ]
  },
  {
    title: "십자군 전쟁의 실패와 종료", year: "13세기 말",
    text: "200년에 걸친 원정은 결국 실패로 막을 내렸습니다. 교황의 권위는 크게 흔들리고, 원정에 나섰던 제후들은 영지와 재산을 잃어 몰락하고 있습니다. 이들의 빈 땅을 어떻게 처리하시겠습니까?",
    choices: [
      { text: "몰락한 기사들의 땅을 몰수한다.", effects: {pope: 0, noble: -15, king: 15, merchant: 0}, log: "제후들이 몰락하고 국왕의 힘이 막강해집니다." },
      { text: "제후들에게 남은 재정을 지원해 준다.", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "제후들의 불만은 잠재웠으나 왕실 재정이 바닥났습니다." }
    ]
  },
  {
    title: "흑사병의 창궐", year: "1347년",
    text: "흑사병이 유럽을 휩쓸며 인구의 3분의 1이 목숨을 잃었습니다. 마을마다 빈집이 늘고, 밭을 갈 사람이 부족해 농업이 흔들리고 있습니다. 살아남은 농노들을 어떻게 대하시겠습니까?",
    choices: [
      { text: "세금을 감면해 준다.", effects: {pope: 0, noble: -10, king: 0, merchant: 10}, log: "농노들의 지위가 향상되며 장원 경제가 흔들리기 시작합니다." },
      { text: "도망가지 못하게 영지에 묶어둔다.", effects: {pope: 0, noble: 10, king: 0, merchant: -10}, log: "제후들의 강압적인 통제가 계속되고, 농노들의 분노가 조용히 쌓여갑니다." }
    ]
  },
  {
    title: "농민 반란 발생", year: "14세기 후반",
    text: "더 이상 참을 수 없었던 농민들이 들고 일어났습니다! 프랑스의 자크리의 난, 영국의 와트 타일러의 난이 잇달아 터졌습니다. 어떻게 대응하시겠습니까?",
    choices: [
      { text: "어딜 까불어~!", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "반란은 진압되었으나 국력이 소모되었습니다." },
      { text: "농노야 농노야, 무얼 원하니?", effects: {pope: 0, noble: -15, king: 10, merchant: 0}, log: "봉건 제후들의 지배력이 크게 약화되었습니다." }
    ]
  },
  {
    title: "화약과 대포의 등장", year: "14세기",
    text: "동방 무역을 통해 화약 기술이 유럽에 전해졌습니다. 대포 앞에서는 아무리 두꺼운 성벽도 소용없습니다. 새로운 무기를 활용하시겠습니까?",
    choices: [
      { text: "국왕 직속 포병대를 육성한다.", effects: {pope: 0, noble: -20, king: 15, merchant: 0}, log: "국왕의 군사력이 제후들을 압도하기 시작합니다." },
      { text: "기사의 창과 갑옷이 최강이다. 변화는 필요 없다.", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "전통은 지켰지만 화약을 도입한 주변국과의 경쟁에서 뒤처지기 시작합니다." }
    ]
  },
  {
    title: "상비군과 관료제 도입", year: "14세기 말",
    text: "전쟁마다 제후들의 군대를 부르기 번거롭습니다. 항상 훈련된 '상비군'을 두고 싶은데 돈이 필요합니다.",
    choices: [
      { text: "상공업자들과 결탁하여 세금을 걷는다.", effects: {pope: 0, noble: 0, king: 10, merchant: 10}, log: "왕은 재정을 얻고 상인들은 보호를 받는 구조가 확립됩니다." },
      { text: "제후들의 사병에 계속 의존한다.", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "제후들의 눈치를 계속 보게 됩니다." }
    ]
  },
  {
    title: "백년 전쟁 발발", year: "1337년",
    text: "프랑스 왕위 계승을 두고 잉글랜드와 전쟁이 터졌습니다.",
    choices: [
      { text: "국력을 총동원하여 전면전을 벌인다.", effects: {pope: 0, noble: 0, king: 10, merchant: -10}, log: "장기전으로 경제는 타격을 입었으나 국가에 대한 소속감이 강해집니다." },
      { text: "적당히 협상하고 물러난다.", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "영토는 잃었으나 제후들의 전력이 보존됩니다." }
    ]
  },
  {
    title: "장궁병의 활약", year: "14세기 중반",
    text: "영국의 평민 장궁병들이 빗발치는 화살로 프랑스 기사 부대를 전멸시켰습니다! 기사의 시대가 저물고 있습니다. 군대 구성을 바꾸시겠습니까?",
    choices: [
      { text: "상비군의 비중을 대폭 늘린다.", effects: {pope: 0, noble: -10, king: 10, merchant: 0}, log: "기사 중심의 전투 방식이 종말을 고합니다." },
      { text: "기사들의 명예를 위해 기병 돌격을 지시한다.", effects: {pope: 0, noble: 10, king: -20, merchant: 0}, log: "시대에 뒤처진 전술로 아군 기사들이 큰 피해를 입었습니다." }
    ]
  },
  {
    title: "잔 다르크의 등장", year: "1429년",
    text: "불리하던 전황 속에 소녀 잔 다르크가 나타나 사람들의 애국심을 고취시키고 있습니다.",
    choices: [
      { text: "잔 다르크는 신의 계시다!", effects: {pope: -10, noble: 0, king: 15, merchant: 0}, log: "국왕 중심의 민족 의식이 크게 성장했습니다." },
      { text: "잔 다르크는 마녀다!", effects: {pope: 10, noble: 0, king: -10, merchant: 0}, log: "교회의 지지는 지켰으나 전세가 기울어갑니다." }
    ]
  },
  {
    title: "장미 전쟁 발발", year: "1455년",
    text: "전쟁이 끝나자, 이번엔 국내 귀족 가문들이 왕위를 차지하겠다고 내전을 벌입니다.",
    choices: [
      { text: "가문들이 싸우도록 내버려 두어 힘을 뺀다.", effects: {pope: 0, noble: -15, king: 10, merchant: 0}, log: "귀족들이 서로 싸우며 공멸의 길을 걷습니다." },
      { text: "한쪽 가문을 적극적으로 지원한다.", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "승리한 귀족 가문의 입김이 거세집니다." }
    ]
  },
  {
    title: "귀족들의 몰락", year: "15세기 후반",
    text: "오랜 내전으로 대다수의 봉건 귀족들이 전사하여 영지가 주인을 잃었습니다.",
    choices: [
      { text: "몰수된 영지를 모두 국왕의 직할령으로 삼는다.", effects: {pope: 0, noble: -15, king: 15, merchant: 0}, log: "국왕의 권력이 영주들을 완벽히 압도하게 됩니다." },
      { text: "살아남은 귀족들에게 땅을 나누어준다.", effects: {pope: 0, noble: 10, king: -10, merchant: 0}, log: "봉건제의 잔재가 계속 남아 왕권을 위협합니다." }
    ]
  },
  {
    title: "새로운 시대의 개막", year: "근대 초기",
    text: "오랜 내전이 막을 내렸습니다. 왕권은 강해졌고 봉건 영주들은 몰락했습니다. 중세의 질서가 무너진 상황에서 국가를 어떻게 이끌어갈까요?",
    choices: [
      { text: "부유한 상공 시민 계층과 손잡고 국가를 부강하게 만든다.", effects: {pope: 0, noble: 0, king: 10, merchant: 20}, log: "절대 왕정의 기틀이 마련되었습니다." },
      { text: "교황과 화해하여 종교 중심의 옛날로 돌아간다.", effects: {pope: 10, noble: 0, king: 0, merchant: -10}, log: "과거로 회귀하여 국가 발전이 정체됩니다." }
    ]
  }
];

let currentTurn = 0;
let stats = { king: 50, pope: 50, noble: 50, merchant: 50 };

function updateUI() {
  ['king', 'pope', 'noble', 'merchant'].forEach(key => {
    const val = stats[key];
    document.getElementById(`val-${key}`).innerText = val;
    const bar = document.getElementById(`bar-${key}`);
    bar.style.width = `${val}%`;
    
    if (val <= 20) {
      bar.style.backgroundColor = 'var(--color-danger)';
    } else if (val >= 80) {
      bar.style.backgroundColor = 'var(--color-success)';
    } else {
      bar.style.backgroundColor = 'var(--wrks-viz-primary)';
    }
  });
  window.parent.postMessage({ type: 'wrks:viz:resize', height: document.documentElement.scrollHeight }, '*');
}

function loadScenario() {
  document.getElementById('turn-counter').innerText = currentTurn + 1;
  const s = scenarios[currentTurn];
  document.getElementById('scenario-year').innerText = s.year;
  document.getElementById('scenario-title').innerText = s.title;
  document.getElementById('scenario-text').innerText = s.text;
  
  document.getElementById('btn-a').innerText = s.choices[0].text;
  document.getElementById('btn-b').innerText = s.choices[1].text;
  updateUI();
}

function showResultPanel(text) {
  document.getElementById('result-text').innerText = text;
  const resultArea = document.getElementById('result-area');
  resultArea.classList.remove('hidden');
  document.getElementById('game-active-area').style.display = 'none';
}

function hideResultPanel() {
  const resultArea = document.getElementById('result-area');
  resultArea.classList.add('hidden');
}

function checkGameOver(isResultPhase = false, resultMessage = "") {
  // 배드 엔딩: 어떤 스탯이 0 또는 100이 되면 즉시 게임 오버
  for (let key in stats) {
    if (stats[key] === 0 || stats[key] === 100) {
      let reason = "예기치 못한 종말이 찾아왔습니다.";
      if (key === 'king' && stats[key] === 0) reason = "당신은 왕이 될 자격이 없군요. 왕권이 바닥에 떨어져 폐위되고 말았습니다.";
      if (key === 'king' && stats[key] === 100) reason = "갑질 꿈나무시군요! 너무 이른 시기에 독재를 꿈꾸다 귀족들에게 암살당했습니다.";
      if (key === 'noble' && stats[key] === 0) reason = "이제 나라는 누가 지키지? 외적의 침입으로 나라가 멸망했습니다.";
      if (key === 'noble' && stats[key] === 100) reason = "제후들의 힘이 너무 강해져 각자의 왕국을 만들어 당신의 왕국은 산산조각 났답니다.";
      if (key === 'pope' && stats[key] === 0) reason = "엥이 이런 이단 같으니라고! 너는 파문이다!";
      if (key === 'pope' && stats[key] === 100) reason = "이번엔 자네가 감금생활할 때가 왔구만. 교황의 절대적 영향력을 뿌리칠 수 없습니다.";
      if (key === 'merchant' && stats[key] === 0) reason = "국가가 파산합니다.";
      if (key === 'merchant' && stats[key] === 100) reason = "상업 세력이 돈으로 국가를 장악해 혼란이 발생합니다.";

      showEndScreen("패배", reason);
      return true;
    }
  }

  // 클리어 판정: 모든 시나리오(15장)를 무사히 넘겼을 때
  if (currentTurn >= scenarios.length) {
    // 진 엔딩: 왕권 >= 60 && 상업 >= 50
    if (stats.king >= 60 && stats.merchant >= 50) {
      showEndScreen("승리 - 중앙 집권 국가 달성", "축하합니다! 중세의 봉건제는 무너졌습니다. 당신은 상공업자들의 막대한 재정 지원을 바탕으로 상비군을 기르고, 강력한 중앙 집권 국가를 이룩하셨습니다.");
      return true;
    }

    // 노멀 엔딩: 교황권이나 영주 수치가 왕권보다 높을 때
    if (stats.pope > stats.king || stats.noble > stats.king) {
      showEndScreen("중세는 영원하리", "살아남는 데는 성공했지만, 여전히 교황과 귀족들의 눈치를 봐야 합니다. 역사의 흐름은 바뀌고 있지만, 당신의 국가는 아직 중세에 머무릅니다.");
      return true;
    }

    // 그 외: 기본 생존 엔딩
    showEndScreen("생존", "모든 위기를 넘기고 당신은 나라를 지켰습니다. 그러나 완전한 승리라 할 수 없습니다. 다양한 세력과 타협하며 나라를 이어가야 합니다.");
    return true;
  }

  return false;
}

function showEndScreen(title, text) {
  hideResultPanel();
  document.getElementById('game-active-area').style.display = 'none';
  document.getElementById('end-screen-area').style.display = 'block';
  document.getElementById('end-title').innerText = title;
  document.getElementById('end-text').innerText = text;
  updateUI();
}

function nextStage() {
  hideResultPanel();
  currentTurn++;
  if (!checkGameOver()) {
    document.getElementById('game-active-area').style.display = 'block';
    document.getElementById('end-screen-area').style.display = 'none';
    document.getElementById('log-area').innerText = "왕권을 지키기 위해 신중히 선택하세요. 하나의 세력이라도 100 또는 0이 되면 유혈사태가 일어납니다.";
    loadScenario();
  }
}

function makeChoice(choiceIdx) {
  const s = scenarios[currentTurn];
  const effect = s.choices[choiceIdx].effects;
  
  stats.king = Math.max(0, Math.min(100, stats.king + (effect.king || 0)));
  stats.pope = Math.max(0, Math.min(100, stats.pope + (effect.pope || 0)));
  stats.noble = Math.max(0, Math.min(100, stats.noble + (effect.noble || 0)));
  stats.merchant = Math.max(0, Math.min(100, stats.merchant + (effect.merchant || 0)));

  updateUI();
  document.getElementById('log-area').innerText = `[결과] ${s.choices[choiceIdx].log}`;

  const resultMessage = s.choices[choiceIdx].log;
  if (checkGameOver()) {
    return;
  }

  showResultPanel(resultMessage);
}

function initGame() {
  currentTurn = 0;
  stats = { king: 50, pope: 50, noble: 50, merchant: 50 };
  document.getElementById('game-active-area').style.display = 'block';
  document.getElementById('end-screen-area').style.display = 'none';
  hideResultPanel();
  document.getElementById('log-area').innerText = "왕권을 지키기 위해 신중히 선택하세요. 하나의 세력이라도 100 또는 0이 되면 유혈사태가 일어납니다.";
  loadScenario();
}

window.makeChoice = makeChoice;
window.initGame = initGame;

function startGame() {
  const startScreen = document.getElementById('start-screen');
  const gameContainer = document.getElementById('game-container');
  if (startScreen) startScreen.classList.add('hidden');
  if (gameContainer) gameContainer.classList.remove('hidden');
  initGame();
}

function setupEventListeners() {
  const btnStart = document.getElementById('btn-start');
  const btnA = document.getElementById('btn-a');
  const btnB = document.getElementById('btn-b');
  const btnRestart = document.getElementById('btn-restart');
  const btnNext = document.getElementById('btn-next');
  if (btnStart) btnStart.addEventListener('click', startGame);
  if (btnA) btnA.addEventListener('click', () => makeChoice(0));
  if (btnB) btnB.addEventListener('click', () => makeChoice(1));
  if (btnNext) btnNext.addEventListener('click', nextStage);
  if (btnRestart) btnRestart.addEventListener('click', () => { startGame(); });
}

window.onload = () => { setupEventListeners(); };
