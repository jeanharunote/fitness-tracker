/* =============================================
   FITNESS TRACKER — script.js
   ============================================= */

// ===== SVG 일러스트 =====
const SVG = {
  squat: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="10" x2="20" y2="110" stroke="#444" stroke-width="3"/>
    <line x1="100" y1="10" x2="100" y2="110" stroke="#444" stroke-width="3"/>
    <rect x="15" y="38" width="90" height="5" rx="2" fill="#777"/>
    <rect x="8" y="34" width="9" height="13" rx="2" fill="#555"/>
    <rect x="103" y="34" width="9" height="13" rx="2" fill="#555"/>
    <circle cx="60" cy="24" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="33" x2="60" y2="43" stroke="#fff" stroke-width="2"/>
    <line x1="38" y1="43" x2="82" y2="43" stroke="#fff" stroke-width="2.5"/>
    <line x1="60" y1="43" x2="57" y2="68" stroke="#fff" stroke-width="2.5"/>
    <line x1="57" y1="68" x2="42" y2="92" stroke="#00ff88" stroke-width="3"/>
    <line x1="57" y1="68" x2="72" y2="92" stroke="#00ff88" stroke-width="3"/>
    <line x1="42" y1="92" x2="38" y2="112" stroke="#fff" stroke-width="2"/>
    <line x1="72" y1="92" x2="76" y2="112" stroke="#fff" stroke-width="2"/>
    <ellipse cx="43" cy="90" rx="9" ry="13" fill="#00ff88" opacity="0.2"/>
    <ellipse cx="72" cy="90" rx="9" ry="13" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  legExtension: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="55" width="55" height="30" rx="6" fill="#333" stroke="#555" stroke-width="1"/>
    <rect x="50" y="50" width="8" height="40" rx="3" fill="#555"/>
    <circle cx="40" cy="50" r="10" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="40" y1="60" x2="40" y2="75" stroke="#fff" stroke-width="2.5"/>
    <line x1="20" y1="65" x2="55" y2="65" stroke="#fff" stroke-width="2"/>
    <line x1="40" y1="75" x2="25" y2="85" stroke="#fff" stroke-width="2.5"/>
    <line x1="25" y1="85" x2="90" y2="85" stroke="#00ff88" stroke-width="3"/>
    <rect x="88" y="80" width="12" height="12" rx="3" fill="#555"/>
    <ellipse cx="60" cy="85" rx="18" ry="7" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  legCurl: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="45" width="100" height="20" rx="6" fill="#333" stroke="#555" stroke-width="1"/>
    <circle cx="35" cy="38" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="47" x2="35" y2="65" stroke="#fff" stroke-width="2.5"/>
    <line x1="15" y1="57" x2="55" y2="57" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="65" x2="50" y2="78" stroke="#fff" stroke-width="2.5"/>
    <line x1="50" y1="78" x2="50" y2="95" stroke="#00ff88" stroke-width="3"/>
    <rect x="44" y="93" width="14" height="10" rx="3" fill="#555"/>
    <ellipse cx="50" cy="85" rx="8" ry="14" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  hipPress: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="60" width="110" height="18" rx="5" fill="#333" stroke="#555" stroke-width="1"/>
    <rect x="50" y="30" width="20" height="35" rx="4" fill="#444" stroke="#555" stroke-width="1"/>
    <circle cx="60" cy="22" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="31" x2="60" y2="58" stroke="#fff" stroke-width="2.5"/>
    <line x1="40" y1="52" x2="80" y2="52" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="58" x2="45" y2="75" stroke="#00ff88" stroke-width="3"/>
    <line x1="60" y1="58" x2="75" y2="75" stroke="#00ff88" stroke-width="3"/>
    <line x1="45" y1="75" x2="40" y2="92" stroke="#fff" stroke-width="2"/>
    <line x1="75" y1="75" x2="80" y2="92" stroke="#fff" stroke-width="2"/>
    <ellipse cx="60" cy="62" rx="14" ry="9" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  wideSquat: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="22" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="31" x2="60" y2="55" stroke="#fff" stroke-width="2.5"/>
    <line x1="38" y1="43" x2="82" y2="43" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="55" x2="35" y2="80" stroke="#00ff88" stroke-width="3"/>
    <line x1="60" y1="55" x2="85" y2="80" stroke="#00ff88" stroke-width="3"/>
    <line x1="35" y1="80" x2="28" y2="105" stroke="#fff" stroke-width="2"/>
    <line x1="85" y1="80" x2="92" y2="105" stroke="#fff" stroke-width="2"/>
    <rect x="48" y="55" width="24" height="22" rx="6" fill="#555" stroke="#777" stroke-width="1"/>
    <ellipse cx="35" cy="82" rx="10" ry="14" fill="#00ff88" opacity="0.2"/>
    <ellipse cx="85" cy="82" rx="10" ry="14" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  innerThigh: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="55" width="70" height="35" rx="8" fill="#333" stroke="#555" stroke-width="1"/>
    <circle cx="60" cy="38" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="47" x2="60" y2="65" stroke="#fff" stroke-width="2.5"/>
    <line x1="38" y1="58" x2="82" y2="58" stroke="#fff" stroke-width="2"/>
    <line x1="38" y1="65" x2="38" y2="90" stroke="#00ff88" stroke-width="3"/>
    <line x1="82" y1="65" x2="82" y2="90" stroke="#00ff88" stroke-width="3"/>
    <ellipse cx="38" cy="78" rx="8" ry="14" fill="#00ff88" opacity="0.25"/>
    <ellipse cx="82" cy="78" rx="8" ry="14" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  outerThigh: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="55" width="70" height="35" rx="8" fill="#333" stroke="#555" stroke-width="1"/>
    <circle cx="60" cy="38" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="47" x2="60" y2="65" stroke="#fff" stroke-width="2.5"/>
    <line x1="38" y1="58" x2="82" y2="58" stroke="#fff" stroke-width="2"/>
    <line x1="38" y1="65" x2="20" y2="90" stroke="#00ff88" stroke-width="3"/>
    <line x1="82" y1="65" x2="100" y2="90" stroke="#00ff88" stroke-width="3"/>
    <ellipse cx="22" cy="82" rx="10" ry="13" fill="#00ff88" opacity="0.25"/>
    <ellipse cx="98" cy="82" rx="10" ry="13" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  gluteMachine: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="50" width="50" height="55" rx="5" fill="#2a2a2a" stroke="#555" stroke-width="1"/>
    <circle cx="30" cy="38" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="30" y1="47" x2="30" y2="68" stroke="#fff" stroke-width="2.5"/>
    <line x1="10" y1="62" x2="50" y2="62" stroke="#fff" stroke-width="2"/>
    <line x1="30" y1="68" x2="55" y2="80" stroke="#fff" stroke-width="2.5"/>
    <line x1="55" y1="80" x2="95" y2="60" stroke="#00ff88" stroke-width="3"/>
    <ellipse cx="75" cy="68" rx="16" ry="10" fill="#00ff88" opacity="0.25"/>
    <rect x="90" y="52" width="20" height="15" rx="4" fill="#555"/>
  </svg>`,

  latPulldown: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="8" x2="110" y2="8" stroke="#555" stroke-width="3"/>
    <line x1="60" y1="8" x2="60" y2="28" stroke="#777" stroke-width="2"/>
    <line x1="40" y1="28" x2="80" y2="28" stroke="#888" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="48" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="57" x2="60" y2="80" stroke="#fff" stroke-width="2.5"/>
    <line x1="40" y1="68" x2="80" y2="68" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="80" x2="45" y2="100" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="80" x2="75" y2="100" stroke="#fff" stroke-width="2"/>
    <line x1="40" y1="34" x2="40" y2="68" stroke="#00ff88" stroke-width="2.5" stroke-dasharray="4,3"/>
    <line x1="80" y1="34" x2="80" y2="68" stroke="#00ff88" stroke-width="2.5" stroke-dasharray="4,3"/>
    <ellipse cx="60" cy="65" rx="22" ry="12" fill="#00ff88" opacity="0.15"/>
  </svg>`,

  seatedRow: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="65" width="35" height="45" rx="5" fill="#2a2a2a" stroke="#555" stroke-width="1"/>
    <circle cx="30" cy="35" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="30" y1="44" x2="30" y2="65" stroke="#fff" stroke-width="2.5"/>
    <line x1="10" y1="56" x2="50" y2="56" stroke="#fff" stroke-width="2"/>
    <line x1="30" y1="65" x2="25" y2="90" stroke="#fff" stroke-width="2"/>
    <line x1="30" y1="65" x2="50" y2="80" stroke="#fff" stroke-width="2"/>
    <line x1="30" y1="50" x2="95" y2="50" stroke="#00ff88" stroke-width="3"/>
    <line x1="30" y1="50" x2="55" y2="50" stroke="#fff" stroke-width="2.5"/>
    <rect x="92" y="44" width="18" height="12" rx="3" fill="#555"/>
    <ellipse cx="45" cy="50" rx="18" ry="8" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  shoulderPress: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="22" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="31" x2="60" y2="65" stroke="#fff" stroke-width="2.5"/>
    <line x1="38" y1="45" x2="82" y2="45" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="65" x2="45" y2="88" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="65" x2="75" y2="88" stroke="#fff" stroke-width="2"/>
    <line x1="45" y1="88" x2="42" y2="110" stroke="#fff" stroke-width="2"/>
    <line x1="75" y1="88" x2="78" y2="110" stroke="#fff" stroke-width="2"/>
    <line x1="28" y1="32" x2="92" y2="32" stroke="#888" stroke-width="4" stroke-linecap="round"/>
    <rect x="18" y="26" width="10" height="13" rx="2" fill="#555"/>
    <rect x="92" y="26" width="10" height="13" rx="2" fill="#555"/>
    <line x1="38" y1="32" x2="28" y2="42" stroke="#fff" stroke-width="2"/>
    <line x1="82" y1="32" x2="92" y2="42" stroke="#fff" stroke-width="2"/>
    <ellipse cx="37" cy="40" rx="10" ry="10" fill="#00ff88" opacity="0.25"/>
    <ellipse cx="83" cy="40" rx="10" ry="10" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  lateralRaise: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="22" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="31" x2="60" y2="68" stroke="#fff" stroke-width="2.5"/>
    <line x1="60" y1="68" x2="45" y2="92" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="68" x2="75" y2="92" stroke="#fff" stroke-width="2"/>
    <line x1="45" y1="92" x2="42" y2="112" stroke="#fff" stroke-width="2"/>
    <line x1="75" y1="92" x2="78" y2="112" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="44" x2="18" y2="35" stroke="#00ff88" stroke-width="3"/>
    <line x1="60" y1="44" x2="102" y2="35" stroke="#00ff88" stroke-width="3"/>
    <circle cx="15" cy="34" r="4" fill="#777"/>
    <circle cx="105" cy="34" r="4" fill="#777"/>
    <ellipse cx="30" cy="40" rx="14" ry="8" fill="#00ff88" opacity="0.2"/>
    <ellipse cx="90" cy="40" rx="14" ry="8" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  pullup: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="10" x2="110" y2="10" stroke="#555" stroke-width="4" stroke-linecap="round"/>
    <circle cx="60" cy="28" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="37" x2="60" y2="62" stroke="#fff" stroke-width="2.5"/>
    <line x1="60" y1="48" x2="42" y2="60" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="48" x2="78" y2="60" stroke="#fff" stroke-width="2"/>
    <line x1="42" y1="10" x2="42" y2="60" stroke="#00ff88" stroke-width="2.5"/>
    <line x1="78" y1="10" x2="78" y2="60" stroke="#00ff88" stroke-width="2.5"/>
    <line x1="60" y1="62" x2="50" y2="85" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="62" x2="70" y2="85" stroke="#fff" stroke-width="2"/>
    <ellipse cx="51" cy="38" rx="12" ry="14" fill="#00ff88" opacity="0.18"/>
    <ellipse cx="69" cy="38" rx="12" ry="14" fill="#00ff88" opacity="0.18"/>
  </svg>`,

  tbarRow: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="28" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="37" x2="35" y2="62" stroke="#fff" stroke-width="2.5"/>
    <line x1="15" y1="50" x2="55" y2="50" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="62" x2="28" y2="88" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="62" x2="50" y2="82" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="45" x2="90" y2="55" stroke="#888" stroke-width="3" stroke-linecap="round"/>
    <line x1="35" y1="45" x2="45" y2="62" stroke="#00ff88" stroke-width="2.5" stroke-dasharray="4,3"/>
    <rect x="88" y="48" width="22" height="14" rx="4" fill="#555"/>
    <rect x="5" y="100" width="110" height="6" rx="3" fill="#333"/>
    <line x1="8" y1="100" x2="8" y2="88" stroke="#444" stroke-width="2"/>
    <ellipse cx="45" cy="52" rx="15" ry="10" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  dumbbellCurl: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="20" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="29" x2="60" y2="62" stroke="#fff" stroke-width="2.5"/>
    <line x1="38" y1="42" x2="82" y2="42" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="62" x2="48" y2="85" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="62" x2="72" y2="85" stroke="#fff" stroke-width="2"/>
    <line x1="48" y1="85" x2="46" y2="108" stroke="#fff" stroke-width="2"/>
    <line x1="72" y1="85" x2="74" y2="108" stroke="#fff" stroke-width="2"/>
    <line x1="38" y1="42" x2="22" y2="58" stroke="#00ff88" stroke-width="2.5"/>
    <circle cx="17" cy="60" r="5" fill="#666"/>
    <ellipse cx="30" cy="50" rx="11" ry="14" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  cablePushdown: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="5" x2="60" y2="35" stroke="#777" stroke-width="2"/>
    <rect x="45" y="30" width="30" height="8" rx="3" fill="#555"/>
    <circle cx="60" cy="52" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="61" x2="60" y2="85" stroke="#fff" stroke-width="2.5"/>
    <line x1="38" y1="72" x2="82" y2="72" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="85" x2="50" y2="108" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="85" x2="70" y2="108" stroke="#fff" stroke-width="2"/>
    <line x1="82" y1="72" x2="82" y2="105" stroke="#00ff88" stroke-width="3"/>
    <circle cx="82" cy="106" r="5" fill="#666"/>
    <ellipse cx="82" cy="88" rx="8" ry="16" fill="#00ff88" opacity="0.25"/>
  </svg>`,

  hyperExtension: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="65" width="60" height="20" rx="5" fill="#2a2a2a" stroke="#555" stroke-width="1"/>
    <rect x="10" y="50" width="20" height="20" rx="4" fill="#333" stroke="#555" stroke-width="1"/>
    <circle cx="85" cy="30" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="85" y1="39" x2="65" y2="65" stroke="#fff" stroke-width="2.5"/>
    <line x1="65" y1="55" x2="50" y2="62" stroke="#fff" stroke-width="2"/>
    <line x1="65" y1="65" x2="30" y2="72" stroke="#fff" stroke-width="2.5"/>
    <line x1="30" y1="72" x2="18" y2="70" stroke="#00ff88" stroke-width="3"/>
    <ellipse cx="70" cy="58" rx="18" ry="9" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  barbelRow: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="22" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="31" x2="35" y2="55" stroke="#fff" stroke-width="2.5"/>
    <line x1="15" y1="45" x2="55" y2="45" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="55" x2="28" y2="80" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="55" x2="50" y2="75" stroke="#fff" stroke-width="2"/>
    <line x1="35" y1="40" x2="100" y2="55" stroke="#888" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="2" y="52" width="10" height="16" rx="2" fill="#666"/>
    <rect x="100" y="50" width="10" height="16" rx="2" fill="#666"/>
    <line x1="35" y1="40" x2="38" y2="60" stroke="#00ff88" stroke-width="2.5" stroke-dasharray="4,3"/>
    <ellipse cx="50" cy="46" rx="16" ry="9" fill="#00ff88" opacity="0.2"/>
    <line x1="5" y1="110" x2="115" y2="110" stroke="#444" stroke-width="3"/>
  </svg>`,

  flutterKick: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="68" width="110" height="10" rx="4" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
    <circle cx="20" cy="52" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="20" y1="61" x2="20" y2="80" stroke="#fff" stroke-width="2.5"/>
    <line x1="5" y1="72" x2="35" y2="72" stroke="#fff" stroke-width="2"/>
    <line x1="20" y1="72" x2="60" y2="68" stroke="#fff" stroke-width="2.5"/>
    <line x1="60" y1="68" x2="95" y2="60" stroke="#00ff88" stroke-width="3"/>
    <line x1="60" y1="68" x2="95" y2="78" stroke="#fff" stroke-width="2.5"/>
    <ellipse cx="78" cy="63" rx="16" ry="7" fill="#00ff88" opacity="0.2"/>
  </svg>`,

  plank: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="100" x2="115" y2="100" stroke="#444" stroke-width="3"/>
    <circle cx="20" cy="55" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="20" y1="64" x2="20" y2="80" stroke="#fff" stroke-width="2"/>
    <line x1="10" y1="80" x2="30" y2="80" stroke="#fff" stroke-width="2"/>
    <line x1="20" y1="73" x2="95" y2="68" stroke="#fff" stroke-width="3"/>
    <line x1="95" y1="68" x2="105" y2="82" stroke="#fff" stroke-width="2.5"/>
    <line x1="95" y1="68" x2="110" y2="82" stroke="#fff" stroke-width="2.5"/>
    <ellipse cx="55" cy="70" rx="30" ry="6" fill="#00ff88" opacity="0.15"/>
  </svg>`,

  russianTwist: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="35" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="44" x2="60" y2="75" stroke="#fff" stroke-width="2.5"/>
    <line x1="60" y1="58" x2="40" y2="52" stroke="#00ff88" stroke-width="3"/>
    <circle cx="35" cy="50" r="7" fill="#555" stroke="#777" stroke-width="1.5"/>
    <line x1="60" y1="75" x2="42" y2="95" stroke="#fff" stroke-width="2"/>
    <line x1="60" y1="75" x2="78" y2="95" stroke="#fff" stroke-width="2"/>
    <line x1="42" y1="95" x2="38" y2="112" stroke="#fff" stroke-width="2"/>
    <line x1="78" y1="95" x2="82" y2="112" stroke="#fff" stroke-width="2"/>
    <ellipse cx="60" cy="63" rx="16" ry="10" fill="#00ff88" opacity="0.2"/>
  </svg>`
};

