/* ===========================
   FITNESS TRACKER - script.js
   =========================== */

// ===== PDF에서 가져온 실제 운동 루틴 데이터 =====
const BARF_ROUTINES = {
  lower: {
    title: '하체 루틴',
    frequency: '주 2-3회',
    options: [
      {
        name: '옵션 A',
        exercises: [
          { name: '이너타이', reps: '15개', sets: '3세트', weight: '-' },
          { name: '아웃타이', reps: '15개', sets: '3세트', weight: '-' },
          { name: '스미스 스쿼트', reps: '12개', sets: '4세트', weight: '-' },
          { name: '글루트 머신', reps: '25개', sets: '3세트', weight: '15kg' }
        ]
      },
      {
        name: '옵션 B',
        exercises: [
          { name: '레그 익스텐션', reps: '15개', sets: '4세트', weight: '-' },
          { name: '브이 스쿼트 머신', reps: '15개', sets: '4세트', weight: '-' },
          { name: '포커스 힙프레스', reps: '15개', sets: '4세트', weight: '-' },
          { name: '글루트 머신', reps: '25개', sets: '4세트', weight: '-' }
        ]
      },
      {
        name: '옵션 C',
        exercises: [
          { name: '레그 컬', reps: '15개', sets: '4세트', weight: '30kg' },
          { name: '브이 스쿼트', reps: '15개', sets: '4세트', weight: '양쪽 10kg' },
          { name: '힙 프레스', reps: '15개', sets: '4세트', weight: '80kg (깔리지 않게)' },
          { name: '와이드 스쿼트(케틀벨)', reps: '20개', sets: '3세트', weight: '12kg' }
        ]
      }
    ]
  },
  upper: {
    title: '상체 루틴 - 등/어깨',
    frequency: '주 3-4회',
    options: [
      {
        name: '옵션 A',
        exercises: [
          { name: '턱걸이', reps: '12개', sets: '3세트', weight: '-' },
          { name: '렛풀다운', reps: '12개', sets: '4세트', weight: '-' },
          { name: '스미스머신 숄더프레스', reps: '12개', sets: '4세트', weight: '-' },
          { name: '시티드로우 머신', reps: '15개', sets: '4세트', weight: '20kg' }
        ]
      },
      {
        name: '옵션 B',
        exercises: [
          { name: '티바로우', reps: '15개', sets: '4세트', weight: '2.5-5kg' },
          { name: '어시스트 풀업', reps: '15개', sets: '4세트', weight: '42kg→36kg' },
          { name: '스미스머신 숄더프레스', reps: '15개', sets: '4세트', weight: '빈바+양쪽1kg씩 증량' },
          { name: '사이드 레터럴 레이즈', reps: '20개', sets: '4세트', weight: '2kg 웜업, 3kg 본운동' }
        ]
      },
      {
        name: '옵션 C (어깨 집중)',
        exercises: [
          { name: '사이드 레터럴 레이즈', reps: '20개', sets: '3세트', weight: '2kg' },
          { name: '스텐딩 원암 숄더프레스', reps: '15개', sets: '1세트', weight: '3kg' },
          { name: '스텐딩 투암 숄더프레스', reps: '12개', sets: '4세트', weight: '3-4kg' },
          { name: '스미스 머신 숄더프레스(등받이 없이)', reps: '12개', sets: '3세트', weight: '-' },
          { name: '덤벨 컬(팔)', reps: '15-20개', sets: '3세트', weight: '3kg' },
          { name: '케이블 로프 푸쉬다운(삼두)', reps: '15-20개', sets: '3세트', weight: '10-15kg' }
        ]
      },
      {
        name: '옵션 D (등 집중)',
        exercises: [
          { name: '하이퍼 익스텐션 로우(언더그립)', reps: '15개', sets: '4세트', weight: '24kg (손바닥 하늘로)' },
          { name: '바벨로우 언더그립', reps: '15개', sets: '2세트', weight: '수축지점 2초 정지' },
          { name: '티바로우', reps: '15개', sets: '4세트', weight: '2.5-5kg (명치 아래로)' },
          { name: '랫풀다운', reps: '15-12개', sets: '4세트', weight: '17kg 웜업, 24kg 본운동' },
          { name: '랫풀다운(클로즈 그립)', reps: '12개', sets: '3세트', weight: '24kg' }
        ]
      },
      {
        name: '옵션 E (어깨+팔)',
        exercises: [
          { name: '사이드 레터럴 레이즈', reps: '15개', sets: '4세트', weight: '3kg' },
          { name: '덤벨 숄더프레스', reps: '12개', sets: '3세트', weight: '-' },
          { name: '스미스머신 숄더프레스(등받이 없이)', reps: '12개', sets: '3세트', weight: '양쪽 2.5kg' },
          { name: '사이드 레터럴 레이즈(한번 더)', reps: '15개', sets: '3세트', weight: '3kg' },
          { name: '덤벨 컬', reps: '15개', sets: '4세트', weight: '3kg 이상' },
          { name: '케이블 푸쉬다운', reps: '15개', sets: '4세트', weight: '12kg' }
        ]
      }
    ]
  },
  abs: {
    title: '복근 운동 (매일) - 넓은 골반 유형',
    exercises: [
      { name: '플러터킥(편도)', reps: '30개', sets: '3세트', weight: '-' },
      { name: '하이플랭크 홀드', reps: '1분', sets: '1세트', weight: '-' },
      { name: '러시안 트위스트(편도)', reps: '30개', sets: '3세트', weight: '-' }
    ]
  }
};

