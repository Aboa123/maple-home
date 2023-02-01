export const jobGroup = {
  warrior: "전사",
  magician: "마법사",
  archer: "궁수",
  thief: "도적",
  pirates: "해적",
};

export const species = {
  adventure: "모험가",
  cygnus: "시그너스 기사단",
  resistance: "레지스탕스",
  demon: "데몬",
  hero: "영웅",
  nova: "노바",
  ref: "레프",
  anima: "아니마",
  zero: "제로",
  kinesis: "키네시스",
};

export const stat = {
  str: "힘",
  int: "지능",
  dex: "민첩",
  luk: "행운",
  hp: "체력",
};

export const weaponType = {
  one: {
    oneHandedSword: "한손검",
    oneHandedAxe: "한손도끼",
    oneHandedNluntWeapon: "한손둔기",
    staff: "스태프",
    wand: "완드",
    shiningRod: "샤이닝로드",
    dagger: "단검",
    cane: "케인",
    desperado: "데스페라도",
    whipBlade: "에너지소드",
    soulShooter: "소울슈터",
    psyLimiter: "ESP리미터",
    chain: "체인",
    magicGauntlet: "매직건틀릿",
    buchae: "부채",
    tuner: "튜너",
    breathShooter: "브레스슈터",
  },
  two: {
    twoHandedSword: "두손검",
    twoHandedAxe: "두손도끼",
    twoHandedBluntWeapon: "두손둔기",
    spear: "창",
    polearm: "폴암",
    zero: "태도&대검",
    revolverGauntlet: "건틀렛 리볼버",
    bow: "활",
    crossbow: "석궁",
    dualBowgun: "듀얼 보우건",
    ancientBow: "에이션트 보우건",
    claw: "아대",
    chakram: "차크람",
    gun: "건",
    knuckle: "너클",
    handCannon: "핸드캐논",
  },
};