// ===== 운동 데이터베이스 (PDF 바프 루틴 기반) =====
const EXERCISE_DB = {
  // 하체
  'inner-thigh': {
    name: '이너타이 머신', nameEn: 'Inner Thigh / Adductor',
    sets: '3세트', reps: '15개', rest: '60초',
    target: ['내전근', '내측광근', '고관절'],
    svg: SVG.innerThigh,
    steps: [
      '머신 시트에 앉아 등받이에 허리를 완전히 밀착시킵니다.',
      '패드를 허벅지 안쪽에 위치시키고 발을 페달에 올립니다.',
      '허벅지 안쪽 근육으로 패드를 천천히 모아줍니다 (2-3초).',
      '완전히 모은 상태에서 1초 수축 후 천천히 원위치합니다.'
    ],
    tip: '반동을 쓰지 말고, 허벅지 안쪽이 당기는 느낌에 집중하세요. 완전히 벌릴 때 스트레칭 느낌을 즐기세요.'
  },
  'outer-thigh': {
    name: '아웃타이 머신', nameEn: 'Outer Thigh / Abductor',
    sets: '3세트', reps: '15개', rest: '60초',
    target: ['외전근', '중둔근', '대둔근'],
    svg: SVG.outerThigh,
    steps: [
      '머신 시트에 앉아 등받이에 허리를 완전히 밀착시킵니다.',
      '패드를 허벅지 바깥쪽에 위치시킵니다.',
      '허벅지 바깥쪽 근육으로 패드를 천천히 벌려줍니다.',
      '최대로 벌린 상태에서 1초 정지 후 천천히 원위치합니다.'
    ],
    tip: '무릎이 안으로 모이지 않도록 주의하세요. 외둔근과 중둔근에 집중하며 진행하세요.'
  },
  'smith-squat': {
    name: '스미스 스쿼트', nameEn: 'Smith Machine Squat',
    sets: '4세트', reps: '12개', rest: '90초',
    target: ['대퇴사두근', '대둔근', '햄스트링'],
    svg: SVG.squat,
    steps: [
      '발을 어깨 너비로 벌리고 스미스 머신 바를 승모근에 올립니다.',
      '가슴을 펴고 코어에 힘을 준 상태로 천천히 앉습니다.',
      '허벅지가 바닥과 평행이 될 때까지 내려갑니다 (무릎이 발끝 방향).',
      '발뒤꿈치로 바닥을 밀며 천천히 올라옵니다.'
    ],
    tip: '무릎이 발끝보다 앞으로 나가지 않도록, 등이 굽지 않게 코어를 잡아주세요. 발끝과 무릎 방향을 일치시켜요.'
  },
  'glute-machine': {
    name: '글루트 머신', nameEn: 'Glute Machine',
    sets: '3세트', reps: '25개', rest: '60초',
    target: ['대둔근', '중둔근', '햄스트링'],
    svg: SVG.gluteMachine,
    steps: [
      '머신에 발판을 올리고 손잡이를 잡습니다. 지지하는 다리를 약간 구부립니다.',
      '목표 다리를 뒤로 뻗어 둔근을 최대로 수축시킵니다 (1-2초).',
      '엉덩이가 올라가거나 허리가 꺾이지 않게 주의합니다.',
      '천천히 원위치로 돌아옵니다. 중량은 15kg에서 시작하세요.'
    ],
    tip: '둔근 수축에 완전히 집중하세요. 발끝이 아니라 뒤꿈치로 밀어내는 느낌으로 해야 둔근에 잘 들어와요.'
  },
  'leg-extension': {
    name: '레그 익스텐션', nameEn: 'Leg Extension',
    sets: '4세트', reps: '15개', rest: '60초',
    target: ['대퇴사두근', '내측광근'],
    svg: SVG.legExtension,
    steps: [
      '시트에 앉아 등을 등받이에 밀착, 패드를 발목 위에 위치시킵니다.',
      '코어에 힘을 주고 무릎을 완전히 펴는 느낌으로 다리를 올립니다.',
      '최고점에서 1-2초 수축 후 천천히 내려옵니다.',
      '완전히 내리지 말고 약간 긴장 유지한 상태에서 반복합니다.'
    ],
    tip: '발끝을 몸쪽으로 당긴 채로 올리면 내측광근(무릎 안쪽)에 더 잘 자극이 와요. 너무 무거운 중량은 피하세요.'
  },
  'v-squat': {
    name: '브이 스쿼트 머신', nameEn: 'V-Squat Machine',
    sets: '4세트', reps: '15개', rest: '90초',
    target: ['대퇴사두근', '대둔근', '내전근'],
    svg: SVG.squat,
    steps: [
      '발을 어깨 너비로 벌리고 등을 패드에 완전히 밀착시킵니다.',
      '손잡이를 잡고 코어에 힘을 주며 천천히 내려갑니다.',
      '허벅지가 바닥과 평행이 될 때까지 앉습니다.',
      '발뒤꿈치로 밀며 천천히 올라옵니다. 양쪽 10kg부터 시작하세요.'
    ],
    tip: '머신이 고정되어 있어 자세 안정성이 높아요. 발 위치를 약간 앞에 두면 둔근에 더 자극이 옵니다.'
  },
  'hip-press': {
    name: '힙 프레스 / 포커스 힙프레스', nameEn: 'Hip Press',
    sets: '4세트', reps: '15개', rest: '90초',
    target: ['대둔근', '중둔근', '햄스트링'],
    svg: SVG.hipPress,
    steps: [
      '머신에 앉아 등을 패드에 밀착하고 발을 발판 위에 올립니다.',
      '무릎을 약간 바깥쪽으로 향하게 하고 코어에 힘을 줍니다.',
      '발뒤꿈치로 발판을 밀어내며 골반을 앞으로 내밉니다.',
      '최고점에서 둔근을 꽉 짜주고 천천히 원위치합니다. 깔리지 않게 주의!'
    ],
    tip: '80kg에서 시작하되 관리 불가한 무게는 피하세요. 둔근이 완전히 수축하는 느낌을 찾는 게 중요해요.'
  },
  'leg-curl': {
    name: '레그 컬', nameEn: 'Leg Curl',
    sets: '4세트', reps: '15개', rest: '60초',
    target: ['햄스트링', '슬굴곡근', '비복근'],
    svg: SVG.legCurl,
    steps: [
      '머신에 엎드려 패드를 발목 위에 위치시킵니다.',
      '허리를 바닥에 밀착시키고 코어에 힘을 줍니다.',
      '무릎을 구부려 발뒤꿈치를 엉덩이쪽으로 천천히 당겨옵니다.',
      '최고점에서 1-2초 수축 후 천천히 내려갑니다. 30kg부터 시작하세요.'
    ],
    tip: '허리가 뜨지 않도록 주의하세요. 내릴 때 완전히 내리지 말고 약간 긴장을 유지한 채 반복합니다.'
  },
  'wide-squat': {
    name: '와이드 스쿼트 (케틀벨)', nameEn: 'Wide Squat with Kettlebell',
    sets: '3세트', reps: '20개', rest: '60초',
    target: ['내전근', '대둔근', '대퇴사두근'],
    svg: SVG.wideSquat,
    steps: [
      '발을 어깨 너비보다 훨씬 넓게 벌리고 발끝을 45도 바깥으로 향합니다.',
      '케틀벨(12kg)을 양손으로 가슴 앞에 들고 코어에 힘을 줍니다.',
      '무릎이 발끝 방향으로 향하도록 하며 천천히 깊게 앉습니다.',
      '발뒤꿈치로 바닥을 밀며 천천히 올라오며 내전근을 수축합니다.'
    ],
    tip: '발끝과 무릎이 같은 방향을 향하는 게 핵심이에요. 내전근 스트레칭을 충분히 느끼면서 내려가세요.'
  },
  // 상체
  'pullup': {
    name: '턱걸이 (풀업)', nameEn: 'Pull-up',
    sets: '3세트', reps: '12개', rest: '90초',
    target: ['광배근', '이두근', '승모근'],
    svg: SVG.pullup,
    steps: [
      '바를 어깨너비보다 약간 넓게 오버그립(손등 위)으로 잡습니다.',
      '어깨를 내리고 코어에 힘을 준 채로 천천히 올라갑니다.',
      '턱이 바 위로 올라올 때까지 당기고, 광배근 수축을 느낍니다.',
      '천천히 컨트롤하며 완전히 팔이 펴질 때까지 내려갑니다.'
    ],
    tip: '반동을 쓰지 말고 광배근으로 당기는 느낌에 집중하세요. 어깨를 귀에서 멀리 내려야 광배근이 잘 자극돼요.'
  },
  'lat-pulldown': {
    name: '렛풀다운', nameEn: 'Lat Pulldown',
    sets: '4세트', reps: '12개', rest: '90초',
    target: ['광배근', '이두근', '원형근'],
    svg: SVG.latPulldown,
    steps: [
      '어깨너비보다 넓게 바를 오버그립으로 잡고 허벅지 패드에 다리를 고정합니다.',
      '가슴을 살짝 내밀고 몸을 약간 뒤로 기울입니다.',
      '팔꿈치를 갈비뼈 쪽으로 내리며 바를 쇄골 부근까지 당깁니다.',
      '광배근 수축을 1초 유지 후 천천히 원위치합니다.'
    ],
    tip: '팔로 당기는 것이 아니라 팔꿈치를 등 뒤로 넣는 느낌으로 당겨야 광배근에 잘 들어옵니다.'
  },
  'smith-shoulder': {
    name: '스미스 숄더프레스', nameEn: 'Smith Machine Shoulder Press',
    sets: '4세트', reps: '12개', rest: '90초',
    target: ['전면삼각근', '중간삼각근', '삼두근'],
    svg: SVG.shoulderPress,
    steps: [
      '벤치를 90도로 세우고 바가 쇄골 앞에 오게 위치를 조절합니다.',
      '어깨너비로 바를 잡고 코어에 힘을 줍니다.',
      '바를 머리 위로 밀어 올리되 팔꿈치를 완전히 펴지 않습니다.',
      '천천히 쇄골 위치까지 내려옵니다. 빈바에서 시작해 양쪽 1kg씩 증량하세요.'
    ],
    tip: '허리를 과도하게 젖히지 마세요. 코어를 강하게 잡고 어깨 근육으로만 밀어야 해요.'
  },
  'seated-row': {
    name: '시티드로우 머신', nameEn: 'Seated Row Machine',
    sets: '4세트', reps: '15개', rest: '90초',
    target: ['광배근', '능형근', '후면삼각근'],
    svg: SVG.seatedRow,
    steps: [
      '시트에 앉아 가슴 패드에 가슴을 밀착시킵니다.',
      '손잡이를 잡고 어깨를 펴며 코어에 힘을 줍니다.',
      '팔꿈치를 몸 쪽으로 당기며 등 근육을 수축시킵니다.',
      '20kg에서 시작해 최대 수축 상태에서 1초 정지 후 천천히 내려갑니다.'
    ],
    tip: '당길 때 어깨가 앞으로 말리지 않도록, 가슴을 내밀면서 등을 수축하는 느낌으로 해야 해요.'
  },
  'tbar-row': {
    name: '티바로우', nameEn: 'T-Bar Row',
    sets: '4세트', reps: '15개', rest: '90초',
    target: ['광배근', '능형근', '이두근'],
    svg: SVG.tbarRow,
    steps: [
      '발을 양쪽에 위치시키고 허리를 펴고 약 45도 앞으로 숙입니다.',
      '언더그립 또는 뉴트럴그립으로 바를 잡습니다.',
      '팔꿈치를 뒤로 당기며 명치 아래쪽으로 바를 당깁니다.',
      '2.5-5kg에서 시작해, 수축지점에서 2초 유지 후 내려옵니다.'
    ],
    tip: '명치 아래로 당기는 것이 포인트! 허리가 굽지 않게 유지하고, 목을 앞으로 내밀지 마세요.'
  },
  'lateral-raise': {
    name: '사이드 레터럴 레이즈', nameEn: 'Side Lateral Raise',
    sets: '4세트', reps: '15-20개', rest: '60초',
    target: ['중간삼각근', '전면삼각근'],
    svg: SVG.lateralRaise,
    steps: [
      '덤벨을 양손에 들고 자연스럽게 서서 코어를 잡습니다.',
      '팔꿈치를 약간 구부린 채 양팔을 옆으로 어깨 높이까지 올립니다.',
      '새끼손가락 쪽이 살짝 올라가는 느낌으로 들어야 중간 삼각근에 자극이 와요.',
      '천천히 원위치합니다. 2kg 웜업 후 3kg 본운동으로 진행하세요.'
    ],
    tip: '반동을 쓰지 말고 팔꿈치 높이가 손목보다 높아야 해요. 너무 빠르게 하면 승모근이 개입되니 천천히!'
  },
  'standing-press': {
    name: '스텐딩 숄더프레스', nameEn: 'Standing Shoulder Press',
    sets: '4세트', reps: '12-15개', rest: '90초',
    target: ['전면삼각근', '중간삼각근', '삼두근', '코어'],
    svg: SVG.shoulderPress,
    steps: [
      '발을 어깨 너비로 벌리고 덤벨을 귀 옆 어깨 높이로 듭니다.',
      '코어와 둔근에 힘을 주어 허리를 안정시킵니다.',
      '덤벨을 머리 위로 밀어 올리되 팔을 완전히 펴지 않습니다.',
      '천천히 어깨 높이로 내려오며 반복합니다. 3-4kg으로 진행하세요.'
    ],
    tip: '서서 하면 코어도 같이 단련돼요. 허리가 꺾이지 않도록 복부에 힘을 꽉 주고 하세요.'
  },
  'dumbbell-curl': {
    name: '덤벨 컬 (팔 운동)', nameEn: 'Dumbbell Curl',
    sets: '3세트', reps: '15-20개', rest: '60초',
    target: ['이두근', '상완근'],
    svg: SVG.dumbbellCurl,
    steps: [
      '덤벨을 양손에 들고 팔을 아래로 자연스럽게 뻗습니다.',
      '팔꿈치를 몸에 고정하고 덤벨을 어깨 쪽으로 천천히 올립니다.',
      '최고점에서 이두근을 꽉 짜주고 1초 유지합니다.',
      '천천히 내려오며 반복합니다. 3kg으로 시작하세요.'
    ],
    tip: '팔꿈치가 앞뒤로 흔들리면 이두근이 아닌 다른 근육이 개입되요. 팔꿈치를 고정하는 게 핵심!'
  },
  'cable-pushdown': {
    name: '케이블 푸쉬다운 (삼두)', nameEn: 'Cable Rope Pushdown',
    sets: '3세트', reps: '15-20개', rest: '60초',
    target: ['삼두근', '외측두근'],
    svg: SVG.cablePushdown,
    steps: [
      '케이블 머신에 로프를 연결하고 로프 끝을 양손으로 잡습니다.',
      '팔꿈치를 몸 옆에 고정하고 손목을 일자로 유지합니다.',
      '삼두근으로 로프를 아래로 눌러 팔을 완전히 펴줍니다.',
      '10-15kg, 손목을 일자로 유지하며 천천히 원위치합니다.'
    ],
    tip: '로프를 내릴 때 양 끝을 벌려주면 삼두근 전체가 더 강하게 수축돼요. 팔꿈치가 앞으로 나오면 안 돼요!'
  },
  'hyperext-row': {
    name: '하이퍼 익스텐션 로우', nameEn: 'Hyperextension Row (Undergrip)',
    sets: '4세트', reps: '15개', rest: '90초',
    target: ['광배근', '척추기립근', '후면삼각근'],
    svg: SVG.hyperExtension,
    steps: [
      '하이퍼익스텐션 머신에 엎드려 발을 고정합니다.',
      '언더그립(손바닥을 하늘로)으로 24kg 바벨을 잡습니다.',
      '등을 일자로 펴며 바벨을 당겨 광배근을 수축시킵니다.',
      '수축 상태에서 1-2초 유지 후 천천히 내려갑니다.'
    ],
    tip: '손바닥을 하늘로 향하는 언더그립이 포인트! 광배근 하부와 등 전체에 강하게 자극이 와요.'
  },
  'barbell-row': {
    name: '바벨로우 언더그립', nameEn: 'Barbell Row (Undergrip)',
    sets: '2세트', reps: '15개', rest: '90초',
    target: ['광배근', '이두근', '능형근'],
    svg: SVG.barbelRow,
    steps: [
      '발을 어깨 너비로 벌리고 언더그립으로 바벨을 잡습니다.',
      '허리를 45도 앞으로 숙이고 등을 일자로 유지합니다.',
      '팔꿈치를 뒤로 당기며 바벨을 명치쪽으로 당깁니다.',
      '수축지점에서 2초 정지 후 천천히 내려갑니다.'
    ],
    tip: '언더그립이면 이두근과 광배근 하부에 더 강하게 자극이 와요. 등이 굽지 않게 코어를 잡아야 해요.'
  },
  // 복근
  'flutter-kick': {
    name: '플러터킥', nameEn: 'Flutter Kick',
    sets: '3세트', reps: '30개(편도)', rest: '30초',
    target: ['하복부', '장요근', '대퇴직근'],
    svg: SVG.flutterKick,
    steps: [
      '바닥에 누워 양손을 엉덩이 밑에 넣어 허리를 지지합니다.',
      '두 다리를 바닥에서 약 15-20cm 들어 올립니다.',
      '한 쪽씩 번갈아 위아래로 빠르게 차올립니다.',
      '허리가 뜨거나 아프면 다리 높이를 더 올리세요. 30개 편도 × 3세트.'
    ],
    tip: '허리가 바닥에서 뜨지 않도록 항상 복부에 힘을 줘야 해요. 호흡은 내쉬면서 발을 찹니다.'
  },
  'high-plank': {
    name: '하이플랭크 홀드', nameEn: 'High Plank Hold',
    sets: '1세트', reps: '1분 홀드', rest: '30초',
    target: ['코어 전체', '복횡근', '척추기립근', '어깨'],
    svg: SVG.plank,
    steps: [
      '팔굽혀펴기 자세에서 팔을 완전히 펴고 손목이 어깨 바로 아래에 오게 합니다.',
      '머리부터 발뒤꿈치까지 일직선이 되도록 몸을 펴줍니다.',
      '복부를 천장 쪽으로 끌어당기는 느낌으로 코어를 잡습니다.',
      '엉덩이가 위로 솟거나 처지지 않게 1분간 유지합니다.'
    ],
    tip: '코어가 버티기 힘들면 엉덩이를 살짝 조이면 더 쉬워요. 호흡은 멈추지 말고 계속 천천히 쉬세요.'
  },
  'russian-twist': {
    name: '러시안 트위스트', nameEn: 'Russian Twist',
    sets: '3세트', reps: '30개(편도)', rest: '30초',
    target: ['복사근', '복직근', '코어'],
    svg: SVG.russianTwist,
    steps: [
      '바닥에 앉아 무릎을 약 45도 구부리고 상체를 뒤로 약간 기울입니다.',
      '두 손을 모아 가슴 앞에 두거나 가벼운 중량을 잡습니다.',
      '복사근으로 상체를 좌우로 천천히 비틀어 줍니다.',
      '한 쪽을 1개로 카운트하여 30개 편도 × 3세트 진행합니다.'
    ],
    tip: '속도보다 복사근의 수축 느낌이 중요해요. 다리를 들면 난이도가 올라가고 코어에 더 자극이 와요.'
  },
  // ===== 추가 운동 =====
  'assisted-pullup': {
    name: '어시스트 풀업', nameEn: 'Assisted Pull-up',
    sets: '4세트', reps: '15개', rest: '90초',
    target: ['광배근', '이두근', '승모근'],
    svg: SVG.pullup,
    steps: [
      '어시스트 머신 무릎 패드에 무릎을 올리고 바를 어깨너비보다 약간 넓게 잡습니다.',
      '42kg 어시스트로 시작하여 점차 36kg으로 줄여나갑니다.',
      '광배근으로 몸을 끌어올려 턱이 바 위로 오게 합니다.',
      '천천히 컨트롤하며 팔을 완전히 펴줍니다.'
    ],
    tip: '어시스트 무게를 줄일수록 난이도가 올라가요. 광배근 수축 느낌에 집중하세요. 42kg → 36kg 목표!'
  },
  'lat-pulldown-close': {
    name: '랫풀다운 (클로즈 그립)', nameEn: 'Lat Pulldown Close Grip',
    sets: '3세트', reps: '12개', rest: '90초',
    target: ['광배근 하부', '이두근', '원형근'],
    svg: SVG.latPulldown,
    steps: [
      '손 간격을 어깨너비로 좁게 잡고 앉아 허벅지 패드에 다리를 고정합니다.',
      '상체를 살짝 뒤로 기울이고 가슴을 바 방향으로 내밉니다.',
      '팔꿈치를 아래·뒤로 내리며 바를 쇄골 아래까지 당깁니다.',
      '24kg으로 진행, 최대 수축 1초 유지 후 천천히 원위치합니다.'
    ],
    tip: '클로즈 그립은 광배근 하부에 더 강한 자극을 줘요. 어깨가 말리지 않게 가슴을 내밀어요.'
  },
  'dumbbell-shoulder': {
    name: '덤벨 숄더프레스', nameEn: 'Dumbbell Shoulder Press',
    sets: '4세트', reps: '12-15개', rest: '90초',
    target: ['전면삼각근', '중간삼각근', '삼두근'],
    svg: SVG.shoulderPress,
    steps: [
      '벤치에 앉거나 서서 덤벨을 귀 옆 어깨 높이로 듭니다.',
      '팔꿈치가 약 90도가 되도록 위치를 조정합니다.',
      '덤벨을 위로 밀어 올리되 머리 위에서 살짝 안쪽으로 모아줍니다.',
      '천천히 원위치로 내려옵니다. 3-5kg으로 진행하세요.'
    ],
    tip: '바벨보다 자유로운 궤적으로 삼각근 전체를 자극할 수 있어요. 코어를 잡아 허리가 꺾이지 않게 하세요.'
  },
  'standing-onearm': {
    name: '스텐딩 원암 숄더프레스', nameEn: 'Standing One-Arm Shoulder Press',
    sets: '1세트 (웜업)', reps: '15개 (좌우)', rest: '30초',
    target: ['전면삼각근', '중간삼각근', '코어'],
    svg: SVG.shoulderPress,
    steps: [
      '덤벨(3kg) 하나를 한 손에 들고 서서 코어에 힘을 줍니다.',
      '덤벨을 귀 옆 어깨 높이로 들어 올린 후 위로 밀어 올립니다.',
      '반대쪽 팔은 몸 옆에 자연스럽게 내리거나 허리에 올립니다.',
      '좌우 교대로 각 15회씩 진행합니다.'
    ],
    tip: '한 팔로 하면 코어 안정화에 더 효과적이에요. 본 운동 전 웜업 용도로 가볍게 진행하세요.'
  },
  'lateral-raise-b': {
    name: '사이드 레터럴 레이즈 (마무리)', nameEn: 'Side Lateral Raise (Finisher)',
    sets: '3세트', reps: '15개', rest: '60초',
    target: ['중간삼각근', '전면삼각근'],
    svg: SVG.lateralRaise,
    steps: [
      '덤벨(3kg)을 양손에 들고 자연스럽게 서서 코어를 잡습니다.',
      '팔꿈치를 약간 구부린 채 양팔을 옆으로 어깨 높이까지 올립니다.',
      '새끼손가락 쪽이 살짝 올라가는 느낌으로 들어야 중간 삼각근에 자극이 와요.',
      '천천히 원위치합니다.'
    ],
    tip: '같은 동작을 세트 말미에 한번 더 해서 삼각근을 완전히 소진시켜요. 번아웃 세트로 활용하세요.'
  },
  // ===== 남성 추가 운동 =====
  'chest-press': {
    name: '체스트프레스 머신', nameEn: 'Chest Press Machine',
    sets: '4세트', reps: '8-12개', rest: '90초',
    target: ['대흉근', '삼두근', '전면삼각근'],
    svg: SVG.shoulderPress,
    steps: [
      '시트를 조정해 손잡이가 가슴 중간 높이에 오게 맞춥니다.',
      '등을 등받이에 완전히 밀착하고 발을 바닥에 고정합니다.',
      '손잡이를 잡고 가슴 근육으로 밀어내며 팔을 거의 다 폅니다.',
      '천천히 원위치로 가슴이 스트레칭 되는 느낌을 받으며 내려옵니다.'
    ],
    tip: '팔꿈치가 어깨보다 너무 높으면 어깨 부상 위험이 있어요. 가슴 근육의 수축/이완에 집중하세요.'
  },
  'bench-press': {
    name: '덤벨 벤치프레스', nameEn: 'Dumbbell Bench Press',
    sets: '4세트', reps: '8-10개', rest: '90초',
    target: ['대흉근', '삼두근', '전면삼각근'],
    svg: SVG.shoulderPress,
    steps: [
      '벤치에 누워 덤벨을 가슴 옆 90도로 들어 올립니다.',
      '등을 자연스럽게 아치 형태로 유지하고 발을 바닥에 고정합니다.',
      '덤벨을 천장 방향으로 밀어 올리고 정점에서 잠깐 수축합니다.',
      '천천히 내려오며 가슴 근육이 늘어나는 느낌을 유지합니다. 8-12kg부터 시작하세요.'
    ],
    tip: '바벨보다 가동 범위가 넓어 가슴 전체를 자극할 수 있어요. 손목이 꺾이지 않게 주의하세요.'
  },
  'incline-press': {
    name: '인클라인 덤벨프레스', nameEn: 'Incline Dumbbell Press',
    sets: '3세트', reps: '10-12개', rest: '90초',
    target: ['상부 대흉근', '전면삼각근', '삼두근'],
    svg: SVG.shoulderPress,
    steps: [
      '벤치를 30-45도로 세우고 덤벨을 어깨 너비로 잡습니다.',
      '등을 벤치에 밀착하고 코어에 힘을 줍니다.',
      '덤벨을 위 대각선 방향으로 밀어 올립니다.',
      '천천히 내려와 상부 흉근이 스트레칭 되는 느낌을 즐깁니다.'
    ],
    tip: '각도가 너무 높으면 삼각근 운동이 돼요. 30-45도가 상부 흉근 자극에 최적이에요.'
  },
  'cable-fly': {
    name: '케이블 플라이', nameEn: 'Cable Fly',
    sets: '3세트', reps: '12-15개', rest: '60초',
    target: ['대흉근 내측', '전면삼각근'],
    svg: SVG.lateralRaise,
    steps: [
      '케이블 머신 양쪽 풀리를 가슴 높이로 설정합니다.',
      '양손으로 손잡이를 잡고 한 발 앞으로 나와 서있습니다.',
      '팔꿈치를 약간 구부린 채 양팔을 앞으로 모아 가슴 앞에서 만납니다.',
      '가슴 내측 수축을 1초 유지 후 천천히 원위치합니다.'
    ],
    tip: '팔꿈치가 완전히 펴지지 않는 게 포인트예요. 아치 모양으로 팔을 모아야 흉근에 집중돼요.'
  },
  'deadlift': {
    name: '루마니안 데드리프트', nameEn: 'Romanian Deadlift',
    sets: '4세트', reps: '8-10개', rest: '120초',
    target: ['햄스트링', '대둔근', '척추기립근'],
    svg: SVG.barbelRow,
    steps: [
      '발을 어깨 너비로 서고 덤벨이나 바벨을 허벅지 앞에 잡습니다.',
      '무릎을 살짝 구부린 채 고정하고 엉덩이를 뒤로 밀며 상체를 숙입니다.',
      '바가 무릎 아래까지 내려갈 때까지 등을 일자로 유지합니다.',
      '햄스트링과 둔근을 수축하며 천천히 올라옵니다. 10-20kg 시작.'
    ],
    tip: '허리가 아닌 엉덩이 경첩(힙힌지) 동작이에요. 등이 굽으면 즉시 무게를 줄이세요.'
  }
};