// ===== 2026 러닝 대회 데이터 =====
const RUNNING_EVENTS = [
  {
    name: '서울마라톤 (동아마라톤)',
    date: '2026-03-15',
    location: '서울 광화문',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'http://donga-marathon.co.kr',
    month: 3,
    note: '국내 최대 마라톤 대회'
  },
  {
    name: '경주 벚꽃마라톤',
    date: '2026-04-05',
    location: '경북 경주',
    distances: ['full', 'half', '10k', '5k'],
    distanceLabels: ['풀마라톤', '하프', '10K', '5K'],
    url: 'http://gjmarathon.co.kr',
    month: 4,
    note: '벚꽃 절정기 코스'
  },
  {
    name: '울산마라톤',
    date: '2026-04-19',
    location: '울산 태화강',
    distances: ['full', 'half'],
    distanceLabels: ['풀마라톤', '하프'],
    url: 'https://www.ulsanmarathon.co.kr',
    month: 4,
    note: '태화강변 평탄 코스'
  },
  {
    name: '제주 국제마라톤',
    date: '2026-05-17',
    location: '제주 서귀포',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://www.jejumarathon.or.kr',
    month: 5,
    note: '제주도 자연 속 해안 코스'
  },
  {
    name: '강화 고려산 철쭉 마라톤',
    date: '2026-05-03',
    location: '인천 강화',
    distances: ['half', '10k', '5k'],
    distanceLabels: ['하프', '10K', '5K'],
    url: 'https://www.ganghwamarathon.com',
    month: 5,
    note: '철쭉꽃 만발한 힐링 코스'
  },
  {
    name: '서울 한강마라톤',
    date: '2026-06-07',
    location: '서울 한강',
    distances: ['half', '10k', '5k'],
    distanceLabels: ['하프', '10K', '5K'],
    url: 'https://www.seoulmarathon.or.kr',
    month: 6,
    note: '한강변 야간 러닝 페스티벌'
  },
  {
    name: '인천마라톤',
    date: '2026-09-13',
    location: '인천 송도',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://www.incheonmarathon.kr',
    month: 9,
    note: '가을 시즌 첫 대형 대회'
  },
  {
    name: '춘천마라톤',
    date: '2026-10-18',
    location: '강원 춘천',
    distances: ['full', 'half'],
    distanceLabels: ['풀마라톤', '하프'],
    url: 'https://chuncheonmarathon.co.kr',
    month: 10,
    note: '가을 단풍 속 국내 최고 코스'
  },
  {
    name: '조선일보 춘천마라톤',
    date: '2026-10-25',
    location: '강원 춘천',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://chosunmarathon.co.kr',
    month: 10,
    note: '45년 전통 가을 대표 대회'
  },
  {
    name: '대구마라톤',
    date: '2026-10-11',
    location: '대구 두류공원',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://www.daegumarathon.co.kr',
    month: 10,
    note: '대구 도심 순환 코스'
  },
  {
    name: 'JTBC 서울마라톤',
    date: '2026-11-01',
    location: '서울 잠실',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://www.jtbcmarathon.com',
    month: 11,
    note: '한강+올림픽공원 코스'
  },
  {
    name: '광주마라톤',
    date: '2026-11-15',
    location: '광주 월드컵경기장',
    distances: ['full', 'half', '10k', '5k'],
    distanceLabels: ['풀마라톤', '하프', '10K', '5K'],
    url: 'https://www.gjmarathon.com',
    month: 11,
    note: '광주 도심 평탄 코스'
  },
  {
    name: '부산마라톤',
    date: '2026-11-22',
    location: '부산 해운대',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://www.busanmarathon.co.kr',
    month: 11,
    note: '해운대~광안리 바다뷰 코스'
  },
  {
    name: '중앙서울마라톤',
    date: '2026-11-08',
    location: '서울 여의도',
    distances: ['full', 'half', '10k', '5k'],
    distanceLabels: ['풀마라톤', '하프', '10K', '5K'],
    url: 'https://joongang-marathon.com',
    month: 11,
    note: '여의도 한강공원 출발'
  },
  {
    name: '제주마라톤 (겨울)',
    date: '2026-12-13',
    location: '제주시',
    distances: ['full', 'half', '10k'],
    distanceLabels: ['풀마라톤', '하프', '10K'],
    url: 'https://www.jejumarathon.or.kr',
    month: 12,
    note: '따뜻한 제주 겨울 마라톤'
  }
];

// ===== 동기부여 멘트 =====
const MOTIVATION_QUOTES = [
  "지금 일어나지 않으면 평생 후회할 사람이 되는 거야. 딱 운동화 끈만 묶어.",
  "운동하기 싫은 날이 가장 운동해야 하는 날이야. 그게 진짜 실력이 되는 순간.",
  "오늘 쉬면 내일 더 쉬고 싶어진다. 딱 10분만 시작해봐. 분명히 더 하게 될 거야.",
  "너의 목표가 네 기분보다 훨씬 중요해. 감정에 지지 마. 일어나.",
  "4주 후의 나는 오늘의 내가 만드는 거야. 지금 이 순간이 전부야.",
  "세상에 후회하지 않는 운동은 있어도 후회하는 운동은 없어. 무조건 해.",
  "컨디션 핑계 대는 사람은 평생 컨디션이 안 좋아. 몸이 힘들수록 움직여야 해.",
  "지금 하기 싫은 걸 하는 사람이 나중에 하고 싶은 걸 할 수 있어.",
  "포기하면 아무것도 안 변해. 힘들어도 이 순간을 버텨.",
  "남들이 쉴 때 나는 한 발짝 더 나아가는 거야. 그게 차이를 만들어.",
  "몸이 변하는 건 어제의 내가 오늘 움직인 결과야. 내일의 나를 위해 지금 해.",
  "딱 1세트만 해. 진짜 1세트만. 거기서 멈추면 돼. 근데 아마 못 멈출 걸?"
];

// ===== 컨디션별 운동 조언 =====
const CONDITION_ADVICE = {
  1: "오늘은 몸이 정말 힘든 날이에요. 격한 운동 대신 10-15분 가벼운 스트레칭이나 산책을 추천해요. 충분한 수면과 수분 보충이 최우선이에요.",
  2: "컨디션이 좋지 않네요. 오늘은 강도를 평소의 60%로 낮추세요. 유산소 대신 가벼운 근력운동(세트 수 줄이기)으로 몸을 깨워보세요.",
  3: "보통 컨디션이에요. 평소 루틴대로 진행하되, 무리하지 말고 몸 상태를 체크하면서 운동하세요. 충분한 워밍업 잊지 마세요!",
  4: "컨디션 좋은데요! 오늘은 목표 중량보다 조금 더 도전해보세요. 강도를 5-10% 올려도 괜찮아요. 최대한 집중해서 진행해요!",
  5: "오늘은 최고의 날이에요! 새로운 기록에 도전해보세요. 평소보다 세트 수를 1-2세트 추가하거나 중량을 올려봐요. 이런 날을 최대한 활용하세요!"
};

// ===== 증상별 추가 조언 =====
const SYMPTOM_ADVICE = {
  '근육통': '근육통이 있을 때는 아픈 부위 대신 다른 부위를 운동하세요. 가벼운 스트레칭과 폼롤러 마사지가 회복에 도움돼요.',
  '관절통증': '관절 통증이 있다면 오늘은 무조건 쉬세요! 부상을 무시하고 운동하면 더 큰 문제가 생겨요.',
  '수면부족': '수면 부족은 근육 회복을 방해해요. 오늘은 운동 강도를 낮추고 일찍 자는 것을 목표로 해요.',
  '감기기운': '감기 기운이 있을 때는 땀 흘리는 운동을 피하세요. 집에서 가벼운 스트레칭 정도만 해요.',
  '두통': '두통이 있다면 고강도 운동은 금물이에요. 물을 충분히 마시고 상태를 보며 결정하세요.',
  '피로': '피로가 심하면 운동 전 5-10분 낮잠이 효과적이에요. 카페인 섭취 후 20-30분 뒤 운동도 좋아요.',
  '스트레스': '스트레스에는 오히려 운동이 최고의 해소법! 20-30분 유산소로 엔도르핀을 분출해요.',
  '의욕저하': '의욕이 없을 때는 좋아하는 음악을 틀고 옷만 갈아입어봐요. 시작이 반이에요!'
};

