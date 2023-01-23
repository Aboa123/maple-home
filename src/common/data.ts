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
    oneJandedAxe: "한손도끼",
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
  },
];

export default data;