// ===== 4주 운동 스케줄 (옵션 A~E 기반) =====
const FOUR_WEEK_SCHEDULE = [
  // ── 1주차: 기본 적응 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 A', badge: '옵션A', exercises: ['inner-thigh','outer-thigh','smith-squat','glute-machine'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등/어깨 A', badge: '옵션A', exercises: ['pullup','lat-pulldown','smith-shoulder','seated-row'], abs: true },
    { day: '수', label: 'WED', emoji: '💪', type: '등/어깨 B', badge: '옵션B', exercises: ['tbar-row','assisted-pullup','smith-shoulder','lateral-raise'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 B', badge: '옵션B', exercises: ['leg-extension','v-squat','hip-press','glute-machine'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨/팔 C', badge: '옵션C', exercises: ['lateral-raise','standing-onearm','standing-press','smith-shoulder','dumbbell-curl','cable-pushdown'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ],
  // ── 2주차: 강도 강화 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 B', badge: '옵션B', exercises: ['leg-extension','v-squat','hip-press','glute-machine'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등 D', badge: '옵션D', exercises: ['hyperext-row','barbell-row','tbar-row','lat-pulldown','lat-pulldown-close'], abs: true },
    { day: '수', label: 'WED', emoji: '💪', type: '어깨/팔 E', badge: '옵션E', exercises: ['lateral-raise','dumbbell-shoulder','smith-shoulder','lateral-raise-b','dumbbell-curl','cable-pushdown'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 C', badge: '옵션C', exercises: ['leg-curl','v-squat','hip-press','wide-squat'], abs: true },
    { day: '토', label: 'SAT', emoji: '🔙', type: '등/어깨 A', badge: '옵션A', exercises: ['pullup','lat-pulldown','smith-shoulder','seated-row'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ],
  // ── 3주차: 루틴 교체 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 A', badge: '옵션A', exercises: ['inner-thigh','outer-thigh','smith-squat','glute-machine'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등/어깨 B', badge: '옵션B', exercises: ['tbar-row','assisted-pullup','smith-shoulder','lateral-raise'], abs: true },
    { day: '수', label: 'WED', emoji: '🔙', type: '등 D', badge: '옵션D', exercises: ['hyperext-row','barbell-row','tbar-row','lat-pulldown','lat-pulldown-close'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 B', badge: '옵션B', exercises: ['leg-extension','v-squat','hip-press','glute-machine'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨/팔 E', badge: '옵션E', exercises: ['lateral-raise','dumbbell-shoulder','smith-shoulder','lateral-raise-b','dumbbell-curl','cable-pushdown'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ],
  // ── 4주차: 마무리 최대 강도 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 C', badge: '옵션C', exercises: ['leg-curl','v-squat','hip-press','wide-squat'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등/어깨 A', badge: '옵션A', exercises: ['pullup','lat-pulldown','smith-shoulder','seated-row'], abs: true },
    { day: '수', label: 'WED', emoji: '🔙', type: '등 D', badge: '옵션D', exercises: ['hyperext-row','barbell-row','tbar-row','lat-pulldown','lat-pulldown-close'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 B+C', badge: '복합', exercises: ['leg-extension','v-squat','hip-press','leg-curl','wide-squat'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨/팔 E', badge: '옵션E', exercises: ['lateral-raise','dumbbell-shoulder','smith-shoulder','lateral-raise-b','dumbbell-curl','cable-pushdown'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ]
];

// ===== 남성 4주 운동 스케줄 (가슴/등/하체/어깨 분할) =====
const FOUR_WEEK_SCHEDULE_MALE = [
  // ── 1주차: 기본 분할 적응 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 복합', badge: '스쿼트', exercises: ['smith-squat','v-squat','leg-extension','leg-curl'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등 당기기', badge: '풀', exercises: ['pullup','lat-pulldown','seated-row','tbar-row'], abs: false },
    { day: '수', label: 'WED', emoji: '💪', type: '가슴 밀기', badge: '푸시', exercises: ['bench-press','chest-press','incline-press','cable-fly'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 고립', badge: '레그', exercises: ['leg-extension','leg-curl','v-squat','hip-press','deadlift'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨/팔', badge: '숄더', exercises: ['smith-shoulder','lateral-raise','standing-press','dumbbell-curl','cable-pushdown'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ],
  // ── 2주차: 강도 강화 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 복합', badge: '스쿼트', exercises: ['smith-squat','v-squat','hip-press','wide-squat'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등 헤비', badge: '헤비', exercises: ['hyperext-row','barbell-row','tbar-row','lat-pulldown','lat-pulldown-close'], abs: false },
    { day: '수', label: 'WED', emoji: '💪', type: '가슴 볼륨', badge: '볼륨', exercises: ['bench-press','incline-press','chest-press','cable-fly'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 고립', badge: '레그', exercises: ['leg-extension','leg-curl','deadlift','glute-machine'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨/팔', badge: '숄더', exercises: ['lateral-raise','dumbbell-shoulder','smith-shoulder','dumbbell-curl','cable-pushdown'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ],
  // ── 3주차: 루틴 교체 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 A', badge: '복합', exercises: ['smith-squat','v-squat','leg-extension','deadlift'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등 당기기', badge: '풀', exercises: ['pullup','lat-pulldown-close','seated-row','hyperext-row'], abs: false },
    { day: '수', label: 'WED', emoji: '💪', type: '가슴+삼두', badge: '푸시', exercises: ['bench-press','chest-press','incline-press','cable-pushdown'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 B', badge: '레그', exercises: ['leg-curl','hip-press','wide-squat','glute-machine'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨+이두', badge: '숄더', exercises: ['smith-shoulder','lateral-raise','dumbbell-shoulder','dumbbell-curl','cable-fly'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ],
  // ── 4주차: 최대 강도 ──
  [
    { day: '월', label: 'MON', emoji: '🦵', type: '하체 최대', badge: '맥스', exercises: ['smith-squat','v-squat','leg-extension','leg-curl','deadlift'], abs: true },
    { day: '화', label: 'TUE', emoji: '🔙', type: '등 최대', badge: '맥스', exercises: ['pullup','barbell-row','tbar-row','lat-pulldown','lat-pulldown-close'], abs: false },
    { day: '수', label: 'WED', emoji: '💪', type: '가슴 최대', badge: '맥스', exercises: ['bench-press','incline-press','chest-press','cable-fly'], abs: true },
    { day: '목', label: 'THU', emoji: '🌿', type: '휴식', badge: '회복', exercises: [], abs: false },
    { day: '금', label: 'FRI', emoji: '🦵', type: '하체 복합', badge: '복합', exercises: ['smith-squat','hip-press','leg-curl','wide-squat'], abs: true },
    { day: '토', label: 'SAT', emoji: '💪', type: '어깨/팔 최대', badge: '맥스', exercises: ['smith-shoulder','lateral-raise','dumbbell-shoulder','dumbbell-curl','cable-pushdown'], abs: false },
    { day: '일', label: 'SUN', emoji: '😴', type: '휴식', badge: '회복', exercises: [], abs: false }
  ]
];

// 기존 코드 호환용 (첫 주차 기본값)
const WEEKLY_SCHEDULE = FOUR_WEEK_SCHEDULE[0];

const ABS_EXERCISES = ['flutter-kick','high-plank','russian-twist'];

// ===== 식단 5단계 (바프 식단 기록 기반) =====
const DIET_STAGES = [
  {
    stage: 1, label: '1단계', duration: '6주간',
    theme: '#00ff88',
    tip: '기초 적응기 — 현미밥 기반으로 몸을 다이어트 모드에 서서히 적응시키는 단계예요.',
    breakfast: ['현미밥 100g', '닭가슴살 100g', '방울토마토 5알', '양배추·브로콜리즙', 'MCT 오일 15ml'],
    lunch:     ['현미밥 100g', '닭가슴살 100g', '방울토마토 5알', '양배추·브로콜리즙'],
    dinner:    ['감자 100g', '닭가슴살 100g', '방울토마토 5알', '양배추·브로콜리즙'],
    supplements: '유산균, 종합비타민'
  },
  {
    stage: 2, label: '2단계', duration: '4주간',
    theme: '#60a5fa',
    tip: '진행기 — 마늘즙·MCT 오일로 지방 연소 강화, 운동 후 프로틴으로 근육 회복 챙겨요.',
    breakfast: ['현미밥 100g', '닭가슴살 100g', '방울토마토 5알', '마늘즙', 'MCT 오일 15ml', '운동 후 프로틴 음료'],
    lunch:     ['현미밥 100g', '닭가슴살 100g', '방울토마토 5알', '마늘즙', 'MCT 오일 10ml', '운동 후 프로틴 음료'],
    dinner:    ['현미밥 50g + 바나나 1개', '닭가슴살 100g', '방울토마토 5알', '마늘즙', '운동 후 프로틴 음료'],
    supplements: '아침: 유산균·마그네슘 / 점심: 종합비타민·비타민C·오메가3 / 저녁: 마그네슘·비타민C'
  },
  {
    stage: 3, label: '3단계', duration: '2주간',
    theme: '#ffc800',
    tip: '강도 강화기 — 탄수화물을 줄이고 단백질을 유지해 체지방 연소에 집중하는 단계예요.',
    breakfast: ['현미밥 50g', '닭가슴살 100g', '방울토마토 5알', 'MCT 오일 15ml'],
    lunch:     ['감자 50g', '닭가슴살 100g', '방울토마토 5알', 'MCT 오일 10ml'],
    dinner:    ['삶은 계란 4개 (노른자 3개)', '방울토마토 5알'],
    supplements: '아침: 유산균·마그네슘 / 점심: 종합비타민·비타민C·오메가3 / 저녁: 마그네슘·비타민C'
  },
  {
    stage: 4, label: '4단계', duration: '10일 (바프 전)',
    theme: '#f97316',
    tip: '카보로딩 — 근육에 글리코겐을 채워 최상의 컨디션을 만드는 바프 직전 단계예요.',
    breakfast: ['닭가슴살 200g', '감자 130g', '유기농 치즈 1장'],
    lunch:     ['닭가슴살 200g', '쌀밥 130g'],
    dinner:    ['계란 3개 (노른자 1개 제거)', '운동 후 프로틴 음료'],
    supplements: '아침: 유산균·오메가3·마그네슘 / 점심: 오메가3·멀티비타민·비타민C / 저녁: 마그네슘·철분제·타우린·밀크씨슬'
  },
  {
    stage: 5, label: '5단계', duration: '4주 (유지기)',
    theme: '#a78bfa',
    tip: '유지기 — 오트밀·아스파라거스로 균형 잡힌 식단. 바프 후 몸 관리 단계예요.',
    breakfast: ['오트밀 30g', '계란 2개', '유기농 치즈 1장'],
    lunch:     ['닭가슴살 100g', '감자 100g', '아스파라거스 2줄'],
    dinner:    ['닭가슴살 100g', '감자 100g', '아스파라거스 2줄'],
    supplements: '아침: 유산균·오메가3·마그네슘 / 점심: 오메가3·멀티비타민·비타민C / 저녁: 오메가3·비타민C·마그네슘·철분제·타우린·밀크씨슬'
  }
];

// ===== 식품 대체 옵션 (재료 교체 가능 목록) =====
const FOOD_ALTS = {
  '현미밥 100g':              ['오트밀 60g', '고구마 120g', '퀴노아 80g'],
  '현미밥 50g':               ['오트밀 35g', '고구마 60g', '퀴노아 40g'],
  '현미밥 50g + 바나나 1개':  ['오트밀 35g + 바나나 1개', '고구마 80g + 블루베리 50g'],
  '닭가슴살 100g':            ['흰살생선 120g', '두부 200g', '계란 3개', '소고기 안심 100g'],
  '닭가슴살 200g':            ['흰살생선 240g', '두부 350g', '소고기 안심 180g'],
  '감자 100g':                ['고구마 90g', '단호박 110g', '현미밥 70g'],
  '감자 130g':                ['고구마 120g', '단호박 130g'],
  '감자 50g':                 ['고구마 45g', '단호박 55g'],
  '오트밀 30g':               ['현미밥 70g', '고구마 90g', '퀴노아 50g'],
  '계란 2개':                 ['닭가슴살 70g', '두부 120g', '그릭요거트 150g'],
  '삶은 계란 4개 (노른자 3개)':['닭가슴살 130g', '두부 200g + 계란 2개'],
  '바나나 1개':               ['사과 1/2개', '블루베리 100g', '고구마 50g'],
  '양배추·브로콜리즙':        ['오이 1개', '셀러리즙', '케일·시금치즙'],
  '아스파라거스 2줄':         ['브로콜리 80g', '시금치 100g', '오이 1개'],
  'MCT 오일 15ml':            ['올리브오일 10ml', '아보카도 1/4개'],
  'MCT 오일 10ml':            ['올리브오일 8ml', '아보카도 1/5개'],
};

// 남성 권장 섭취량 조정 (기본 여성 기준 +30~50%)
const MALE_PORTIONS = {
  '현미밥 100g':   '현미밥 130g',
  '현미밥 50g':    '현미밥 70g',
  '닭가슴살 100g': '닭가슴살 150g',
  '닭가슴살 200g': '닭가슴살 280g',
  '감자 100g':     '감자 130g',
  '감자 130g':     '감자 170g',
  '감자 50g':      '감자 70g',
  '오트밀 30g':    '오트밀 50g',
  '계란 2개':      '계란 3개',
  '삶은 계란 4개 (노른자 3개)': '삶은 계란 5개 (노른자 4개)',
};

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
  "남들이 쉴 때 나는 한 발짝 더 나아가는 거야. 그게 차이를 만들어.",
  "딱 1세트만 해. 진짜 1세트만. 거기서 멈춰도 돼. 근데 아마 못 멈출 걸?"
];

const CONDITION_ADVICE = {
  1: "오늘은 몸이 정말 힘든 날이에요. 격한 운동 대신 10-15분 가벼운 스트레칭이나 산책을 추천해요. 충분한 수면과 수분 보충이 최우선이에요.",
  2: "컨디션이 좋지 않네요. 오늘은 강도를 평소의 60%로 낮추세요. 유산소 대신 가벼운 근력운동(세트 수 줄이기)으로 몸을 깨워보세요.",
  3: "보통 컨디션이에요. 평소 루틴대로 진행하되, 무리하지 말고 몸 상태를 체크하면서 운동하세요. 충분한 워밍업 잊지 마세요!",
  4: "컨디션 좋은데요! 오늘은 목표 중량보다 조금 더 도전해보세요. 강도를 5-10% 올려도 괜찮아요. 최대한 집중해서 진행해요!",
  5: "오늘은 최고의 날이에요! 새로운 기록에 도전해보세요. 세트를 1-2개 추가하거나 중량을 올려봐요. 이런 날을 최대한 활용하세요!"
};

const SYMPTOM_ADVICE = {
  '근육통': '근육통이 있을 때는 아픈 부위 대신 다른 부위를 운동하세요. 폼롤러 마사지가 도움이 돼요.',
  '관절통증': '관절 통증이 있다면 오늘은 쉬세요! 부상을 무시하면 더 큰 문제가 생겨요.',
  '수면부족': '수면 부족은 근육 회복을 방해해요. 강도를 낮추고 일찍 자는 것을 목표로 해요.',
  '감기기운': '감기 기운이 있다면 땀 흘리는 운동은 피하세요. 가벼운 스트레칭만 해요.',
  '두통': '두통이 있다면 고강도 운동은 금물이에요. 물을 충분히 마시고 상태를 보며 결정하세요.',
  '피로': '피로할 때는 운동 전 5-10분 낮잠이 효과적이에요.',
  '스트레스': '스트레스에는 유산소가 최고의 해소법! 20-30분 러닝으로 엔도르핀을 분출해요.',
  '의욕저하': '의욕이 없을 땐 좋아하는 음악을 틀고 옷만 갈아입어봐요. 시작이 반이에요!'
};

// ===== 러닝 대회 =====
const RUNNING_EVENTS = [
  { name:'서울마라톤 (동아마라톤)', date:'2026-03-15', location:'서울 광화문', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'http://donga-marathon.co.kr', month:3, note:'국내 최대 마라톤 대회' },
  { name:'경주 벚꽃마라톤', date:'2026-04-05', location:'경북 경주', distances:['full','half','10k','5k'], distanceLabels:['풀마라톤','하프','10K','5K'], url:'http://gjmarathon.co.kr', month:4, note:'벚꽃 절정기 코스' },
  { name:'울산마라톤', date:'2026-04-19', location:'울산 태화강', distances:['full','half'], distanceLabels:['풀마라톤','하프'], url:'https://www.ulsanmarathon.co.kr', month:4, note:'태화강변 평탄 코스' },
  { name:'제주 국제마라톤', date:'2026-05-17', location:'제주 서귀포', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://www.jejumarathon.or.kr', month:5, note:'제주도 해안 코스' },
  { name:'강화 고려산 철쭉마라톤', date:'2026-05-03', location:'인천 강화', distances:['half','10k','5k'], distanceLabels:['하프','10K','5K'], url:'https://www.ganghwamarathon.com', month:5, note:'철쭉꽃 힐링 코스' },
  { name:'서울 한강마라톤', date:'2026-06-07', location:'서울 한강', distances:['half','10k','5k'], distanceLabels:['하프','10K','5K'], url:'https://www.seoulmarathon.or.kr', month:6, note:'한강변 야간 러닝' },
  { name:'인천마라톤', date:'2026-09-13', location:'인천 송도', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://www.incheonmarathon.kr', month:9, note:'가을 시즌 첫 대형 대회' },
  { name:'대구마라톤', date:'2026-10-11', location:'대구 두류공원', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://www.daegumarathon.co.kr', month:10, note:'대구 도심 순환 코스' },
  { name:'춘천마라톤', date:'2026-10-18', location:'강원 춘천', distances:['full','half'], distanceLabels:['풀마라톤','하프'], url:'https://chuncheonmarathon.co.kr', month:10, note:'가을 단풍 국내 최고 코스' },
  { name:'조선일보 춘천마라톤', date:'2026-10-25', location:'강원 춘천', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://chosunmarathon.co.kr', month:10, note:'45년 전통 가을 대표 대회' },
  { name:'중앙서울마라톤', date:'2026-11-08', location:'서울 여의도', distances:['full','half','10k','5k'], distanceLabels:['풀마라톤','하프','10K','5K'], url:'https://joongang-marathon.com', month:11, note:'여의도 한강공원 출발' },
  { name:'JTBC 서울마라톤', date:'2026-11-01', location:'서울 잠실', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://www.jtbcmarathon.com', month:11, note:'한강+올림픽공원 코스' },
  { name:'부산마라톤', date:'2026-11-22', location:'부산 해운대', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://www.busanmarathon.co.kr', month:11, note:'해운대~광안리 바다뷰 코스' },
  { name:'광주마라톤', date:'2026-11-15', location:'광주 월드컵경기장', distances:['full','half','10k','5k'], distanceLabels:['풀마라톤','하프','10K','5K'], url:'https://www.gjmarathon.com', month:11, note:'광주 도심 평탄 코스' },
  { name:'제주마라톤 (겨울)', date:'2026-12-13', location:'제주시', distances:['full','half','10k'], distanceLabels:['풀마라톤','하프','10K'], url:'https://www.jejumarathon.or.kr', month:12, note:'따뜻한 제주 겨울 마라톤' }
];

// ===== UTILS =====
function saveData(k,v){localStorage.setItem('ft_'+k,JSON.stringify(v));}
function loadData(k){const d=localStorage.getItem('ft_'+k);return d?JSON.parse(d):null;}
function todayStr(){return new Date().toISOString().slice(0,10);}
function formatDate(s){const d=new Date(s);return `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 (${['일','월','화','수','목','금','토'][d.getDay()]})`;}
function getDDay(s){const t=new Date();t.setHours(0,0,0,0);const diff=Math.ceil((new Date(s)-t)/(864e5));if(diff<0)return{label:'종료',cls:'past'};if(diff===0)return{label:'D-DAY',cls:'soon'};if(diff<=30)return{label:`D-${diff}`,cls:'soon'};return{label:`D-${diff}`,cls:'future'};}
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}

// ===== 칼로리 계산 =====
function calcBMR(gender,w,h,a){return gender==='female'?Math.round(10*w+6.25*h-5*a-161):Math.round(10*w+6.25*h-5*a+5);}
function calcTDEE(bmr,s,c){const t=s+c;const f=t<=2?1.375:t<=4?1.55:t<=6?1.725:1.9;return Math.round(bmr*f);}
function calcTarget(tdee,cw,tw){const d=cw-tw;if(Math.abs(d)<0.5)return tdee;if(d>0)return Math.max(tdee-Math.round(d*7700/4/7),1200);return tdee+300;}

// ===== 탭 초기화 =====
function initTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const tab=btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(s=>s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tab).classList.add('active');
      if(tab==='plan') renderPlanTab();
    });
  });
  document.querySelectorAll('.sub-tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const st=btn.dataset.subtab;
      document.querySelectorAll('.sub-tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.sub-tab-content').forEach(s=>s.style.display='none');
      btn.classList.add('active');
      document.getElementById('subtab-'+st).style.display='block';
    });
  });
}

function initChoiceCards(){
  document.querySelectorAll('.choice-card').forEach(card=>{
    card.addEventListener('click',()=>{
      document.querySelectorAll(`[data-group="${card.dataset.group}"]`).forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

function initPickers(){
  ['strength-days','strength-min','cardio-days','cardio-min'].forEach(id=>{
    const c=document.getElementById(id);
    if(!c) return;
    c.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click',()=>{
        c.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ===== 목표 저장 =====
function initGoalSave(){
  ['inp-weight','inp-target-weight','inp-bodyfat','inp-target-bodyfat'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.addEventListener('input',updateGoalPreview);
  });
  document.getElementById('btn-save-goal').addEventListener('click',()=>{
    const gender=document.querySelector('[data-group="gender"].active')?.dataset.value;
    const bodyType=document.querySelector('[data-group="bodyType"].active')?.dataset.value;
    const age=+document.getElementById('inp-age').value;
    const height=+document.getElementById('inp-height').value;
    const weight=+document.getElementById('inp-weight').value;
    const bodyfat=+document.getElementById('inp-bodyfat').value;
    const targetWeight=+document.getElementById('inp-target-weight').value;
    const targetBodyfat=+document.getElementById('inp-target-bodyfat').value;
    const startDate=document.getElementById('inp-start-date').value;
    const strengthDays=+(document.querySelector('#strength-days .active')?.dataset.val||3);
    const strengthMin=+(document.querySelector('#strength-min .active')?.dataset.val||60);
    const cardioDays=+(document.querySelector('#cardio-days .active')?.dataset.val||3);
    const cardioMin=+(document.querySelector('#cardio-min .active')?.dataset.val||30);
    if(!gender){showToast('성별을 선택해주세요!');return;}
    if(!bodyType){showToast('체질을 선택해주세요!');return;}
    if(!age||!height||!weight){showToast('나이, 키, 체중을 입력해주세요!');return;}
    if(!targetWeight){showToast('목표 체중을 입력해주세요!');return;}
    if(!startDate){showToast('시작일을 선택해주세요!');return;}
    const profile={gender,bodyType,age,height,weight,bodyfat};
    const goals={targetWeight,targetBodyfat,startDate,strengthDays,strengthMin,cardioDays,cardioMin};
    saveData('profile',profile);
    saveData('goals',goals);
    const bmr=calcBMR(gender,weight,height,age);
    const tdee=calcTDEE(bmr,strengthDays,cardioDays);
    const targetCal=calcTarget(tdee,weight,targetWeight);
    const proteinTarget=Math.round(weight*1.8);
    const mealPlans=generateMealPlans(gender,targetCal);
    saveData('plan',{bmr,tdee,targetCal,proteinTarget,mealPlans});
    showToast('✨ 맞춤 플랜이 생성됐어요!');
    updateHeaderCountdown();
    setTimeout(()=>document.querySelector('[data-tab="plan"]').click(),500);
  });
}

function updateGoalPreview(){
  const w=+document.getElementById('inp-weight').value;
  const tw=+document.getElementById('inp-target-weight').value;
  const bf=+document.getElementById('inp-bodyfat').value;
  const tbf=+document.getElementById('inp-target-bodyfat').value;
  const p=document.getElementById('goal-preview');
  if(!w||!tw){p.style.display='none';return;}
  const diff=w-tw;
  const dir=diff>0?'감량':diff<0?'증량':'유지';
  let html=`🎯 4주 목표: <strong>${dir} ${Math.abs(diff).toFixed(1)}kg</strong> (주당 약 ${Math.abs(diff/4).toFixed(1)}kg)`;
  if(bf&&tbf) html+=`<br>📊 체지방: ${bf}% → ${tbf}% (${Math.abs(bf-tbf).toFixed(1)}% ${bf>tbf?'감소':'증가'} 목표)`;
  p.innerHTML=html;p.style.display='block';
}

// 체중 차이 기반 식단 단계 추천 (1주~4주 진행)
function getRecommendedStageIndex(currentWeight, targetWeight) {
  if (!currentWeight || !targetWeight) return 0;
  const weeklyLoss = (currentWeight - targetWeight) / 4;
  if (weeklyLoss <= 0) return 0;
  if (weeklyLoss <= 0.3) return 0;      // 주 0.3kg 이하 → 1단계
  if (weeklyLoss <= 0.5) return 1;      // 주 0.5kg 이하 → 2단계
  return 2;                              // 주 0.5kg 초과 → 3단계
}

function generateMealPlans(_gender, cal) {
  return { stageIndex: 0, cal };
}

// ===== 플랜 탭 렌더 =====
let selectedDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
let selectedWeek = 0; // 0 = 1주차

function renderPlanTab(){
  const plan=loadData('plan');
  const profile=loadData('profile');
  const goals=loadData('goals');
  const planEmpty=document.getElementById('plan-empty');
  const planContent=document.getElementById('plan-content');
  if(!plan){planEmpty.style.display='block';planContent.style.display='none';return;}
  planEmpty.style.display='none';planContent.style.display='block';
  document.getElementById('plan-bmr').textContent=plan.bmr?.toLocaleString()||'-';
  document.getElementById('plan-target-cal').textContent=plan.targetCal?.toLocaleString()||'-';
  document.getElementById('plan-protein').textContent=plan.proteinTarget||'-';
  renderStreak();
  renderWeightLog();
  renderWeightProgress();
  renderWeekSelector();
  renderWeekDayGrid();
  renderDayWorkout(selectedDayIndex);
  // 식단 단계 자동 추천
  const stageIdx = getRecommendedStageIndex(profile?.weight, goals?.targetWeight);
  renderDietPlan(stageIdx, plan.targetCal);
}

function renderWeekSelector(){
  const existing = document.getElementById('week-selector-wrap');
  if(existing) existing.remove();
  const grid = document.getElementById('week-day-grid');
  const wrap = document.createElement('div');
  wrap.id = 'week-selector-wrap';
  wrap.className = 'week-selector-wrap';
  const labels = ['1주차 · 기본 적응','2주차 · 강도 강화','3주차 · 루틴 교체','4주차 · 마무리'];
  wrap.innerHTML = labels.map((l,i)=>`
    <button class="week-select-btn${i===selectedWeek?' active':''}" onclick="selectWeek(${i})">
      <span class="wsb-num">${i+1}주</span>
      <span class="wsb-label">${l.split(' · ')[1]}</span>
    </button>`).join('');
  grid.parentNode.insertBefore(wrap, grid);
}

window.selectWeek=function(w){
  selectedWeek=w;
  selectedDayIndex=0; // 주차 변경 시 월요일로 리셋
  renderWeekSelector();
  renderWeekDayGrid();
  renderDayWorkout(selectedDayIndex);
};

function getActiveSchedule(){
  const profile=loadData('profile');
  return profile?.gender==='male' ? FOUR_WEEK_SCHEDULE_MALE[selectedWeek] : FOUR_WEEK_SCHEDULE[selectedWeek];
}

function renderWeekDayGrid(){
  const schedule=getActiveSchedule();
  const grid=document.getElementById('week-day-grid');
  grid.innerHTML=schedule.map((d,i)=>`
    <button class="week-day-btn${i===selectedDayIndex?' active':''}" onclick="selectDay(${i})">
      <span class="day-label">${d.label}</span>
      <span class="day-type">${d.emoji}</span>
      <span class="day-name">${d.type}</span>
    </button>`).join('');
}

window.selectDay=function(i){
  selectedDayIndex=i;
  renderWeekDayGrid();
  renderDayWorkout(i);
};

function renderDayWorkout(i){
  const sched=getActiveSchedule()[i];
  const container=document.getElementById('day-workout-view');
  const savedChecks=loadData('exercise-checks')||{};
  const dateKey=todayStr();

  if(sched.exercises.length===0){
    container.innerHTML=`
      <div class="plan-day-header">
        <div class="plan-day-title">${sched.emoji} ${sched.type}</div>
        <div class="plan-day-meta">오늘은 충분히 쉬면서 근육을 회복시켜요 💚</div>
      </div>
      <div style="text-align:center;padding:32px 16px;color:rgba(255,255,255,0.4);">
        <div style="font-size:48px;margin-bottom:12px;">😴</div>
        <div style="font-size:14px;font-weight:600;">휴식도 운동의 일부입니다.<br>오늘은 스트레칭과 충분한 수분 보충!</div>
      </div>`;
    return;
  }

  // 완료 집계
  const allIds=[...sched.exercises,...(sched.abs?ABS_EXERCISES:[])];
  const checkKey=`${dateKey}-${i}`;
  const checks=savedChecks[checkKey]||{};
  const doneCount=Object.values(checks).filter(Boolean).length;
  const totalCount=allIds.length;
  const pct=totalCount>0?Math.round(doneCount/totalCount*100):0;

  const completionBanner=doneCount===totalCount&&totalCount>0?`
    <div class="completion-banner show">
      <span class="big-emoji">🎉</span>
      <h3>오늘 운동 완료!</h3>
      <p>정말 대단해요! 유산소도 잊지 마세요 💪</p>
    </div>`:'';

  const profile=loadData('profile');
  const isMale=profile?.gender==='male';
  const genderBadge=isMale
    ? `<span class="gender-workout-badge male">♂ 남성 · 8-12회 고중량</span>`
    : `<span class="gender-workout-badge female">♀ 여성 · 15-20회 고반복</span>`;

  const exerciseCards=sched.exercises.map(id=>renderExerciseCard(id,checks[id]||false,checkKey)).join('');
  const absHeader=sched.abs?`<div class="abs-section-header"><i class="fas fa-fire"></i> 복근 운동 (매일 꾸준히)</div>`:'';
  const absCards=sched.abs?ABS_EXERCISES.map(id=>renderExerciseCard(id,checks[id]||false,checkKey)).join(''):'';

  container.innerHTML=`
    <div class="plan-day-header">
      <div class="plan-day-title">${sched.emoji} ${sched.type} ${genderBadge}</div>
      <div class="plan-day-meta">${sched.exercises.length}개 동작 · 복근 ${sched.abs?'포함':'제외'}</div>
    </div>
    <div class="progress-wrap">
      <div class="progress-label">
        <span>오늘의 진행률</span>
        <span>${doneCount} / ${totalCount} 완료</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
    </div>
    ${exerciseCards}
    ${absHeader}
    ${absCards}
    ${completionBanner}`;
}

function renderExerciseCard(id, checked, checkKey){
  const ex=EXERCISE_DB[id];
  if(!ex) return '';
  return `
    <div class="exercise-card${checked?' checked':''}" id="excard-${id}">
      <div class="exercise-card-top" onclick="toggleExpand('${id}')">
        <div class="exercise-illus">${ex.svg}</div>
        <div class="exercise-info">
          <div class="exercise-name">${ex.name}</div>
          <div class="exercise-name-en">${ex.nameEn}</div>
          <div class="exercise-tags">
            <span class="tag tag-sets">${ex.sets}</span>
            <span class="tag tag-reps">${ex.reps}</span>
            <span class="tag tag-rest">휴식 ${ex.rest}</span>
          </div>
        </div>
        <button class="exercise-check${checked?' done':''}" onclick="toggleCheck(event,'${id}','${checkKey}')">
          ${checked?'✓':'○'}
        </button>
      </div>
      <div class="exercise-detail" id="detail-${id}">
        <div class="exercise-detail-inner">
          <div class="exercise-illus-large">${ex.svg}</div>
          <div class="target-muscles">
            <div class="target-label">타겟 근육</div>
            <div class="muscle-tags">${ex.target.map(m=>`<span class="muscle-tag">${m}</span>`).join('')}</div>
          </div>
          <div class="steps-section">
            <div class="steps-label">동작 방법</div>
            ${ex.steps.map((s,i)=>`
              <div class="step-item">
                <span class="step-num">${i+1}</span>
                <span class="step-text">${s}</span>
              </div>`).join('')}
          </div>
          <div class="tip-box">${ex.tip}</div>
        </div>
      </div>
    </div>`;
}

window.toggleExpand=function(id){
  const card=document.getElementById('excard-'+id);
  card.classList.toggle('expanded');
};

window.toggleCheck=function(e,id,checkKey){
  e.stopPropagation();
  const checks=loadData('exercise-checks')||{};
  if(!checks[checkKey]) checks[checkKey]={};
  checks[checkKey][id]=!checks[checkKey][id];
  saveData('exercise-checks',checks);
  renderDayWorkout(selectedDayIndex);
};

// 식단 아이템 렌더 (대체 재료 + 성별 섭취량 조정)
function renderDietItem(item, isMale, uid){
  const adjItem = isMale && MALE_PORTIONS[item] ? MALE_PORTIONS[item] : item;
  const isMaleAdj = isMale && MALE_PORTIONS[item];
  const alts = FOOD_ALTS[item] || [];
  const altId = `alt-${uid}`;
  return `
    <div class="diet-item-wrap">
      <div class="diet-item-row">
        <span class="diet-item-dot">•</span>
        <span class="diet-item-text${isMaleAdj?' male-adj':''}">${adjItem}${isMaleAdj?'<span class="male-badge">♂</span>':''}</span>
        ${alts.length?`<button class="diet-alt-toggle" onclick="toggleAlts('${altId}')">대체↕</button>`:''}
      </div>
      ${alts.length?`<div class="diet-alts-wrap" id="${altId}" style="display:none;">${alts.map(a=>`<span class="diet-alt-chip">↔ ${a}</span>`).join('')}</div>`:''}
    </div>`;
}

let _dietAltCounter = 0;
function renderDietPlan(recommendedIdx, targetCal){
  const container=document.getElementById('diet-plan');
  if(!container) return;

  const profile=loadData('profile');
  const isMale = profile?.gender === 'male';

  // 주차별 식단 단계 진행 (3~4주차에는 한 단계 올라감)
  const stageProgression = selectedWeek >= 2 ? Math.min(recommendedIdx + 1, DIET_STAGES.length - 1) : recommendedIdx;
  const currentIdx = stageProgression;
  const stage = DIET_STAGES[currentIdx];

  const genderNote = isMale
    ? `<div class="diet-gender-note male">♂ 남성 모드 — 탄수화물 +30%, 단백질 +50% 조정 적용됨<br><small>♂ 표시 항목은 남성 권장량으로 자동 변경됩니다</small></div>`
    : `<div class="diet-gender-note female">♀ 여성 모드 — 원본 레시피 기준 (55~60kg 여성 적합)<br><small>남성은 목표설정에서 성별을 남성으로 변경하세요</small></div>`;

  const formula = targetCal
    ? `<div class="diet-formula-box">📐 <strong>기초대사량 × 1.3 − 500 kcal</strong> 공식 적용<br>나의 목표 섭취량 <strong style="color:${stage.theme}">${targetCal.toLocaleString()} kcal</strong> / 일 · 주 −0.3kg 목표<br><small style="color:rgba(255,255,255,0.4)">남녀 모두 동일 공식 적용 (성별 BMR 차이 반영됨)</small></div>`
    : '';

  const stageTabs = DIET_STAGES.map((s,i)=>`
    <button class="diet-stage-btn${i===currentIdx?' active':''}" style="${i===currentIdx?`background:${s.theme}22;border-color:${s.theme};color:${s.theme}`:''}" onclick="selectDietStage(${i})">
      ${s.label}${i===recommendedIdx?'<span class="diet-rec-dot">추천</span>':''}
    </button>`).join('');

  const mealRows = [
    {label:'🌅 아침', items: stage.breakfast},
    {label:'☀️ 점심', items: stage.lunch},
    {label:'🌙 저녁', items: stage.dinner},
  ];

  const mealHtml = mealRows.map(m=>`
    <div class="diet-meal" style="border-left:3px solid ${stage.theme}">
      <div class="diet-meal-title" style="color:${stage.theme}">${m.label}</div>
      <div class="diet-meal-items">${m.items.map(it=>renderDietItem(it, isMale, ++_dietAltCounter)).join('')}</div>
    </div>`).join('');

  container.innerHTML=`
    ${formula}
    ${genderNote}
    <div class="diet-stage-info" style="border-color:${stage.theme}">
      <div class="diet-stage-badge" style="background:${stage.theme}22;color:${stage.theme}">${stage.label} · ${stage.duration}</div>
      <div class="diet-stage-tip">💡 ${stage.tip}</div>
    </div>
    <div class="diet-stage-tabs">${stageTabs}</div>
    ${mealHtml}
    <div class="diet-meal" style="border-left:3px solid #a78bfa">
      <div class="diet-meal-title" style="color:#a78bfa">💊 영양제</div>
      <div class="diet-meal-items" style="font-size:12px;line-height:1.9;color:rgba(255,255,255,0.65);">${stage.supplements}</div>
    </div>
    <div class="diet-avoid-box">
      <div class="diet-avoid-title">🚫 피해야 할 음식</div>
      <div class="diet-avoid-items">밀가루(빵·라면·파스타) · 튀긴 음식 · 과자·사탕 · 탄산음료·과일주스 · 야식</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:4px;">💡 완전 금지보다 주 1회 치팅데이로 스트레스 관리</div>
    </div>`;
}

window.toggleAlts=function(id){
  const el=document.getElementById(id);
  if(el) el.style.display=el.style.display==='none'?'flex':'none';
};

window.selectDietStage=function(idx){
  const plan=loadData('plan');
  renderDietPlan(idx, plan?.targetCal);
};

// ===== 실행 의도 =====
function initIntention(){
  // 다중 선택 가능한 요일 피커
  document.querySelectorAll('#intention-days .day-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.classList.toggle('active');
      updateIntentionPreview();
    });
  });
  ['#intention-time .time-btn','#intention-place .time-btn'].forEach(sel=>{
    document.querySelectorAll(sel).forEach(btn=>{
      btn.addEventListener('click',()=>{
        btn.closest('.time-picker').querySelectorAll('button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        updateIntentionPreview();
      });
    });
  });
  document.getElementById('btn-save-intention').addEventListener('click',()=>{
    const days=Array.from(document.querySelectorAll('#intention-days .day-btn.active')).map(b=>b.dataset.val);
    const time=document.querySelector('#intention-time .time-btn.active')?.dataset.val;
    const place=document.querySelector('#intention-place .time-btn.active')?.dataset.val;
    if(!days.length||!time||!place){showToast('요일, 시간, 장소를 모두 선택해주세요!');return;}
    saveData('intention',{days,time,place});
    showToast('✅ 실행 의도 저장! 약속을 지켜봐요 💪');
  });
  restoreIntention();
}

function updateIntentionPreview(){
  const days=Array.from(document.querySelectorAll('#intention-days .day-btn.active')).map(b=>b.dataset.val);
  const time=document.querySelector('#intention-time .time-btn.active')?.dataset.val;
  const place=document.querySelector('#intention-place .time-btn.active')?.dataset.val;
  const p=document.getElementById('intention-preview');
  if(!days.length&&!time&&!place){p.style.display='none';return;}
  const d=days.length?days.join('·')+'요일':'___';
  const t=time||'___시';
  const pl=place||'___';
  p.innerHTML=`🧠 <strong>"나는 매주 ${d} ${t}에 ${pl}에서 운동한다"</strong>`;
  p.style.display='block';
}

function restoreIntention(){
  const it=loadData('intention');
  if(!it) return;
  it.days?.forEach(d=>{
    const b=document.querySelector(`#intention-days [data-val="${d}"]`);
    if(b) b.classList.add('active');
  });
  if(it.time){const b=document.querySelector(`#intention-time [data-val="${it.time}"]`);if(b)b.classList.add('active');}
  if(it.place){const b=document.querySelector(`#intention-place [data-val="${it.place}"]`);if(b)b.classList.add('active');}
  updateIntentionPreview();
}

// ===== 스트릭 계산 =====
function calcStreak(){
  const checks=loadData('exercise-checks')||{};
  let streak=0;
  const today=new Date();
  for(let i=0;i<90;i++){
    const d=new Date(today);d.setDate(d.getDate()-i);
    const dateStr=d.toISOString().slice(0,10);
    // 해당 날짜에 체크된 운동이 하나라도 있으면 운동한 날
    const dayChecks=Object.entries(checks).filter(([k])=>k.startsWith(dateStr));
    const hasDone=dayChecks.some(([,v])=>Object.values(v).some(Boolean));
    if(hasDone) streak++;
    else if(i>0) break; // 오늘은 아직 안 했을 수 있으므로 i===0은 pass
  }
  return streak;
}

function renderStreak(){
  const streak=calcStreak();
  const el=document.getElementById('streak-count');
  const sub=document.getElementById('streak-sub');
  const tip=document.getElementById('streak-tip');
  if(!el) return;
  el.textContent=streak;
  sub.textContent='일 연속';
  if(streak===0) tip.textContent='오늘 첫 운동을 시작해봐요!';
  else if(streak<3) tip.textContent='잘 시작했어요! 계속 이어가요 🔥';
  else if(streak<7) tip.textContent='습관이 만들어지고 있어요! 💪';
  else tip.textContent=`${streak}일 연속! 멈추면 아깝잖아요 🏆`;
}

// ===== 체중 기록 =====
function initWeightLog(){
  const btn=document.getElementById('btn-log-weight');
  if(!btn) return;
  btn.addEventListener('click',()=>{
    const w=+document.getElementById('inp-log-weight').value;
    if(!w||w<30||w>300){showToast('체중을 올바르게 입력해주세요!');return;}
    const logs=loadData('weight-logs')||[];
    logs.unshift({date:todayStr(),weight:w});
    saveData('weight-logs',logs.slice(0,30)); // 최근 30개만 보관
    document.getElementById('inp-log-weight').value='';
    renderWeightLog();
    renderWeightProgress();
    showToast('체중 기록됐어요! 📊');
  });
  renderWeightLog();
  renderWeightProgress();
}

function renderWeightLog(){
  const logs=loadData('weight-logs')||[];
  const container=document.getElementById('weight-log-list');
  if(!container) return;
  if(!logs.length){container.innerHTML='<div class="weight-log-empty">아직 기록이 없어요. 오늘 체중을 기록해보세요!</div>';return;}
  container.innerHTML=logs.slice(0,7).map((l,i)=>{
    const prev=logs[i+1];
    const diff=prev?+(l.weight-prev.weight).toFixed(1):null;
    const diffHtml=diff!==null?`<span class="wl-diff ${diff<0?'down':diff>0?'up':''}">${diff>0?'+':''}${diff}kg</span>`:'';
    return `<div class="wl-row"><span class="wl-date">${l.date.slice(5).replace('-','/')}</span><span class="wl-weight">${l.weight}kg</span>${diffHtml}</div>`;
  }).join('');
}

function renderWeightProgress(){
  const goals=loadData('goals');
  const logs=loadData('weight-logs')||[];
  const profile=loadData('profile');
  const el=document.getElementById('wp-numbers');
  const bar=document.getElementById('wp-bar');
  const pct=document.getElementById('wp-pct');
  if(!el) return;
  const startW=profile?.weight;
  const targetW=goals?.targetWeight;
  const currentW=logs[0]?.weight||startW;
  if(!startW||!targetW||!currentW){el.textContent='목표 체중을 설정해주세요';return;}
  const total=Math.abs(startW-targetW);
  const done=Math.abs(startW-currentW);
  const progress=total>0?Math.min(Math.round(done/total*100),100):0;
  el.textContent=`${currentW}kg → ${targetW}kg`;
  bar.style.width=`${progress}%`;
  pct.textContent=`${progress}% 달성`;
}

// ===== 오늘기록 탭 =====
function initTodayTab(){
  document.getElementById('today-date-label').textContent=formatDate(todayStr());
  const slider=document.getElementById('condition-slider');
  slider.addEventListener('input',updateConditionDisplay);
  updateConditionDisplay();
  document.getElementById('btn-save-condition').addEventListener('click',saveCondition);
  document.getElementById('btn-add-workout').addEventListener('click',()=>{
    const f=document.getElementById('workout-form-today');f.style.display=f.style.display==='none'?'block':'none';
  });
  document.getElementById('btn-cancel-workout').addEventListener('click',()=>document.getElementById('workout-form-today').style.display='none');
  document.getElementById('btn-save-workout').addEventListener('click',saveWorkout);
  document.getElementById('btn-add-meal').addEventListener('click',()=>{
    const f=document.getElementById('meal-form-today');f.style.display=f.style.display==='none'?'block':'none';
  });
  document.getElementById('btn-cancel-meal').addEventListener('click',()=>document.getElementById('meal-form-today').style.display='none');
  document.getElementById('btn-save-meal').addEventListener('click',saveMeal);
  document.getElementById('btn-save-memo').addEventListener('click',()=>{
    const log=getTodayLog();log.memo=document.getElementById('today-memo').value;saveTodayLog(log);showToast('메모 저장됐어요!');
  });
  document.querySelectorAll('.symptom-check input').forEach(el=>{
    el.addEventListener('change',()=>updateConditionDisplay());
  });
}

function updateConditionDisplay(){
  const val=+document.getElementById('condition-slider').value;
  const labels=['','😫 최악이에요','😕 별로에요','😐 보통이에요','😊 좋아요','🔥 최고예요!'];
  const bgs=['','rgba(239,68,68,0.1)','rgba(249,115,22,0.1)','rgba(255,255,255,0.04)','rgba(16,185,129,0.1)','rgba(0,255,136,0.1)'];
  const colors=['','#f87171','#fb923c','rgba(255,255,255,0.6)','#34d399','#00ff88'];
  const d=document.getElementById('condition-display');
  d.textContent=labels[val];d.style.background=bgs[val];d.style.color=colors[val];
  const mb=document.getElementById('motivation-box');
  if(val<=2){mb.textContent=MOTIVATION_QUOTES[Math.floor(Math.random()*MOTIVATION_QUOTES.length)];mb.style.display='block';}
  else mb.style.display='none';
  const checked=Array.from(document.querySelectorAll('.symptom-check input:checked')).map(e=>e.value);
  let advice=CONDITION_ADVICE[val];
  if(checked.length>0){const extra=checked.map(s=>SYMPTOM_ADVICE[s]).filter(Boolean);if(extra.length)advice+='\n\n⚠️ '+extra.join('\n');}
  const ab=document.getElementById('advice-box');ab.style.whiteSpace='pre-line';ab.textContent=advice;
}

function getTodayLog(){const all=loadData('dailyLogs')||{};return all[todayStr()]||{workouts:[],meals:[],condition:3,symptoms:[],memo:''};}
function saveTodayLog(log){const all=loadData('dailyLogs')||{};all[todayStr()]=log;saveData('dailyLogs',all);}

function saveCondition(){
  const val=+document.getElementById('condition-slider').value;
  const symptoms=Array.from(document.querySelectorAll('.symptom-check input:checked')).map(e=>e.value);
  const log=getTodayLog();log.condition=val;log.symptoms=symptoms;saveTodayLog(log);showToast('컨디션 저장됐어요!');
}

function saveWorkout(){
  const type=document.getElementById('wt-type').value;
  const dur=+document.getElementById('wt-duration').value;
  const cal=+document.getElementById('wt-calories').value;
  const notes=document.getElementById('wt-notes').value;
  if(!type||!dur){showToast('운동 종류와 시간을 입력해주세요!');return;}
  const log=getTodayLog();
  log.workouts.push({id:Date.now(),type,duration:dur,calories:cal||0,notes,time:new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'})});
  saveTodayLog(log);
  ['wt-type','wt-duration','wt-calories','wt-notes'].forEach(id=>{document.getElementById(id).value='';});
  document.getElementById('workout-form-today').style.display='none';
  renderTodayRecords();showToast('운동 기록됐어요! 💪');
}

function saveMeal(){
  const type=document.getElementById('ml-type').value;
  const name=document.getElementById('ml-name').value;
  const cal=+document.getElementById('ml-calories').value;
  const notes=document.getElementById('ml-notes').value;
  if(!type||!name||!cal){showToast('식사 종류, 음식명, 칼로리를 입력해주세요!');return;}
  const log=getTodayLog();
  log.meals.push({id:Date.now(),type,name,calories:cal,notes,time:new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'})});
  saveTodayLog(log);
  ['ml-type','ml-name','ml-calories','ml-notes'].forEach(id=>{document.getElementById(id).value='';});
  document.getElementById('meal-form-today').style.display='none';
  renderTodayRecords();showToast('식사 기록됐어요! 🍽️');
}

function renderTodayRecords(){
  const log=getTodayLog();
  if(log.condition) document.getElementById('condition-slider').value=log.condition;
  document.querySelectorAll('.symptom-check input').forEach(el=>{el.checked=log.symptoms?.includes(el.value);});
  if(log.memo) document.getElementById('today-memo').value=log.memo;
  updateConditionDisplay();

  const wl=document.getElementById('workout-list-today');
  wl.innerHTML=log.workouts.length===0?'<div style="color:rgba(255,255,255,0.3);font-size:13px;padding:10px 0;">아직 운동 기록이 없어요</div>':
    log.workouts.map(w=>`
      <div class="record-item">
        <div class="record-item-info">
          <div class="record-item-type">${w.type}</div>
          <div class="record-item-detail">${w.duration}분${w.calories?` · ${w.calories}kcal`:''} · ${w.time}</div>
          ${w.notes?`<div class="record-item-note">${w.notes}</div>`:''}
        </div>
        <button class="btn-delete" onclick="deleteWorkout(${w.id})"><i class="fas fa-trash"></i></button>
      </div>`).join('');

  const ml=document.getElementById('meal-list-today');
  ml.innerHTML=log.meals.length===0?'<div style="color:rgba(255,255,255,0.3);font-size:13px;padding:10px 0;">아직 식사 기록이 없어요</div>':
    log.meals.map(m=>`
      <div class="record-item">
        <div class="record-item-info">
          <div class="record-item-type">${m.type} · ${m.name}</div>
          <div class="record-item-detail">${m.calories}kcal · ${m.time}</div>
          ${m.notes?`<div class="record-item-note">${m.notes}</div>`:''}
        </div>
        <button class="btn-delete" onclick="deleteMeal(${m.id})"><i class="fas fa-trash"></i></button>
      </div>`).join('');

  const totalCal=log.meals.reduce((s,m)=>s+(m.calories||0),0);
  const burnedCal=log.workouts.reduce((s,w)=>s+(w.calories||0),0);
  const plan=loadData('plan');const targetCal=plan?.targetCal||0;
  const sumEl=document.getElementById('calorie-today-summary');
  if(log.meals.length>0||log.workouts.length>0){
    const net=totalCal-burnedCal;const rem=targetCal?targetCal-totalCal:null;
    sumEl.innerHTML=`
      <div class="cal-today-item"><div class="cal-today-val">${totalCal.toLocaleString()}</div><div class="cal-today-label">섭취 kcal</div></div>
      <div class="cal-today-item"><div class="cal-today-val" style="color:#fb923c">${burnedCal.toLocaleString()}</div><div class="cal-today-label">소모 kcal</div></div>
      <div class="cal-today-item"><div class="cal-today-val" style="color:#60a5fa">${net.toLocaleString()}</div><div class="cal-today-label">순 kcal</div></div>
      ${rem!==null?`<div class="cal-today-item"><div class="cal-today-val" style="color:${rem>=0?'#34d399':'#f87171'}">${Math.abs(rem).toLocaleString()}</div><div class="cal-today-label">${rem>=0?'목표 여유':'목표 초과'}</div></div>`:''}`;
  } else sumEl.innerHTML='';
}

window.deleteWorkout=function(id){const log=getTodayLog();log.workouts=log.workouts.filter(w=>w.id!==id);saveTodayLog(log);renderTodayRecords();showToast('삭제됐어요');};
window.deleteMeal=function(id){const log=getTodayLog();log.meals=log.meals.filter(m=>m.id!==id);saveTodayLog(log);renderTodayRecords();showToast('삭제됐어요');};

// ===== 러닝 대회 =====
function renderRunningEvents(monthFilter){
  const list=document.getElementById('running-events-list');
  const events=monthFilter==='all'?RUNNING_EVENTS:RUNNING_EVENTS.filter(e=>e.month===+monthFilter);
  if(!events.length){list.innerHTML='<div class="empty-state"><i class="fas fa-calendar-xmark"></i><p>해당 월에 등록된 대회가 없어요</p></div>';return;}
  const sorted=[...events].sort((a,b)=>new Date(a.date)-new Date(b.date));
  list.innerHTML=sorted.map(e=>{
    const dd=getDDay(e.date);
    const d=new Date(e.date);
    const badges=e.distances.map((dist,i)=>{
      const cls=dist==='full'?'full':dist==='half'?'half':dist==='10k'?'ten':'five';
      return `<span class="distance-badge ${cls}">${e.distanceLabels[i]}</span>`;
    }).join('');
    return `
      <a class="event-card" href="${e.url}" target="_blank" rel="noopener noreferrer">
        <div class="event-card-header">
          <div class="event-name">${e.name}</div>
          <div class="event-dday ${dd.cls}">${dd.label}</div>
        </div>
        <div class="event-meta">
          <span><i class="fas fa-calendar"></i>${d.getMonth()+1}월 ${d.getDate()}일</span>
          <span><i class="fas fa-location-dot"></i>${e.location}</span>
        </div>
        <div class="event-distance">${badges}</div>
        ${e.note?`<div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px;">💡 ${e.note}</div>`:''}
      </a>`;
  }).join('');
}

function initRunningFilter(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');renderRunningEvents(btn.dataset.month);
    });
  });
}

// ===== 진행현황 =====
function renderProgress(){renderFourWeekProgress();renderGoals();renderHistory();}

function renderFourWeekProgress(){
  const goals=loadData('goals');const c=document.getElementById('four-week-progress');
  if(!goals){c.innerHTML='<div class="empty-state">목표설정 탭에서 설정 후 확인하세요.</div>';return;}
  const start=new Date(goals.startDate);const today=new Date();
  const elapsed=Math.floor((today-start)/864e5);const cw=Math.min(Math.ceil(elapsed/7),4);
  const badges=[1,2,3,4].map(w=>{
    const cls=w<cw?'done':w===cw?'current':'';
    const icon=w<cw?'✅':w===cw?'🔥':'⏳';
    return `<div class="week-badge ${cls}"><div class="week-num">${icon}</div>${w}주차${w===cw?'<br><small style="font-size:9px;">진행중</small>':''}</div>`;
  }).join('');
  const pct=Math.min(Math.round(elapsed/28*100),100);
  c.innerHTML=`
    <div class="week-progress-grid">${badges}</div>
    <div style="background:rgba(255,255,255,0.06);border-radius:6px;height:8px;margin:12px 0;">
      <div style="background:linear-gradient(90deg,#00ff88,#00d4aa);height:100%;border-radius:6px;width:${pct}%;box-shadow:0 0 8px rgba(0,255,136,0.3);transition:width .5s;"></div>
    </div>
    <div class="progress-info">
      📅 시작일: <strong>${formatDate(goals.startDate)}</strong><br>
      ⏰ 진행: <strong>${Math.max(elapsed,0)}일 경과 / 28일</strong> (${pct}%)<br>
      ⚖️ 목표 체중: <strong>${goals.targetWeight}kg</strong><br>
      📊 목표 체지방: <strong>${goals.targetBodyfat||'-'}%</strong>
    </div>`;
}

function initGoalManagement(){
  ['monthly','weekly','daily'].forEach(type=>{
    document.getElementById(`btn-add-${type}`).addEventListener('click',()=>{
      const f=document.getElementById(`${type}-form`);f.style.display=f.style.display==='none'?'block':'none';
    });
    document.getElementById(`btn-cancel-${type}`).addEventListener('click',()=>document.getElementById(`${type}-form`).style.display='none');
    document.getElementById(`btn-save-${type}`).addEventListener('click',()=>{
      const el=document.getElementById(`${type}-goal-text`);const text=el.value.trim();
      if(!text){showToast('목표를 입력해주세요!');return;}
      const goals=loadData(`${type}Goals`)||[];
      goals.unshift({id:Date.now(),text,done:false});
      saveData(`${type}Goals`,goals);el.value='';
      document.getElementById(`${type}-form`).style.display='none';
      renderGoals();showToast('목표가 추가됐어요!');
    });
  });
}

function renderGoals(){
  ['monthly','weekly','daily'].forEach(type=>{
    const goals=loadData(`${type}Goals`)||[];
    const list=document.getElementById(`${type}-goals-list`);
    list.innerHTML=goals.length===0?`<div style="color:rgba(255,255,255,0.25);font-size:13px;padding:10px 0;">목표를 추가해보세요!</div>`:
      goals.map(g=>`
        <div class="goal-item${g.done?' done':''}" id="goal-${g.id}">
          <input type="checkbox" class="goal-checkbox"${g.done?' checked':''} onchange="toggleGoal('${type}',${g.id})">
          <span class="goal-text">${g.text}</span>
          <button class="btn-delete-goal" onclick="deleteGoal('${type}',${g.id})"><i class="fas fa-times"></i></button>
        </div>`).join('');
  });
}

window.toggleGoal=function(type,id){
  const goals=loadData(`${type}Goals`)||[];const g=goals.find(g=>g.id===id);if(g)g.done=!g.done;
  saveData(`${type}Goals`,goals);renderGoals();
};
window.deleteGoal=function(type,id){
  saveData(`${type}Goals`,(loadData(`${type}Goals`)||[]).filter(g=>g.id!==id));renderGoals();showToast('삭제됐어요');
};

function renderHistory(){
  const logs=loadData('dailyLogs')||{};const list=document.getElementById('history-list');
  const dates=Object.keys(logs).sort((a,b)=>b.localeCompare(a));
  const emoji={1:'😫',2:'😕',3:'😐',4:'😊',5:'🔥'};
  list.innerHTML=dates.length===0?
    '<div class="empty-state"><i class="fas fa-history"></i><p>아직 기록된 데이터가 없어요.<br>오늘 기록 탭에서 시작하세요!</p></div>':
    dates.map(date=>{
      const log=logs[date];
      const wc=log.workouts?.length||0;const tc=log.meals?.reduce((s,m)=>s+(m.calories||0),0)||0;
      const bc=log.workouts?.reduce((s,w)=>s+(w.calories||0),0)||0;
      return `
        <div class="history-item">
          <div class="history-date-header">
            <span>${formatDate(date)}</span>
            <span class="history-condition">${emoji[log.condition||3]} ${log.condition||'-'}/5</span>
          </div>
          <div class="history-body">
            ${wc>0?`💪 운동 ${wc}건 (${bc}kcal)<br>`:''}
            ${tc>0?`🍽️ 식사 ${log.meals?.length||0}건 (${tc.toLocaleString()}kcal)<br>`:''}
            ${log.symptoms?.length?`⚠️ ${log.symptoms.join(', ')}<br>`:''}
            ${log.memo?`📝 "${log.memo}"`:''}
            ${!wc&&!tc&&!log.memo?'기록 없음':''}
          </div>
        </div>`;
    }).join('');
}

function updateHeaderCountdown(){
  const goals=loadData('goals');const h=document.getElementById('header-countdown');
  if(!goals?.startDate){h.textContent='목표를 설정하고 변화를 시작하세요';return;}
  const end=new Date(goals.startDate);end.setDate(end.getDate()+28);
  const elapsed=Math.max(0,Math.floor((new Date()-new Date(goals.startDate))/864e5));
  const rem=Math.ceil((end-new Date())/864e5);
  h.textContent=rem<=0?'🎉 4주 챌린지 완료!':`🔥 D+${elapsed} · 종료까지 ${rem}일 남았어요`;
}

function restoreProfile(){
  const profile=loadData('profile');const goals=loadData('goals');if(!profile||!goals)return;
  const gc=document.querySelector(`[data-group="gender"][data-value="${profile.gender}"]`);if(gc)gc.classList.add('active');
  const bc=document.querySelector(`[data-group="bodyType"][data-value="${profile.bodyType}"]`);if(bc)bc.classList.add('active');
  if(profile.age) document.getElementById('inp-age').value=profile.age;
  if(profile.height) document.getElementById('inp-height').value=profile.height;
  if(profile.weight) document.getElementById('inp-weight').value=profile.weight;
  if(profile.bodyfat) document.getElementById('inp-bodyfat').value=profile.bodyfat;
  if(goals.targetWeight) document.getElementById('inp-target-weight').value=goals.targetWeight;
  if(goals.targetBodyfat) document.getElementById('inp-target-bodyfat').value=goals.targetBodyfat;
  if(goals.startDate) document.getElementById('inp-start-date').value=goals.startDate;
  const sp=(cid,val)=>{const b=document.querySelector(`#${cid} [data-val="${val}"]`);if(b)b.classList.add('active');};
  if(goals.strengthDays) sp('strength-days',goals.strengthDays);
  if(goals.strengthMin) sp('strength-min',goals.strengthMin);
  if(goals.cardioDays) sp('cardio-days',goals.cardioDays);
  if(goals.cardioMin) sp('cardio-min',goals.cardioMin);
  updateGoalPreview();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
  initTabs();initChoiceCards();initPickers();
  initGoalSave();
  initIntention();
  initWeightLog();
  restoreProfile();updateHeaderCountdown();
  const sdEl=document.getElementById('inp-start-date');
  if(!sdEl.value) sdEl.value=todayStr();
});