// ===== 칼로리 계산 =====
function calculateBMR(gender, weight, height, age) {
  if (gender === 'female') {
    return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  } else {
    return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  }
}

function calculateTDEE(bmr, strengthDays, cardioDays) {
  const totalDays = strengthDays + cardioDays;
  let activityFactor = 1.2;
  if (totalDays <= 2) activityFactor = 1.375;
  else if (totalDays <= 4) activityFactor = 1.55;
  else if (totalDays <= 6) activityFactor = 1.725;
  else activityFactor = 1.9;
  return Math.round(bmr * activityFactor);
}

function calculateTargetCalories(tdee, currentWeight, targetWeight, weeks = 4) {
  const weightDiff = currentWeight - targetWeight;
  if (Math.abs(weightDiff) < 0.5) return tdee; // 유지
  if (weightDiff > 0) {
    // 감량: 주당 0.3-0.5kg 감량 기준
    const weeklyDeficit = Math.min((weightDiff / weeks) * 7700, 3500);
    const dailyDeficit = Math.round(weeklyDeficit / 7);
    return Math.max(tdee - dailyDeficit, 1200);
  } else {
    // 증량
    return tdee + 300;
  }
}

// ===== 주간 루틴 생성 =====
function generateWeeklyRoutine(profile, goals) {
  const { gender, bodyType } = profile;
  const { strengthDays, cardioDays, strengthMin, cardioMin } = goals;
  const totalDays = 7;
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const routine = [];

  // PDF 루틴 사용 여부 (여성 + 바프 루틴 기반)
  const useBarfRoutine = true; // PDF 루틴을 기본 베이스로 사용

  // 운동 배치 계획
  let plan = Array(7).fill('rest');
  let sCount = 0, cCount = 0;

  // 근력 배치 (간격 두기)
  const sSlots = distributeEvenly(7, strengthDays);
  const cSlots = distributeEvenly(7, cardioDays, sSlots);

  sSlots.forEach(i => { plan[i] = 'strength'; });
  cSlots.forEach(i => {
    if (plan[i] === 'rest') plan[i] = 'cardio';
    else plan[i] = 'both';
  });

  for (let i = 0; i < 7; i++) {
    const dayType = plan[i];
    const dayData = { day: days[i], type: dayType, content: [] };

    if (dayType === 'strength' || dayType === 'both') {
      // 하체/상체 번갈아 배치
      sCount++;
      if (sCount % 2 === 1) {
        // 하체의 날
        const optIdx = (Math.floor(sCount / 2)) % BARF_ROUTINES.lower.options.length;
        dayData.content.push({
          category: '하체 운동',
          option: BARF_ROUTINES.lower.options[optIdx],
          duration: strengthMin + '분',
          abs: BARF_ROUTINES.abs
        });
      } else {
        // 상체의 날
        const optIdx = (Math.floor(sCount / 2) - 1) % BARF_ROUTINES.upper.options.length;
        dayData.content.push({
          category: '상체 운동 (등/어깨)',
          option: BARF_ROUTINES.upper.options[optIdx],
          duration: strengthMin + '분',
          abs: BARF_ROUTINES.abs
        });
      }
    }

    if (dayType === 'cardio' || dayType === 'both') {
      cCount++;
      dayData.content.push({
        category: '유산소 운동',
        exercises: getCardioRoutine(gender, cardioMin, cCount)
      });
    }

    routine.push(dayData);
  }

  return routine;
}

function distributeEvenly(total, count, exclude = []) {
  const slots = [];
  const gap = Math.floor(total / count);
  let pos = Math.floor(gap / 2);
  for (let i = 0; i < count; i++) {
    while (exclude.includes(pos) && pos < total) pos++;
    if (pos < total) slots.push(pos);
    pos += gap;
  }
  return slots.slice(0, count);
}

function getCardioRoutine(gender, minutes, count) {
  const routines = [
    {
      name: '인터벌 러닝',
      detail: `워밍업 5분 → 빠르게 1분/천천히 2분 반복 → 쿨다운 5분 (총 ${minutes}분)`,
      tip: '속도: 빠를 때 7-8km/h, 느릴 때 5-6km/h'
    },
    {
      name: '스테디 러닝',
      detail: `일정 속도로 ${minutes}분 지속 러닝`,
      tip: '속도: 6-7km/h, 대화 가능한 페이스 유지'
    },
    {
      name: '실내 사이클',
      detail: `워밍업 5분 → 중강도 사이클 ${minutes - 10}분 → 쿨다운 5분`,
      tip: '저항은 중간 정도, 분당 60-80rpm 유지'
    },
    {
      name: '파워 워킹',
      detail: `빠른 걷기 ${minutes}분 (경사도 3-5% 트레드밀 또는 야외)`,
      tip: '팔 흔들기 적극적으로, 보폭 크게'
    }
  ];
  return routines[(count - 1) % routines.length];
}

