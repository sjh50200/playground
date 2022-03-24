function* heedong() {
  const myMsgList = [
    "안녕 나는 희동이야",
    "만나서 반가워",
    "내일 영화 볼래?",
    "시간 안되니?",
    "내일 모레는 어때?",
  ];
  for (const msg of myMsgList) {
    console.log("수지: ", yield msg);
  }
}

const suji = () => {
  const myMsgList = ["", "그래 나는 수지야", "나도 반가워", "..."];
  const gen = heedong();
  for (const msg of myMsgList) {
    console.log("희동: ", gen.next(msg).value);
  }
};

suji();