const data = [
  {
    name: "히어로",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.adventure,
    image: require("../charaters/hero.png"),
    weapon: [
      weaponType.one.oneHandedSword,
      weaponType.one.oneHandedAxe,
      weaponType.two.twoHandedAxe,
      weaponType.two.twoHandedSword,
    ],
    core: 2,
    difficulty: 1,
    pay: "high",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "팔라딘",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.adventure,
    image: require("../charaters/paladin.png"),
    weapon: [
      weaponType.one.oneHandedSword,
      weaponType.one.oneHandedNluntWeapon,
      weaponType.two.twoHandedSword,
      weaponType.two.twoHandedBluntWeapon,
    ],
    core: 1,
    difficulty: 1,
    pay: "row",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "다크나이트",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.adventure,
    image: require("../charaters/dark-knight.png"),
    weapon: [weaponType.two.spear, weaponType.two.polearm],
    core: 1,
    difficulty: 2,
    pay: "row",
    oneKill: "row",
    hunt: 2,
    boss: 3,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "아크메이지(썬,콜)",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.adventure,
    image: require("../charaters/ice.png"),
    weapon: [weaponType.one.staff, weaponType.one.wand],
    core: 4,
    difficulty: 2,
    pay: "middle",
    oneKill: "middle",
    hunt: 5,
    boss: 3,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "아크메이지(불,독)",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.adventure,
    image: require("../charaters/fire.png"),
    weapon: [weaponType.one.staff, weaponType.one.wand],
    core: 5,
    difficulty: 4,
    pay: "high",
    oneKill: "middle",
    hunt: 5,
    boss: 2,
    utili: 4,
    damageTime: "none",
  },
  {
    name: "비숍",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.adventure,
    image: require("../charaters/bishop.png"),
    weapon: [weaponType.one.staff, weaponType.one.wand],
    core: 1,
    difficulty: 1,
    pay: "row",
    oneKill: "middle",
    hunt: 3,
    boss: 5,
    utili: 5,
    damageTime: "none",
  },
  {
    name: "신궁",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.adventure,
    image: require("../charaters/marksman.png"),
    weapon: [weaponType.two.crossbow],
    core: 2,
    difficulty: 2,
    pay: "middle",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 3,
    damageTime: 120,
  },
  {
    name: "보우마스터",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.adventure,
    image: require("../charaters/bowmaster.png"),
    weapon: [weaponType.two.bow],
    core: 3,
    difficulty: 2,
    pay: "middle",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 3,
    damageTime: 120,
  },
  {
    name: "패스파인더",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.adventure,
    image: require("../charaters/pathfinder.png"),
    weapon: [weaponType.two.ancientBow],
    core: 2,
    difficulty: 1,
    pay: "high",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "나이트로드",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.adventure,
    image: require("../charaters/night-lord.png"),
    weapon: [weaponType.two.claw],
    core: 4,
    difficulty: 1,
    pay: "high",
    oneKill: "row",
    hunt: 4,
    boss: 5,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "섀도어",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.adventure,
    image: require("../charaters/shadower.png"),
    weapon: [weaponType.one.dagger],
    core: 2,
    difficulty: 3,
    pay: "high",
    oneKill: "row",
    hunt: 5,
    boss: 5,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "듀얼블레이드",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.adventure,
    image: require("../charaters/dual.png"),
    weapon: [weaponType.one.dagger],
    core: 4,
    difficulty: 3,
    pay: "high",
    oneKill: "middle",
    hunt: 4,
    boss: 5,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "캡틴",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.adventure,
    image: require("../charaters/captain.png"),
    weapon: [weaponType.two.gun],
    core: 5,
    difficulty: 2,
    pay: "high",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 2,
    damageTime: 180,
  },
  {
    name: "바이퍼",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.adventure,
    image: require("../charaters/viper.png"),
    weapon: [weaponType.two.knuckle],
    core: 2,
    difficulty: 1,
    pay: "high",
    oneKill: "high",
    hunt: 4,
    boss: 2,
    utili: 2,
    damageTime: 180,
  },
  {
    name: "캐논슈터",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.adventure,
    image: require("../charaters/cannon.png"),
    weapon: [weaponType.two.handCannon],
    core: 5,
    difficulty: 3,
    pay: "high",
    oneKill: "row",
    hunt: 2,
    boss: 3,
    utili: 3,
    damageTime: "none",
  },
  {
    name: "미하일",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.cygnus,
    image: require("../charaters/mihile.png"),
    weapon: [weaponType.one.oneHandedSword],
    core: 1,
    difficulty: 3,
    pay: "high",
    oneKill: "high",
    hunt: 2,
    boss: 5,
    utili: 5,
    damageTime: 180,
  },
  {
    name: "소울마스터",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.cygnus,
    image: require("../charaters/soul.png"),
    weapon: [weaponType.one.oneHandedSword, weaponType.two.twoHandedSword],
    core: 1,
    difficulty: 1,
    pay: "row",
    oneKill: "row",
    hunt: 3,
    boss: 3,
    utili: 4,
    damageTime: 180,
  },

  {
    name: "플레임위자드",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.cygnus,
    image: require("../charaters/flame.png"),
    weapon: [weaponType.one.wand, weaponType.one.staff],
    core: 2,
    difficulty: 2,
    pay: "middle",
    oneKill: "middle",
    hunt: 5,
    boss: 3,
    utili: 1,
    damageTime: "none",
  },
  {
    name: "윈드브레이커",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.cygnus,
    image: require("../charaters/wind.png"),
    weapon: [weaponType.two.bow],
    core: 2,
    difficulty: 2,
    pay: "row",
    oneKill: "middle",
    hunt: 5,
    boss: 4,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "나이트워커",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.cygnus,
    image: require("../charaters/night.png"),
    weapon: [weaponType.two.claw],
    core: 1,
    difficulty: 1,
    pay: "high",
    oneKill: "high",
    hunt: 3,
    boss: 3,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "스트라이커",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.cygnus,
    image: require("../charaters/striker.png"),
    weapon: [weaponType.two.knuckle],
    core: 2,
    difficulty: 3,
    pay: "middle",
    oneKill: "middle",
    hunt: 4,
    boss: 3,
    utili: 2,
    damageTime: 120,
  },
  {
    name: "블래스터",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.resistance,
    image: require("../charaters/blaster.png"),
    weapon: [weaponType.two.revolverGauntlet],
    core: 4,
    difficulty: 5,
    pay: "middle",
    oneKill: "middle",
    hunt: 1,
    boss: 2,
    utili: 1,
    damageTime: 120,
  },
  {
    name: "배틀메이지",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.resistance,
    image: require("../charaters/battle.png"),
    weapon: [weaponType.one.staff],
    core: 3,
    difficulty: 3,
    pay: "middle",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 4,
    damageTime: 200,
  },
  {
    name: "와일드헌터",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.resistance,
    image: require("../charaters/wild.png"),
    weapon: [weaponType.two.crossbow],
    core: 2,
    difficulty: 1,
    pay: "middle",
    oneKill: "middle",
    hunt: 2,
    boss: 2,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "메카닉",
    stat: stat.dex,
    jobGroup: jobGroup.pirates,
    species: species.resistance,
    image: require("../charaters/mechanic.png"),
    weapon: [weaponType.two.gun],
    core: 4,
    difficulty: 4,
    pay: "high",
    oneKill: "row",
    hunt: 4,
    boss: 3,
    utili: 4,
    damageTime: 200,
  },
  {
    name: "제논",
    stat: [stat.dex, stat.luk, stat.str],
    jobGroup: jobGroup.thief,
    species: species.resistance,
    image: require("../charaters/xenon.png"),
    weapon: [weaponType.one.whipBlade],
    core: 4,
    difficulty: 3,
    pay: "high",
    oneKill: "high",
    hunt: 2,
    boss: 2,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "데몬 슬레이어",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.demon,
    image: require("../charaters/demon-s.png"),
    weapon: [weaponType.one.oneHandedNluntWeapon],
    core: 5,
    difficulty: 3,
    pay: "high",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 3,
    damageTime: 120,
  },
  {
    name: "데몬 어벤져",
    stat: stat.hp,
    jobGroup: jobGroup.warrior,
    species: species.demon,
    image: require("../charaters/demon-a.png"),
    weapon: [weaponType.one.desperado],
    core: 3,
    difficulty: 1,
    pay: "row",
    oneKill: "row",
    hunt: 3,
    boss: 3,
    utili: 2,
    damageTime: 120,
  },
  {
    name: "아란",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.hero,
    image: require("../charaters/aran.png"),
    weapon: [weaponType.two.polearm],
    core: 4,
    difficulty: 4,
    pay: "middle",
    oneKill: "row",
    hunt: 2,
    boss: 3,
    utili: 1,
    damageTime: 180,
  },
  {
    name: "에반",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.hero,
    image: require("../charaters/evan.png"),
    weapon: [weaponType.one.wand, weaponType.one.staff],
    core: 5,
    difficulty: 5,
    pay: "high",
    oneKill: "high",
    hunt: 3,
    boss: 3,
    utili: 2,
    damageTime: 180,
  },
  {
    name: "루미너스",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.hero,
    image: require("../charaters/lumi.png"),
    weapon: [weaponType.one.shiningRod],
    core: 4,
    difficulty: 3,
    pay: "middle",
    oneKill: "middle",
    hunt: 5,
    boss: 4,
    utili: 3,
    damageTime: 180,
  },
  {
    name: "메르세데스",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.hero,
    image: require("../charaters/mercedes.png"),
    weapon: [weaponType.two.dualBowgun],
    core: 2,
    difficulty: 3,
    pay: "high",
    oneKill: "high",
    hunt: 2,
    boss: 2,
    utili: 3,
    damageTime: 180,
  },
  {
    name: "팬텀",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.hero,
    image: require("../charaters/phantom.png"),
    weapon: [weaponType.one.cane],
    core: 5,
    difficulty: 3,
    pay: "high",
    oneKill: "high",
    hunt: 3,
    boss: 3,
    utili: 5,
    damageTime: 180,
  },
  {
    name: "은월",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.hero,
    image: require("../charaters/eunwol.png"),
    weapon: [weaponType.two.knuckle],
    core: 4,
    difficulty: 3,
    pay: "high",
    oneKill: "middle",
    hunt: 2,
    boss: 3,
    utili: 3,
    damageTime: 120,
  },
  {
    name: "카이저",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.nova,
    image: require("../charaters/kaiser.png"),
    weapon: [weaponType.two.twoHandedSword],
    core: 4,
    difficulty: 1,
    pay: "middle",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 3,
    damageTime: 120,
  },
  {
    name: "엔젤릭버스터",
    stat: stat.dex,
    jobGroup: jobGroup.pirates,
    species: species.nova,
    image: require("../charaters/angelic.png"),
    weapon: [weaponType.one.soulShooter],
    core: 4,
    difficulty: 1,
    pay: "middle",
    oneKill: "row",
    hunt: 5,
    boss: 3,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "카데나",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.nova,
    image: require("../charaters/cadena.png"),
    weapon: [weaponType.one.chain],
    core: 1,
    difficulty: 4,
    pay: "middle",
    oneKill: "middle",
    hunt: 3,
    boss: 3,
    utili: 2,
    damageTime: 180,
  },
  {
    name: "카인",
    stat: stat.dex,
    jobGroup: jobGroup.archer,
    species: species.nova,
    image: require("../charaters/kain.png"),
    weapon: [weaponType.one.breathShooter],
    core: 2,
    difficulty: 3,
    pay: "row",
    oneKill: "row",
    hunt: 4,
    boss: 4,
    utili: 3,
    damageTime: 180,
  },
  {
    name: "아델",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.ref,
    image: require("../charaters/adele.png"),
    weapon: [weaponType.one.tuner],
    core: 2,
    difficulty: 3,
    pay: "row",
    oneKill: "row",
    hunt: 5,
    boss: 5,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "일리움",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.ref,
    image: require("../charaters/illi.png"),
    weapon: [weaponType.one.magicGauntlet],
    core: 1,
    difficulty: 3,
    pay: "row",
    oneKill: "middle",
    hunt: 3,
    boss: 2,
    utili: 3,
    damageTime: 180,
  },
  {
    name: "아크",
    stat: stat.str,
    jobGroup: jobGroup.pirates,
    species: species.ref,
    image: require("../charaters/ark.png"),
    weapon: [weaponType.two.knuckle],
    core: 2,
    difficulty: 3,
    pay: "row",
    oneKill: "row",
    hunt: 5,
    boss: 5,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "칼리",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.ref,
    image: require("../charaters/khali.png"),
    weapon: [weaponType.two.chakram],
    core: 2,
    difficulty: 5,
    pay: "high",
    oneKill: "middle",
    hunt: 5,
    boss: 4,
    utili: 2,
    damageTime: 180,
  },
  {
    name: "라라",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.anima,
    image: require("../charaters/lara.png"),
    weapon: [weaponType.one.wand],
    core: 1,
    difficulty: 2,
    pay: "row",
    oneKill: "row",
    hunt: 4,
    boss: 3,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "호영",
    stat: stat.luk,
    jobGroup: jobGroup.thief,
    species: species.anima,
    image: require("../charaters/ho.png"),
    weapon: [weaponType.one.buchae],
    core: 2,
    difficulty: 4,
    pay: "middle",
    oneKill: "row",
    hunt: 3,
    boss: 4,
    utili: 4,
    damageTime: 180,
  },
  {
    name: "제로",
    stat: stat.str,
    jobGroup: jobGroup.warrior,
    species: species.zero,
    image: require("../charaters/zero.png"),
    weapon: [weaponType.two.zero],
    core: 5,
    difficulty: 4,
    pay: "high",
    oneKill: "high",
    hunt: 2,
    boss: 3,
    utili: 4,
    damageTime: 120,
  },
  {
    name: "키네시스",
    stat: stat.int,
    jobGroup: jobGroup.magician,
    species: species.kinesis,
    image: require("../charaters/kine.png"),
    weapon: [weaponType.one.psyLimiter],
    core: 4,
    difficulty: 3,
    pay: "middle",
    oneKill: "middle",
    hunt: 5,
    boss: 3,
    utili: 1,
    damageTime: 180,
  },
];

export default data;