// ===== 식단 플랜 생성 =====
function generateDietPlan(profile, goals, targetCal) {
  const { gender, bodyType } = profile;
  const proteinTarget = Math.round(profile.weight * 1.8); // 체중 1kg당 1.8g

  const mealPlans = {
    breakfast: {
      title: '아침 (기상 후 1시간 이내)',
      cal: Math.round(targetCal * 0.25),
      items: gender === 'female'
        ? ['닭가슴살 또는 계란 2개', '고구마 1개 (100g)', '채소 샐러드 (무드레싱)', '아메리카노 또는 물']
        : ['계란 3개 (스크램블 또는 삶은)', '오트밀 또는 현미밥 1/2공기', '채소 샐러드', '단백질 쉐이크 (선택)'],
      tip: '공복 상태에서 고단백 아침식사로 근육 분해 방지'
    },
    lunch: {
      title: '점심',
      cal: Math.round(targetCal * 0.35),
      items: gender === 'female'
        ? ['현미밥 2/3공기', '닭가슴살 구이 또는 생선구이 100g', '나물 반찬 2-3가지', '국 (저염)']
        : ['현미밥 1공기', '소고기 또는 닭가슴살 150g', '삶은 채소', '두부 또는 콩류'],
      tip: '탄수화물:단백질:지방 = 4:4:2 비율 목표'
    },
    preWorkout: {
      title: '운동 전 간식 (운동 1-1.5시간 전)',
      cal: Math.round(targetCal * 0.1),
      items: ['바나나 1개 또는 고구마 소 1개', '아메리카노 (운동 30분 전)'],
      tip: '빠른 에너지 공급을 위한 탄수화물 중심 간식'
    },
    dinner: {
      title: '저녁 (운동 후 30-60분 이내)',
      cal: Math.round(targetCal * 0.3),
      items: gender === 'female'
        ? ['현미밥 1/2공기 또는 생략', '닭가슴살 또는 두부 100g', '브로콜리, 아스파라거스 등 채소 듬뿍', '계란 1개 추가']
        : ['현미밥 2/3공기', '소고기 or 닭가슴살 150-200g', '브로콜리 + 아스파라거스', '단백질 쉐이크 (선택)'],
      tip: '운동 후 30분은 골든타임! 단백질 흡수율이 가장 높아요'
    },
    avoid: {
      title: '피해야 할 음식',
      items: ['밀가루 음식 (빵, 파스타, 라면)', '튀긴 음식', '과자, 초콜릿, 사탕', '탄산음료, 주스', '야식'],
      tip: '완전 금지보다 주 1-2회 치팅데이로 스트레스 관리'
    }
  };

  return { mealPlans, proteinTarget };
}

// ===== LocalStorage 유틸 =====
function saveData(key, data) {
  localStorage.setItem('ft_' + key, JSON.stringify(data));
}
function loadData(key) {
  const d = localStorage.getItem('ft_' + key);
  return d ? JSON.parse(d) : null;
}

