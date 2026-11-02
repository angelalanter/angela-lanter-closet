// Angela Lanter's shelf map for closet.png (1091 x 1442).
// Every point is in the image's own pixel coordinates.
// Regions are drawn in this order; later ones sit on top, so foreground pieces win.

export const IMAGE = { src: 'closet.png', width: 1091, height: 1442 };

export const SHELVES = {
  style: { name: 'Style', url: 'https://shopmy.us/angelalanter/style' },
  beauty: { name: 'Beauty', url: 'https://shopmy.us/angelalanter/beauty' },
  home: { name: 'Home', url: 'https://shopmy.us/angelalanter/home' },
  instagram: { name: 'Instagram', url: 'https://shopmy.us/angelalanter/instagram' },
};

// [shelf, accessible name, polygon points]
export const ITEMS = [
  // background home pieces first
  ['home', 'Knit throw', [[300, 790], [620, 778], [860, 760], [1090, 768], [1090, 860], [842, 915], [830, 1245], [560, 1252], [380, 1185], [300, 1000]]],
  ['home', 'Bed pillows', [[215, 565], [335, 520], [510, 515], [640, 520], [722, 510], [782, 560], [782, 650], [700, 690], [490, 700], [330, 700], [240, 700]]],
  ['home', 'Table lamp', [[0, 445], [84, 445], [84, 560], [50, 565], [50, 712], [0, 712]]],
  ['home', 'Table lamp', [[770, 468], [870, 468], [870, 545], [842, 548], [842, 645], [795, 645], [795, 548], [770, 545]]],
  ['home', 'Scalloped candle', [[50, 655], [132, 655], [132, 716], [50, 716]]],

  // clothes on the bed
  ['style', 'Jeans', [[700, 668], [896, 668], [902, 705], [892, 755], [704, 755], [698, 712]]],
  ['style', 'Striped pajama set', [[836, 690], [905, 670], [1002, 678], [1078, 770], [1042, 803], [845, 798], [833, 760]]],
  ['style', 'Belted jacket', [[322, 800], [400, 788], [560, 774], [602, 790], [656, 880], [662, 1092], [600, 1104], [522, 1062], [502, 1172], [462, 1172], [440, 1082], [398, 1052], [338, 1002], [318, 950]]],
  ['style', 'Fair Isle zip sweater', [[620, 798], [700, 768], [762, 756], [812, 788], [838, 830], [862, 870], [862, 982], [822, 1082], [760, 1124], [700, 1102], [650, 1062], [644, 932], [624, 842]]],

  // makeup on the duvet
  ['beauty', 'Makeup: palettes, powder, lipstick, concealer, lip crayon and brow gel', [[284, 672], [470, 680], [572, 684], [622, 698], [714, 742], [712, 776], [600, 776], [470, 778], [318, 780], [286, 764]]],

  // phone
  ['instagram', 'iPhone', [[832, 792], [948, 792], [952, 892], [832, 892]]],

  // floor
  ['style', 'Coach shoulder bag', [[106, 1092], [158, 1012], [184, 898], [220, 872], [266, 888], [296, 958], [316, 1040], [352, 1100], [352, 1238], [104, 1238]]],
  ['style', 'Suede ankle booties', [[142, 1218], [196, 1210], [246, 1206], [292, 1238], [314, 1344], [270, 1364], [164, 1350], [146, 1302]]],
  ['style', 'Platform UGG minis', [[312, 1248], [380, 1204], [442, 1200], [478, 1248], [488, 1332], [456, 1374], [328, 1374], [312, 1332]]],
  ['style', 'adidas Sambas', [[484, 1258], [530, 1226], [582, 1230], [644, 1288], [646, 1334], [560, 1346], [496, 1324]]],
  ['style', 'New Balance sneakers', [[648, 1268], [700, 1226], [762, 1220], [822, 1256], [854, 1310], [844, 1356], [760, 1366], [678, 1346], [648, 1306]]],
];

// Handwritten labels baked into the approved image: [shelf, text, x, y, w, h]
export const LABELS = [
  ['home', 'home', 12, 362, 140, 107],
  ['beauty', 'beauty', 164, 430, 170, 105],
  ['instagram', 'instagram', 845, 899, 238, 113],
  ['style', 'style', 923, 511, 151, 113],
  ['style', 'style', 867, 1232, 143, 105],
];

// "browse all shelves" (also in the image) jumps to the shelf list
export const BROWSE = [357, 1377, 341, 65];