// ===== 날짜 유틸 =====
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function formatDate(str) {
  const d = new Date(str);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${['일','월','화','수','목','금','토'][d.getDay()]})`;
}
function getDDay(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: '종료', cls: 'past' };
  if (diff === 0) return { label: 'D-DAY', cls: 'soon' };
  if (diff <= 30) return { label: `D-${diff}`, cls: 'soon' };
  return { label: `D-${diff}`, cls: 'future' };
}

// ===== Toast =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== 탭 전환 =====
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tab).classList.add('active');
      if (tab === 'plan') renderPlan();
      if (tab === 'running') renderRunningEvents('all');
      if (tab === 'progress') renderProgress();
      if (tab === 'today') renderTodayRecords();
    });
  });

  // 서브탭
  document.querySelectorAll('.sub-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const subtab = btn.dataset.subtab;
      document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.sub-tab-content').forEach(s => s.style.display = 'none');
      btn.classList.add('active');
      document.getElementById('subtab-' + subtab).style.display = 'block';
    });
  });
}

// ===== 클릭 카드 선택 =====
function initChoiceCards() {
  document.querySelectorAll('.choice-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;
      document.querySelectorAll(`[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

// ===== 주/시간 버튼 선택 =====
function initPickers() {
  ['strength-days', 'strength-min', 'cardio-days', 'cardio-min'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    container.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ===== 목표 설정 저장 =====
function initGoalSave() {
  // 목표 입력값 변경 시 미리보기
  ['inp-weight', 'inp-target-weight', 'inp-bodyfat', 'inp-target-bodyfat'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateGoalPreview);
  });

  document.getElementById('btn-save-goal').addEventListener('click', () => {
    const gender = document.querySelector('[data-group="gender"].active')?.dataset.value;
    const bodyType = document.querySelector('[data-group="bodyType"].active')?.dataset.value;
    const age = parseInt(document.getElementById('inp-age').value);
    const height = parseFloat(document.getElementById('inp-height').value);
    const weight = parseFloat(document.getElementById('inp-weight').value);
    const bodyfat = parseFloat(document.getElementById('inp-bodyfat').value);
    const targetWeight = parseFloat(document.getElementById('inp-target-weight').value);
    const targetBodyfat = parseFloat(document.getElementById('inp-target-bodyfat').value);
    const startDate = document.getElementById('inp-start-date').value;
    const strengthDays = parseInt(document.querySelector('#strength-days .active')?.dataset.val || 3);
    const strengthMin = parseInt(document.querySelector('#strength-min .active')?.dataset.val || 60);
    const cardioDays = parseInt(document.querySelector('#cardio-days .active')?.dataset.val || 3);
    const cardioMin = parseInt(document.querySelector('#cardio-min .active')?.dataset.val || 30);

    if (!gender) { showToast('성별을 선택해주세요!'); return; }
    if (!bodyType) { showToast('체질을 선택해주세요!'); return; }
    if (!age || !height || !weight) { showToast('나이, 키, 체중을 입력해주세요!'); return; }
    if (!targetWeight) { showToast('목표 체중을 입력해주세요!'); return; }
    if (!startDate) { showToast('시작일을 선택해주세요!'); return; }

    const profile = { gender, bodyType, age, height, weight, bodyfat };
    const goals = { targetWeight, targetBodyfat, startDate, strengthDays, strengthMin, cardioDays, cardioMin };

    saveData('profile', profile);
    saveData('goals', goals);

    // 플랜 생성
    const routine = generateWeeklyRoutine(profile, goals);
    const bmr = calculateBMR(gender, weight, height, age);
    const tdee = calculateTDEE(bmr, strengthDays, cardioDays);
    const targetCal = calculateTargetCalories(tdee, weight, targetWeight);
    const { mealPlans, proteinTarget } = generateDietPlan(profile, goals, targetCal);

    saveData('plan', { routine, bmr, tdee, targetCal, proteinTarget, mealPlans });

    showToast('✨ 맞춤 플랜이 생성됐어요!');
    updateHeaderCountdown();

    // 플랜 탭으로 이동
    setTimeout(() => {
      document.querySelector('[data-tab="plan"]').click();
    }, 500);
  });
}

function updateGoalPreview() {
  const w = parseFloat(document.getElementById('inp-weight').value);
  const tw = parseFloat(document.getElementById('inp-target-weight').value);
  const bf = parseFloat(document.getElementById('inp-bodyfat').value);
  const tbf = parseFloat(document.getElementById('inp-target-bodyfat').value);
  const preview = document.getElementById('goal-preview');

  if (!w || !tw) { preview.style.display = 'none'; return; }
  const diff = w - tw;
  const direction = diff > 0 ? '감량' : diff < 0 ? '증량' : '유지';
  const weeklyGoal = Math.abs(diff / 4).toFixed(1);

  let html = `🎯 4주 목표: <strong>${direction} ${Math.abs(diff).toFixed(1)}kg</strong> (주당 약 ${weeklyGoal}kg)`;
  if (bf && tbf) {
    html += `<br>📊 체지방률: ${bf}% → ${tbf}% (${(bf - tbf).toFixed(1)}% ${bf > tbf ? '감소' : '증가'} 목표)`;
  }
  preview.innerHTML = html;
  preview.style.display = 'block';
}

// ===== 플랜 탭 렌더 =====
function renderPlan() {
  const plan = loadData('plan');
  const planEmpty = document.getElementById('plan-empty');
  const planContent = document.getElementById('plan-content');

  if (!plan) {
    planEmpty.style.display = 'block';
    planContent.style.display = 'none';
    return;
  }

  planEmpty.style.display = 'none';
  planContent.style.display = 'block';

  document.getElementById('plan-bmr').textContent = plan.bmr?.toLocaleString() || '-';
  document.getElementById('plan-target-cal').textContent = plan.targetCal?.toLocaleString() || '-';
  document.getElementById('plan-protein').textContent = plan.proteinTarget || '-';

  renderWeeklyRoutine(plan.routine);
  renderDietPlan(plan.mealPlans);
}

function renderWeeklyRoutine(routine) {
  const container = document.getElementById('weekly-routine');
  if (!routine) { container.innerHTML = ''; return; }

  container.innerHTML = routine.map(day => {
    if (day.type === 'rest') {
      return `
        <div class="routine-day">
          <div class="routine-day-header">
            <span>${day.day}요일</span>
            <span>🌿 휴식</span>
          </div>
          <div class="routine-rest-day">충분한 휴식으로 근육 회복 & 성장 ✨ + 복근 운동은 매일!</div>
        </div>`;
    }

    const contentHtml = day.content.map(c => {
      if (c.category === '유산소 운동') {
        return `
          <div class="routine-option">
            <div class="routine-option-title">🏃 ${c.category} (${c.exercises.duration || ''})</div>
            <div style="font-size:13px;"><strong>${c.exercises.name}</strong></div>
            <div style="font-size:12px;color:#6b7280;margin-top:4px;">${c.exercises.detail}</div>
            <div style="font-size:11px;color:#9ca3af;margin-top:3px;">💡 ${c.exercises.tip}</div>
          </div>`;
      }

      const option = c.option;
      const absHtml = c.abs ? `
        <div class="routine-option" style="border-left-color:#10b981;">
          <div class="routine-option-title" style="color:#059669;">💪 ${c.abs.title}</div>
          <table class="routine-exercise-table">
            <thead><tr><th>운동</th><th>반복×세트</th></tr></thead>
            <tbody>
              ${c.abs.exercises.map(e => `<tr><td>${e.name}</td><td>${e.reps} × ${e.sets}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>` : '';

      return `
        <div class="routine-option">
          <div class="routine-option-title">💪 ${c.category} · ${option.name} (${c.duration})</div>
          <table class="routine-exercise-table">
            <thead><tr><th>운동</th><th>반복×세트</th><th>중량/메모</th></tr></thead>
            <tbody>
              ${option.exercises.map(e => `<tr><td>${e.name}</td><td>${e.reps} × ${e.sets}</td><td style="color:#6b7280">${e.weight}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${absHtml}`;
    }).join('');

    const typeLabel = day.type === 'both' ? '근력 + 유산소' : day.type === 'strength' ? '근력 운동' : '유산소 운동';
    return `
      <div class="routine-day">
        <div class="routine-day-header">
          <span>${day.day}요일</span>
          <span>${typeLabel}</span>
        </div>
        <div class="routine-day-body">${contentHtml}</div>
      </div>`;
  }).join('');
}

function renderDietPlan(mealPlans) {
  const container = document.getElementById('diet-plan');
  if (!mealPlans) { container.innerHTML = ''; return; }

  const colors = {
    breakfast: '#7c3aed',
    lunch: '#2563eb',
    preWorkout: '#d97706',
    dinner: '#059669',
    avoid: '#dc2626'
  };

  container.innerHTML = Object.entries(mealPlans).map(([key, meal]) => `
    <div class="diet-meal" style="border-left: 4px solid ${colors[key] || '#7c3aed'}">
      <div class="diet-meal-title" style="color:${colors[key]}">${meal.title}</div>
      <div class="diet-meal-items">${meal.items.map(i => `• ${i}`).join('<br>')}</div>
      ${meal.cal ? `<div class="diet-meal-cal">약 ${meal.cal} kcal</div>` : ''}
      ${meal.tip ? `<div style="font-size:11px;color:#9ca3af;margin-top:4px;">💡 ${meal.tip}</div>` : ''}
    </div>`).join('');
}

// ===== 오늘 기록 탭 =====
function initTodayTab() {
  // 날짜 표시
  document.getElementById('today-date-label').textContent = formatDate(todayStr());

  // 컨디션 슬라이더
  const slider = document.getElementById('condition-slider');
  slider.addEventListener('input', updateConditionDisplay);
  updateConditionDisplay();

  // 컨디션 저장
  document.getElementById('btn-save-condition').addEventListener('click', saveCondition);

  // 운동 추가
  document.getElementById('btn-add-workout').addEventListener('click', () => {
    const form = document.getElementById('workout-form-today');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  document.getElementById('btn-cancel-workout').addEventListener('click', () => {
    document.getElementById('workout-form-today').style.display = 'none';
  });
  document.getElementById('btn-save-workout').addEventListener('click', saveWorkout);

  // 식사 추가
  document.getElementById('btn-add-meal').addEventListener('click', () => {
    const form = document.getElementById('meal-form-today');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  document.getElementById('btn-cancel-meal').addEventListener('click', () => {
    document.getElementById('meal-form-today').style.display = 'none';
  });
  document.getElementById('btn-save-meal').addEventListener('click', saveMeal);

  // 메모 저장
  document.getElementById('btn-save-memo').addEventListener('click', () => {
    const memo = document.getElementById('today-memo').value;
    const log = getTodayLog();
    log.memo = memo;
    saveTodayLog(log);
    showToast('메모가 저장됐어요!');
  });
}

function updateConditionDisplay() {
  const val = parseInt(document.getElementById('condition-slider').value);
  const display = document.getElementById('condition-display');
  const motivBox = document.getElementById('motivation-box');
  const adviceBox = document.getElementById('advice-box');

  const labels = ['', '😫 최악이에요', '😕 별로에요', '😐 보통이에요', '😊 좋아요', '🔥 최고예요!'];
  const colors = ['', '#fee2e2', '#fef3c7', '#f3f4f6', '#d1fae5', '#ede9fe'];
  const textColors = ['', '#991b1b', '#92400e', '#374151', '#065f46', '#5b21b6'];

  display.textContent = labels[val];
  display.style.background = colors[val];
  display.style.color = textColors[val];

  // 동기부여 멘트 (컨디션 1-2)
  if (val <= 2) {
    const idx = Math.floor(Math.random() * MOTIVATION_QUOTES.length);
    motivBox.textContent = MOTIVATION_QUOTES[idx];
    motivBox.style.display = 'block';
  } else {
    motivBox.style.display = 'none';
  }

  // 운동 조언
  adviceBox.textContent = CONDITION_ADVICE[val];

  // 증상 체크에 따른 추가 조언
  updateSymptomAdvice(val);
}

function updateSymptomAdvice(conditionVal) {
  const adviceBox = document.getElementById('advice-box');
  const checked = Array.from(document.querySelectorAll('.symptom-check input:checked')).map(el => el.value);

  let advice = CONDITION_ADVICE[conditionVal];
  if (checked.length > 0) {
    const extra = checked.map(s => SYMPTOM_ADVICE[s]).filter(Boolean);
    if (extra.length > 0) {
      advice += '\n\n⚠️ 오늘 특이사항:\n' + extra.join('\n');
    }
  }
  adviceBox.style.whiteSpace = 'pre-line';
  adviceBox.textContent = advice;
}

function getTodayLog() {
  const all = loadData('dailyLogs') || {};
  return all[todayStr()] || { workouts: [], meals: [], condition: 3, symptoms: [], memo: '' };
}

function saveTodayLog(log) {
  const all = loadData('dailyLogs') || {};
  all[todayStr()] = log;
  saveData('dailyLogs', all);
}

function saveCondition() {
  const val = parseInt(document.getElementById('condition-slider').value);
  const symptoms = Array.from(document.querySelectorAll('.symptom-check input:checked')).map(el => el.value);
  const log = getTodayLog();
  log.condition = val;
  log.symptoms = symptoms;
  saveTodayLog(log);
  showToast('컨디션이 저장됐어요!');
}

function saveWorkout() {
  const type = document.getElementById('wt-type').value;
  const duration = parseInt(document.getElementById('wt-duration').value);
  const calories = parseInt(document.getElementById('wt-calories').value);
  const notes = document.getElementById('wt-notes').value;

  if (!type || !duration) { showToast('운동 종류와 시간을 입력해주세요!'); return; }

  const log = getTodayLog();
  log.workouts.push({ id: Date.now(), type, duration, calories: calories || 0, notes, time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) });
  saveTodayLog(log);

  document.getElementById('wt-type').value = '';
  document.getElementById('wt-duration').value = '';
  document.getElementById('wt-calories').value = '';
  document.getElementById('wt-notes').value = '';
  document.getElementById('workout-form-today').style.display = 'none';

  renderTodayRecords();
  showToast('운동이 기록됐어요! 💪');
}

function saveMeal() {
  const type = document.getElementById('ml-type').value;
  const name = document.getElementById('ml-name').value;
  const calories = parseInt(document.getElementById('ml-calories').value);
  const notes = document.getElementById('ml-notes').value;

  if (!type || !name || !calories) { showToast('식사 종류, 음식명, 칼로리를 입력해주세요!'); return; }

  const log = getTodayLog();
  log.meals.push({ id: Date.now(), type, name, calories, notes, time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) });
  saveTodayLog(log);

  document.getElementById('ml-type').value = '';
  document.getElementById('ml-name').value = '';
  document.getElementById('ml-calories').value = '';
  document.getElementById('ml-notes').value = '';
  document.getElementById('meal-form-today').style.display = 'none';

  renderTodayRecords();
  showToast('식사가 기록됐어요! 🍽️');
}

function renderTodayRecords() {
  const log = getTodayLog();

  // 컨디션 슬라이더 복원
  if (log.condition) {
    document.getElementById('condition-slider').value = log.condition;
    updateConditionDisplay();
  }
  // 증상 복원
  document.querySelectorAll('.symptom-check input').forEach(el => {
    el.checked = log.symptoms?.includes(el.value);
  });
  // 메모 복원
  if (log.memo) document.getElementById('today-memo').value = log.memo;

  // 운동 목록
  const workoutList = document.getElementById('workout-list-today');
  if (log.workouts.length === 0) {
    workoutList.innerHTML = '<div style="color:#9ca3af;font-size:13px;padding:10px 0;">아직 운동 기록이 없어요</div>';
  } else {
    workoutList.innerHTML = log.workouts.map(w => `
      <div class="record-item">
        <div class="record-item-info">
          <div class="record-item-type">${w.type}</div>
          <div class="record-item-detail">${w.duration}분${w.calories ? ` · ${w.calories}kcal` : ''} · ${w.time}</div>
          ${w.notes ? `<div class="record-item-note">${w.notes}</div>` : ''}
        </div>
        <button class="btn-delete" onclick="deleteWorkout(${w.id})"><i class="fas fa-trash"></i></button>
      </div>`).join('');
  }

  // 식사 목록
  const mealList = document.getElementById('meal-list-today');
  const totalCal = log.meals.reduce((s, m) => s + (m.calories || 0), 0);
  const burnedCal = log.workouts.reduce((s, w) => s + (w.calories || 0), 0);
  const plan = loadData('plan');
  const targetCal = plan?.targetCal || 0;

  if (log.meals.length === 0) {
    mealList.innerHTML = '<div style="color:#9ca3af;font-size:13px;padding:10px 0;">아직 식사 기록이 없어요</div>';
  } else {
    mealList.innerHTML = log.meals.map(m => `
      <div class="record-item">
        <div class="record-item-info">
          <div class="record-item-type">${m.type} · ${m.name}</div>
          <div class="record-item-detail">${m.calories}kcal · ${m.time}</div>
          ${m.notes ? `<div class="record-item-note">${m.notes}</div>` : ''}
        </div>
        <button class="btn-delete" onclick="deleteMeal(${m.id})"><i class="fas fa-trash"></i></button>
      </div>`).join('');
  }

  // 칼로리 요약
  const summary = document.getElementById('calorie-today-summary');
  if (log.meals.length > 0 || log.workouts.length > 0) {
    const net = totalCal - burnedCal;
    const remaining = targetCal ? targetCal - totalCal : null;
    summary.innerHTML = `
      <div class="cal-today-item"><div class="cal-today-val">${totalCal.toLocaleString()}</div><div class="cal-today-label">섭취 kcal</div></div>
      <div class="cal-today-item"><div class="cal-today-val" style="color:#f97316">${burnedCal.toLocaleString()}</div><div class="cal-today-label">소모 kcal</div></div>
      <div class="cal-today-item"><div class="cal-today-val" style="color:#7c3aed">${net.toLocaleString()}</div><div class="cal-today-label">순 kcal</div></div>
      ${remaining !== null ? `<div class="cal-today-item"><div class="cal-today-val" style="color:${remaining >= 0 ? '#059669' : '#dc2626'}">${Math.abs(remaining).toLocaleString()}</div><div class="cal-today-label">${remaining >= 0 ? '목표 여유' : '목표 초과'}</div></div>` : ''}
    `;
  } else {
    summary.innerHTML = '';
  }
}

window.deleteWorkout = function(id) {
  const log = getTodayLog();
  log.workouts = log.workouts.filter(w => w.id !== id);
  saveTodayLog(log);
  renderTodayRecords();
  showToast('운동 기록이 삭제됐어요');
};

window.deleteMeal = function(id) {
  const log = getTodayLog();
  log.meals = log.meals.filter(m => m.id !== id);
  saveTodayLog(log);
  renderTodayRecords();
  showToast('식사 기록이 삭제됐어요');
};

// 증상 변경 시 조언 업데이트
function initSymptomListeners() {
  document.querySelectorAll('.symptom-check input').forEach(el => {
    el.addEventListener('change', () => {
      const val = parseInt(document.getElementById('condition-slider').value);
      updateSymptomAdvice(val);
    });
  });
}

// ===== 러닝 대회 탭 =====
function renderRunningEvents(monthFilter) {
  const list = document.getElementById('running-events-list');
  const events = monthFilter === 'all'
    ? RUNNING_EVENTS
    : RUNNING_EVENTS.filter(e => e.month === parseInt(monthFilter));

  if (events.length === 0) {
    list.innerHTML = '<div class="empty-state"><i class="fas fa-calendar-xmark"></i><p>해당 월에 등록된 대회가 없어요</p></div>';
    return;
  }

  // D-DAY 계산 후 정렬
  const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  list.innerHTML = sorted.map(e => {
    const dday = getDDay(e.date);
    const distBadges = e.distances.map((d, i) => {
      const cls = d === 'full' ? 'full' : d === 'half' ? 'half' : d === '10k' ? 'ten' : 'five';
      return `<span class="distance-badge ${cls}">${e.distanceLabels[i]}</span>`;
    }).join('');

    const dateObj = new Date(e.date);
    const dateLabel = `${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;

    return `
      <a class="event-card" href="${e.url}" target="_blank" rel="noopener noreferrer">
        <div class="event-card-header">
          <div class="event-name">${e.name}</div>
          <div class="event-dday ${dday.cls}">${dday.label}</div>
        </div>
        <div class="event-meta">
          <span><i class="fas fa-calendar"></i> ${dateLabel}</span>
          <span><i class="fas fa-location-dot"></i> ${e.location}</span>
        </div>
        <div class="event-distance">${distBadges}</div>
        ${e.note ? `<div style="font-size:11px;color:#9ca3af;margin-top:6px;">💡 ${e.note}</div>` : ''}
      </a>`;
  }).join('');
}

function initRunningFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRunningEvents(btn.dataset.month);
    });
  });
}

// ===== 진행현황 탭 =====
function renderProgress() {
  renderFourWeekProgress();
  renderGoals();
  renderHistory();
}

function renderFourWeekProgress() {
  const goals = loadData('goals');
  const container = document.getElementById('four-week-progress');

  if (!goals) {
    container.innerHTML = '<div class="empty-state">목표설정 탭에서 설정 후 확인하세요.</div>';
    return;
  }

  const start = new Date(goals.startDate);
  const today = new Date();
  const elapsed = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const currentWeek = Math.min(Math.ceil(elapsed / 7), 4);

  const weeks = [1, 2, 3, 4];
  const weekBadges = weeks.map(w => {
    const cls = w < currentWeek ? 'done' : w === currentWeek ? 'current' : '';
    const icon = w < currentWeek ? '✅' : w === currentWeek ? '🔥' : '⏳';
    return `<div class="week-badge ${cls}"><div class="week-num">${icon}</div>${w}주차${w === currentWeek ? '<br><small>진행 중</small>' : ''}</div>`;
  }).join('');

  const progressPct = Math.min(Math.round((elapsed / 28) * 100), 100);

  container.innerHTML = `
    <div class="week-progress-grid">${weekBadges}</div>
    <div style="background:#e5e7eb;border-radius:8px;height:10px;margin:12px 0;">
      <div style="background:linear-gradient(90deg,#7c3aed,#ec4899);height:100%;border-radius:8px;width:${progressPct}%;transition:width 0.5s;"></div>
    </div>
    <div class="progress-info">
      📅 시작일: <strong>${formatDate(goals.startDate)}</strong><br>
      ⏰ 진행: <strong>${Math.max(elapsed, 0)}일 경과 / 28일</strong> (${progressPct}%)<br>
      ⚖️ 목표: <strong>${goals.targetWeight}kg</strong> (현재 ${loadData('profile')?.weight || '-'}kg)<br>
      📊 목표 체지방: <strong>${goals.targetBodyfat || '-'}%</strong>
    </div>`;
}

// ===== 목표 (한달/주간/하루) =====
function initGoalManagement() {
  // 한달
  document.getElementById('btn-add-monthly').addEventListener('click', () => toggleForm('monthly-form'));
  document.getElementById('btn-cancel-monthly').addEventListener('click', () => toggleForm('monthly-form', false));
  document.getElementById('btn-save-monthly').addEventListener('click', () => saveGoalItem('monthly'));

  // 주간
  document.getElementById('btn-add-weekly').addEventListener('click', () => toggleForm('weekly-form'));
  document.getElementById('btn-cancel-weekly').addEventListener('click', () => toggleForm('weekly-form', false));
  document.getElementById('btn-save-weekly').addEventListener('click', () => saveGoalItem('weekly'));

  // 하루
  document.getElementById('btn-add-daily').addEventListener('click', () => toggleForm('daily-form'));
  document.getElementById('btn-cancel-daily').addEventListener('click', () => toggleForm('daily-form', false));
  document.getElementById('btn-save-daily').addEventListener('click', () => saveGoalItem('daily'));
}

function toggleForm(id, show = null) {
  const el = document.getElementById(id);
  el.style.display = (show === null ? el.style.display === 'none' : !show) ? 'block' : 'none';
}

function saveGoalItem(type) {
  const textEl = document.getElementById(`${type}-goal-text`);
  const text = textEl.value.trim();
  if (!text) { showToast('목표를 입력해주세요!'); return; }

  const goals = loadData(`${type}Goals`) || [];
  goals.unshift({ id: Date.now(), text, done: false, created: todayStr() });
  saveData(`${type}Goals`, goals);
  textEl.value = '';
  document.getElementById(`${type}-form`).style.display = 'none';
  renderGoals();
  showToast('목표가 추가됐어요!');
}

function renderGoals() {
  ['monthly', 'weekly', 'daily'].forEach(type => {
    const goals = loadData(`${type}Goals`) || [];
    const list = document.getElementById(`${type}-goals-list`);
    if (goals.length === 0) {
      list.innerHTML = `<div style="color:#9ca3af;font-size:13px;padding:10px 0;">${type === 'monthly' ? '이달의' : type === 'weekly' ? '이번 주' : '오늘의'} 목표를 추가해보세요!</div>`;
    } else {
      list.innerHTML = goals.map(g => `
        <div class="goal-item ${g.done ? 'done' : ''}" id="goal-${g.id}">
          <input type="checkbox" class="goal-checkbox" ${g.done ? 'checked' : ''} onchange="toggleGoal('${type}', ${g.id})">
          <span class="goal-text">${g.text}</span>
          <button class="btn-delete-goal" onclick="deleteGoal('${type}', ${g.id})"><i class="fas fa-times"></i></button>
        </div>`).join('');
    }
  });
}

window.toggleGoal = function(type, id) {
  const goals = loadData(`${type}Goals`) || [];
  const g = goals.find(g => g.id === id);
  if (g) g.done = !g.done;
  saveData(`${type}Goals`, goals);
  renderGoals();
};

window.deleteGoal = function(type, id) {
  let goals = loadData(`${type}Goals`) || [];
  goals = goals.filter(g => g.id !== id);
  saveData(`${type}Goals`, goals);
  renderGoals();
  showToast('목표가 삭제됐어요');
};

// ===== 히스토리 =====
function renderHistory() {
  const logs = loadData('dailyLogs') || {};
  const list = document.getElementById('history-list');
  const dates = Object.keys(logs).sort((a, b) => b.localeCompare(a));

  if (dates.length === 0) {
    list.innerHTML = '<div class="empty-state"><i class="fas fa-history"></i><p>아직 기록된 데이터가 없어요.<br>오늘 기록 탭에서 기록을 시작하세요!</p></div>';
    return;
  }

  const conditionEmoji = { 1: '😫', 2: '😕', 3: '😐', 4: '😊', 5: '🔥' };

  list.innerHTML = dates.map(date => {
    const log = logs[date];
    const workoutCount = log.workouts?.length || 0;
    const totalCal = log.meals?.reduce((s, m) => s + (m.calories || 0), 0) || 0;
    const burnedCal = log.workouts?.reduce((s, w) => s + (w.calories || 0), 0) || 0;

    return `
      <div class="history-item">
        <div class="history-date-header">
          <span>${formatDate(date)}</span>
          <span class="history-condition">${conditionEmoji[log.condition || 3]} 컨디션 ${log.condition || '-'}/5</span>
        </div>
        <div class="history-body">
          ${workoutCount > 0 ? `💪 운동 ${workoutCount}건 (${burnedCal}kcal 소모)<br>` : ''}
          ${totalCal > 0 ? `🍽️ 식사 ${log.meals?.length || 0}건 (${totalCal.toLocaleString()}kcal 섭취)<br>` : ''}
          ${log.symptoms?.length > 0 ? `⚠️ 증상: ${log.symptoms.join(', ')}<br>` : ''}
          ${log.memo ? `📝 "${log.memo}"` : ''}
          ${!workoutCount && !totalCal && !log.memo ? '기록 없음' : ''}
        </div>
      </div>`;
  }).join('');
}

// ===== 헤더 카운트다운 =====
function updateHeaderCountdown() {
  const goals = loadData('goals');
  const header = document.getElementById('header-countdown');
  if (!goals?.startDate) {
    header.textContent = '목표를 설정하고 변화를 시작하세요';
    return;
  }
  const start = new Date(goals.startDate);
  const end = new Date(start);
  end.setDate(end.getDate() + 28);
  const today = new Date();
  const remaining = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  if (remaining <= 0) {
    header.textContent = '🎉 4주 챌린지 완료!';
  } else {
    const elapsed = Math.max(0, Math.floor((today - start) / (1000 * 60 * 60 * 24)));
    header.textContent = `🔥 D+${elapsed} · 종료까지 ${remaining}일 남았어요`;
  }
}

// ===== 저장된 데이터 복원 =====
function restoreProfile() {
  const profile = loadData('profile');
  const goals = loadData('goals');
  if (!profile || !goals) return;

  // 성별
  const genderCard = document.querySelector(`[data-group="gender"][data-value="${profile.gender}"]`);
  if (genderCard) genderCard.classList.add('active');

  // 체질
  const bodyCard = document.querySelector(`[data-group="bodyType"][data-value="${profile.bodyType}"]`);
  if (bodyCard) bodyCard.classList.add('active');

  // 숫자 입력
  if (profile.age) document.getElementById('inp-age').value = profile.age;
  if (profile.height) document.getElementById('inp-height').value = profile.height;
  if (profile.weight) document.getElementById('inp-weight').value = profile.weight;
  if (profile.bodyfat) document.getElementById('inp-bodyfat').value = profile.bodyfat;
  if (goals.targetWeight) document.getElementById('inp-target-weight').value = goals.targetWeight;
  if (goals.targetBodyfat) document.getElementById('inp-target-bodyfat').value = goals.targetBodyfat;
  if (goals.startDate) document.getElementById('inp-start-date').value = goals.startDate;

  // 피커
  const setPicker = (containerId, val) => {
    const btn = document.querySelector(`#${containerId} [data-val="${val}"]`);
    if (btn) btn.classList.add('active');
  };
  if (goals.strengthDays) setPicker('strength-days', goals.strengthDays);
  if (goals.strengthMin) setPicker('strength-min', goals.strengthMin);
  if (goals.cardioDays) setPicker('cardio-days', goals.cardioDays);
  if (goals.cardioMin) setPicker('cardio-min', goals.cardioMin);

  updateGoalPreview();
}

// ===== 시작일 기본값 =====
function setDefaultDate() {
  const el = document.getElementById('inp-start-date');
  if (!el.value) el.value = todayStr();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initChoiceCards();
  initPickers();
  initGoalSave();
  initTodayTab();
  initRunningFilter();
  initGoalManagement();
  initSymptomListeners();
  setDefaultDate();
  restoreProfile();
  updateHeaderCountdown();
  renderTodayRecords();

  // 러닝 탭이 초기 활성이 아니라도 데이터 준비
  // (탭 클릭 시 렌더됨)
});
