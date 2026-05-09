const foods = [
  {
    name: "幼貓高能量雞肉濕糧",
    type: "wet",
    lifeStages: ["kitten"],
    protein: 11,
    fat: 6,
    caloriesPer100g: 118,
    mainProtein: "chicken",
    tags: ["growth", "hydration"],
    notes: "適合成長期，水分高，熱量密度比一般濕糧更友善。"
  },
  {
    name: "成貓室內低敏火雞配方",
    type: "dry",
    lifeStages: ["adult", "mature"],
    protein: 36,
    fat: 14,
    caloriesPer100g: 370,
    mainProtein: "turkey",
    tags: ["indoor", "digestive"],
    notes: "單一主蛋白，適合一般室內成貓與腸胃較敏感的貓。"
  },
  {
    name: "泌尿照護鮪魚濕糧",
    type: "wet",
    lifeStages: ["adult", "mature", "senior"],
    protein: 10,
    fat: 4,
    caloriesPer100g: 92,
    mainProtein: "fish",
    tags: ["urinary", "hydration"],
    notes: "高水分飲食方向，適合需要增加飲水量的泌尿照護情境。"
  },
  {
    name: "體重管理高蛋白乾糧",
    type: "dry",
    lifeStages: ["adult", "mature", "senior"],
    protein: 40,
    fat: 10,
    caloriesPer100g: 330,
    mainProtein: "chicken",
    tags: ["weight_control", "indoor"],
    notes: "熱量較低、蛋白質較高，適合過重或結紮後需要控熱量的貓。"
  },
  {
    name: "熟齡貓鮭魚關節毛髮配方",
    type: "dry",
    lifeStages: ["mature", "senior"],
    protein: 33,
    fat: 15,
    caloriesPer100g: 360,
    mainProtein: "fish",
    tags: ["skin", "senior_support", "joint"],
    notes: "偏向熟齡照護，兼顧皮膚毛髮、關節支持與適口性。"
  },
  {
    name: "腸胃敏感鴨肉濕糧",
    type: "wet",
    lifeStages: ["adult", "mature", "senior"],
    protein: 9,
    fat: 5,
    caloriesPer100g: 104,
    mainProtein: "duck",
    tags: ["digestive", "hydration"],
    notes: "新奇蛋白搭配濕食，適合需要溫和嘗試的腸胃敏感貓。"
  },
  {
    name: "毛球控制室內貓乾糧",
    type: "dry",
    lifeStages: ["adult", "mature"],
    protein: 34,
    fat: 13,
    caloriesPer100g: 355,
    mainProtein: "chicken",
    tags: ["hairball", "indoor"],
    notes: "纖維比例較高，適合室內貓與換毛期毛球管理。"
  },
  {
    name: "老貓雞肉柔軟慕斯",
    type: "wet",
    lifeStages: ["senior"],
    protein: 9,
    fat: 4.5,
    caloriesPer100g: 98,
    mainProtein: "chicken",
    tags: ["senior_support", "hydration"],
    notes: "質地柔軟，水分高，適合牙口較弱或食慾較不穩的老貓。"
  }
];

const products = [
  {
    name: "安適得關節保健食品",
    category: "保健食品",
    problems: ["joint"],
    tags: ["關節支持", "熟齡貓友善"],
    notes: "適合關節卡卡、跳躍意願下降或熟齡貓日常保養方向。"
  },
  {
    name: "貓費洛蒙擴香組",
    category: "用品",
    problems: ["stress"],
    tags: ["情緒安定", "環境適應"],
    notes: "適合搬家、換環境、多貓壓力或容易緊張躲藏的情境。"
  },
  {
    name: "貓用潔牙酵素凝膠",
    category: "保健用品",
    problems: ["dental"],
    tags: ["口腔照護", "牙垢管理"],
    notes: "適合口氣、牙垢與不容易刷牙的貓，可搭配定期牙科檢查。"
  },
  {
    name: "低粉塵除臭貓砂",
    category: "用品",
    problems: ["litter_odor"],
    tags: ["除臭", "低粉塵"],
    notes: "適合貓砂盆異味明顯、家中空間較小或貓咪對粉塵敏感的情境。"
  },
  {
    name: "魚油皮膚毛髮保健",
    category: "保健食品",
    problems: ["itchy_skin", "skin"],
    tags: ["Omega-3", "皮膚毛髮"],
    notes: "適合皮膚乾、毛髮粗、換毛期掉毛明顯的日常保養方向。"
  },
  {
    name: "循環活水飲水機",
    category: "用品",
    problems: ["low_water", "urinary"],
    tags: ["增加喝水", "泌尿照護"],
    notes: "適合喝水少、偏好流動水或需要提高水分攝取的貓。"
  }
];

const healthLabels = {
  urinary: "泌尿照護",
  kidney: "腎臟疑慮",
  digestive: "腸胃敏感",
  skin: "皮膚毛髮",
  diabetes: "糖尿病疑慮",
  hairball: "毛球困擾"
};

const problemLabels = {
  joint: "骨關節問題",
  stress: "情緒緊張",
  dental: "口腔牙齒",
  litter_odor: "貓砂盆異味",
  itchy_skin: "搔癢掉毛",
  low_water: "喝水太少"
};

const lifeStageLabels = {
  kitten: "幼貓",
  adult: "成貓",
  mature: "熟齡貓",
  senior: "老貓"
};

const typeLabels = {
  dry: "乾糧",
  wet: "濕糧"
};

const appTabs = document.querySelectorAll(".app-tab");
const appViews = document.querySelectorAll(".app-view");
const form = document.querySelector("#catForm");
const modeButtons = document.querySelectorAll(".mode-button");
const submitButton = document.querySelector("#submitButton");
const resultTitle = document.querySelector("#resultTitle");
const calorieBox = document.querySelector("#calorieBox");
const calorieValue = document.querySelector("#calorieValue");
const alerts = document.querySelector("#alerts");
const guidance = document.querySelector("#guidance");
const recommendations = document.querySelector("#recommendations");
let activeMode = "food";

function getCheckedValues(groupId) {
  return [...document.querySelectorAll(`#${groupId} input:checked`)].map((input) => input.value);
}

function calculateCalories(profile) {
  const rer = 70 * Math.pow(profile.weight, 0.75);
  let factor = profile.neutered === "yes" ? 1.2 : 1.4;

  if (profile.lifeStage === "kitten") factor = 2.3;
  if (profile.lifeStage === "mature") factor -= 0.05;
  if (profile.lifeStage === "senior") factor -= 0.1;
  if (profile.bodyCondition === "overweight") factor = 0.85;
  if (profile.bodyCondition === "thin") factor += 0.25;
  if (profile.activity === "low") factor -= 0.1;
  if (profile.activity === "high") factor += 0.2;

  return Math.max(80, Math.round(rer * factor));
}

function scoreFood(food, profile) {
  let score = 0;
  const reasons = [];

  if (food.lifeStages.includes(profile.lifeStage)) {
    score += 30;
    reasons.push(`符合${lifeStageLabels[profile.lifeStage]}年齡階段`);
  }

  if (profile.foodType === "any" || profile.foodType === "mixed") {
    score += 8;
  } else if (profile.foodType === food.type) {
    score += 18;
    reasons.push(`符合${typeLabels[food.type]}偏好`);
  }

  if (profile.avoidProtein !== "none" && food.mainProtein === profile.avoidProtein) {
    score -= 60;
    reasons.push("含有需要避開的主蛋白，建議排除");
  }

  if (profile.bodyCondition === "overweight" && food.tags.includes("weight_control")) {
    score += 28;
    reasons.push("符合體重管理方向");
  }

  profile.health.forEach((condition) => {
    if (food.tags.includes(condition)) {
      score += 26;
      reasons.push(`符合${healthLabels[condition]}需求`);
    }
  });

  profile.problems.forEach((problem) => {
    if (food.tags.includes(problem)) {
      score += 16;
      reasons.push(`也支援${problemLabels[problem]}照護`);
    }
  });

  if (profile.health.includes("urinary") && food.type === "wet") {
    score += 18;
    reasons.push("濕食有助於提高水分攝取");
  }

  if (profile.health.includes("kidney")) {
    score -= 16;
  }

  if (profile.health.includes("diabetes") && food.type === "wet") {
    score += 8;
    reasons.push("濕食通常比乾糧更容易做碳水控制");
  }

  return { ...food, score, reasons: [...new Set(reasons)] };
}

function scoreProduct(product, profile) {
  let score = 0;
  const reasons = [];
  const selectedConcerns = [...profile.problems, ...profile.health];

  product.problems.forEach((problem) => {
    if (selectedConcerns.includes(problem)) {
      score += 35;
      reasons.push(`符合${problemLabels[problem] || healthLabels[problem]}需求`);
    }
  });

  if (
    (profile.lifeStage === "mature" || profile.lifeStage === "senior") &&
    selectedConcerns.includes("joint")
  ) {
    if (product.problems.includes("joint")) {
      score += 12;
      reasons.push("熟齡或老貓可加強關節日常保養");
    }
  }

  if (profile.health.includes("urinary") && product.problems.includes("low_water")) {
    score += 16;
    reasons.push("提高飲水量可作為泌尿照護輔助");
  }

  if (profile.health.includes("skin") && product.problems.includes("itchy_skin")) {
    score += 16;
    reasons.push("皮膚毛髮狀況可搭配營養保養");
  }

  return { ...product, score, reasons: [...new Set(reasons)] };
}

function buildGuidance(profile, calories) {
  const tips = [];

  if (profile.mode === "product") {
    if (profile.problems.includes("joint")) {
      tips.push("骨關節問題若伴隨跛行、疼痛或不願跳躍，保健品之外也建議獸醫檢查。");
    }

    if (profile.problems.includes("stress")) {
      tips.push("情緒緊張可搭配費洛蒙、躲藏空間、固定作息與漸進式環境適應。");
    }

    if (profile.problems.includes("dental")) {
      tips.push("口腔保健用品適合日常維護；牙齦紅腫、流口水或不吃飯時應先看獸醫。");
    }

    if (profile.problems.includes("litter_odor")) {
      tips.push("貓砂盆異味可從低粉塵除臭貓砂、每日清理與足夠砂盆數量一起改善。");
    }

    if (profile.problems.includes("low_water")) {
      tips.push("喝水太少可嘗試流動水、增加濕食比例，並在不同位置放水碗。");
    }

    if (!tips.length) {
      tips.push("先勾選目前最想改善的問題，系統會推薦對應的保健食品或用品。");
    }

    return tips;
  }

  if (profile.lifeStage === "kitten") {
    tips.push("幼貓優先選擇標示 growth 或 kitten 的完整營養配方。");
  }

  if (profile.bodyCondition === "overweight") {
    tips.push("減重應慢慢來，先控制每日熱量，不建議突然大幅減食。");
  }

  if (profile.health.includes("urinary") || profile.problems.includes("low_water")) {
    tips.push("需要提高水分攝取時，濕糧、飲水機或多水碗配置都可以一起考慮。");
  }

  if (profile.problems.includes("joint")) {
    tips.push("骨關節問題若伴隨跛行、疼痛或不願跳躍，保健品之外也建議獸醫檢查。");
  }

  if (profile.problems.includes("stress")) {
    tips.push("情緒緊張可搭配費洛蒙、躲藏空間、固定作息與漸進式環境適應。");
  }

  if (!tips.length) {
    tips.push("目前適合從年齡階段、體態、飲食偏好與日常照護需求來挑選。");
  }

  tips.push(`可先用每日約 ${calories} kcal 當作餵食量估算起點，再依體重變化微調。`);

  return tips;
}

function buildAlerts(profile) {
  const messages = [];

  if (profile.health.includes("kidney")) {
    messages.push("腎臟疑慮不建議自行改處方或低磷飲食，請先讓獸醫評估血檢與尿檢。");
  }

  if (profile.health.includes("diabetes")) {
    messages.push("糖尿病疑慮需要獸醫診斷與血糖監測，飼料與保健食品只能作為照護計畫的一部分。");
  }

  if (profile.health.includes("urinary")) {
    messages.push("若有血尿、頻尿、尿不出來或疼痛叫聲，這是急症，請立即就醫。");
  }

  if (profile.problems.includes("joint")) {
    messages.push("關節保健食品無法取代診斷；若貓咪跛行、疼痛或活動力突然下降，請先就醫。");
  }

  if (profile.weight <= 1 || profile.weight >= 10) {
    messages.push("體重數值較極端，建議確認輸入是否正確，並以獸醫建議為準。");
  }

  return messages;
}

function render(profile) {
  const calories = calculateCalories(profile);
  const rankedFoods = foods
    .map((food) => scoreFood(food, profile))
    .filter((food) => food.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  const rankedProducts = products
    .map((product) => scoreProduct(product, profile))
    .filter((product) => product.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  resultTitle.textContent =
    profile.mode === "food"
      ? `${profile.name || "這隻貓"}的飼料推薦`
      : `${profile.name || "這隻貓"}的保健食品與用品推薦`;
  calorieBox.classList.toggle("hidden", profile.mode === "product");
  calorieValue.textContent = `${calories} kcal`;

  alerts.innerHTML = buildAlerts(profile)
    .map((message) => `<div class="alert">${message}</div>`)
    .join("");

  guidance.innerHTML = `
    <article class="guidance-card">
      <h3>建議方向</h3>
      <ul class="guidance-list">
        ${buildGuidance(profile, calories).map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    </article>
  `;

  if (profile.mode === "food") {
    recommendations.innerHTML = `
      <h3 class="section-title">飼料推薦</h3>
      ${
        rankedFoods.length
          ? rankedFoods.map(renderFoodCard).join("")
          : `<div class="empty-state small">目前沒有足夠符合的示範飼料，請調整條件再試一次。</div>`
      }
    `;
    return;
  }

  recommendations.innerHTML = `
    <h3 class="section-title">保健食品與用品推薦</h3>
    ${
      rankedProducts.length
        ? rankedProducts.map(renderProductCard).join("")
        : `<div class="empty-state small">勾選「想改善的問題」後，這裡會出現保健食品與用品推薦。</div>`
    }
  `;
}

function renderFoodCard(food) {
  return `
    <article class="food-card">
      <div class="food-topline">
        <div>
          <h3>${food.name}</h3>
          <p>${food.notes}</p>
        </div>
        <span class="score-pill">${food.score} 分</span>
      </div>
      <div class="food-meta">
        <span class="tag">${typeLabels[food.type]}</span>
        <span class="tag">主蛋白：${food.mainProtein}</span>
        <span class="tag">蛋白 ${food.protein}%</span>
        <span class="tag">脂肪 ${food.fat}%</span>
        <span class="tag warning">${food.caloriesPer100g} kcal / 100g</span>
      </div>
      <ul class="reason-list">
        ${food.reasons.map((reason) => `<li>${reason}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderProductCard(product) {
  return `
    <article class="food-card product-card">
      <div class="food-topline">
        <div>
          <h3>${product.name}</h3>
          <p>${product.notes}</p>
        </div>
        <span class="score-pill">${product.score} 分</span>
      </div>
      <div class="food-meta">
        <span class="tag">${product.category}</span>
        ${product.tags.map((tag) => `<span class="tag warning">${tag}</span>`).join("")}
      </div>
      <ul class="reason-list">
        ${product.reasons.map((reason) => `<li>${reason}</li>`).join("")}
      </ul>
    </article>
  `;
}

function readProfile() {
  return {
    mode: activeMode,
    name: document.querySelector("#catName").value.trim(),
    lifeStage: document.querySelector("#lifeStage").value,
    weight: Number(document.querySelector("#weight").value),
    bodyCondition: document.querySelector("#bodyCondition").value,
    neutered: document.querySelector("#neutered").value,
    activity: document.querySelector("#activity").value,
    health: getCheckedValues("healthGroup"),
    problems: getCheckedValues("problemGroup"),
    foodType: document.querySelector("#foodType").value,
    avoidProtein: document.querySelector("#avoidProtein").value
  };
}

function setMode(mode) {
  activeMode = mode;
  document.body.classList.toggle("is-food-mode", mode === "food");
  document.body.classList.toggle("is-product-mode", mode === "product");
  submitButton.textContent = mode === "food" ? "產生飼料推薦" : "產生保健品 / 用品推薦";
  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  render(readProfile());
}

function setAppView(view) {
  appTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.appView === view);
  });
  appViews.forEach((section) => {
    section.classList.toggle("active", section.id === `${view}-view`);
  });
  if (view === "tracker") {
    drawTrackerChart(getActiveTrackerCat());
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render(readProfile());
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

appTabs.forEach((button) => {
  button.addEventListener("click", () => setAppView(button.dataset.appView));
});

const TRACKER_STORAGE_KEY = "cat-glucose-manager-v1";
const CLOUD_CONFIG_KEY = "cat-glucose-cloud-config-v1";

const trackerDefaultState = {
  cats: [],
  activeCatId: null
};

let trackerState = loadTrackerState();
let editingRecordId = null;
let editingCatId = null;

const $ = (selector) => document.querySelector(selector);
const today = new Date().toISOString().slice(0, 10);

const trackerElements = {
  catForm: $("#cat-form"),
  catFormTitle: $("#cat-form-title"),
  catSubmit: $("#cat-submit"),
  cancelCatEdit: $("#cancel-cat-edit"),
  catList: $("#cat-list"),
  catCount: $("#cat-count"),
  emptyState: $("#empty-state"),
  dashboard: $("#dashboard"),
  activeCatName: $("#active-cat-name"),
  activeCatMeta: $("#active-cat-meta"),
  calorieTarget: $("#calorie-target"),
  calorieNote: $("#calorie-note"),
  latestGlucose: $("#latest-glucose"),
  latestGlucoseTime: $("#latest-glucose-time"),
  latestWeight: $("#latest-weight"),
  weightChange: $("#weight-change"),
  todayInsulin: $("#today-insulin"),
  recordForm: $("#record-form"),
  clearForm: $("#clear-form"),
  recordDate: $("#record-date"),
  recordTime: $("#record-time"),
  extraFoodList: $("#extra-food-list"),
  addExtraFood: $("#add-extra-food"),
  recordsTable: $("#records-table"),
  rangeFilter: $("#range-filter"),
  dateFilter: $("#date-filter"),
  searchRecords: $("#search-records"),
  chart: $("#glucose-chart"),
  recentGlucoseList: $("#recent-glucose-list"),
  exportJson: $("#export-json"),
  importJson: $("#import-json"),
  editCat: $("#edit-cat"),
  deleteCat: $("#delete-cat"),
  supabaseUrl: $("#supabase-url"),
  supabaseKey: $("#supabase-key"),
  saveCloudConfig: $("#save-cloud-config"),
  syncCloud: $("#sync-cloud"),
  loadCloud: $("#load-cloud"),
  cloudStatus: $("#cloud-status"),
  cloudStatusDot: $("#cloud-status-dot")
};

function loadTrackerState() {
  try {
    const stored = JSON.parse(localStorage.getItem(TRACKER_STORAGE_KEY));
    return stored && Array.isArray(stored.cats) ? stored : structuredClone(trackerDefaultState);
  } catch {
    return structuredClone(trackerDefaultState);
  }
}

function saveTrackerState() {
  localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(trackerState));
  queueCloudSync();
}

function loadCloudConfig() {
  try {
    const stored = JSON.parse(localStorage.getItem(CLOUD_CONFIG_KEY));
    return {
      url: stored?.url || "",
      key: stored?.key || ""
    };
  } catch {
    return { url: "", key: "" };
  }
}

function saveCloudConfig(config) {
  localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(config));
}

function getCloudConfig() {
  return {
    url: trackerElements.supabaseUrl.value.trim().replace(/\/$/, ""),
    key: trackerElements.supabaseKey.value.trim()
  };
}

function hasCloudConfig() {
  const config = getCloudConfig();
  return Boolean(config.url && config.key);
}

function setCloudStatus(message, state = "offline") {
  trackerElements.cloudStatus.textContent = message;
  trackerElements.cloudStatusDot.className = `status-dot ${state}`;
}

async function supabaseRequest(path, options = {}) {
  const config = getCloudConfig();
  if (!config.url || !config.key) {
    throw new Error("尚未設定 Supabase URL 與 anon key");
  }

  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `Supabase request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function trackerStateToCloudRows() {
  const timestamp = new Date().toISOString();
  const cats = trackerState.cats.map((cat) =>
    normalizeCloudRow(["id", "name", "age", "weight", "condition", "updated_at"], {
      id: cat.id || "",
      name: cat.name || "",
      age: cat.age,
      weight: cat.weight,
      condition: cat.condition || "",
      updated_at: timestamp
    })
  );
  const records = trackerState.cats.flatMap((cat) =>
    (cat.records || []).map((record) =>
      normalizeCloudRow(
        [
          "id",
          "cat_id",
          "date",
          "time",
          "period",
          "glucose",
          "insulin",
          "weight",
          "food_brand",
          "food_kind",
          "food_grams",
          "food_extra",
          "food",
          "calories",
          "note",
          "updated_at"
        ],
        {
          id: record.id || "",
          cat_id: cat.id || "",
          date: record.date || null,
          time: record.time || null,
          period: record.period || null,
          glucose: record.glucose,
          insulin: record.insulin,
          weight: record.weight,
          food_brand: record.foodBrand || "",
          food_kind: record.foodKind || "",
          food_grams: record.foodGrams,
          food_extra: serializeExtraFoods(record.extraFoods || record.foodExtra),
          food: record.food || "",
          calories: record.calories,
          note: record.note || "",
          updated_at: timestamp
        }
      )
    )
  );

  return { cats, records };
}

function normalizeCloudRow(keys, row) {
  return keys.reduce((result, key) => {
    result[key] = row[key] === undefined ? null : row[key];
    return result;
  }, {});
}

async function syncTrackerToCloud({ quiet = false } = {}) {
  if (!hasCloudConfig()) {
    if (!quiet) setCloudStatus("請先填入 Supabase URL 與 anon public key", "error");
    return;
  }

  const { cats, records } = trackerStateToCloudRows();
  setCloudStatus("正在同步到雲端...", "syncing");

  if (cats.length) {
    try {
      await supabaseRequest("cats?on_conflict=id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify(cats)
      });
    } catch (error) {
      throw new Error(`貓咪資料同步失敗：${error.message}`);
    }
  }

  if (records.length) {
    try {
      await supabaseRequest("cat_records?on_conflict=id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify(records)
      });
    } catch (error) {
      throw new Error(`紀錄資料同步失敗：${error.message}`);
    }
  }

  setCloudStatus(`已同步 ${cats.length} 隻貓、${records.length} 筆紀錄到雲端`, "online");
}

async function loadTrackerFromCloud() {
  if (!hasCloudConfig()) {
    setCloudStatus("請先填入 Supabase URL 與 anon public key", "error");
    return;
  }

  setCloudStatus("正在從雲端載入...", "syncing");
  const cats = await supabaseRequest("cats?select=*&order=name.asc");
  const records = await supabaseRequest("cat_records?select=*&order=date.desc");
  const recordsByCat = new Map();

  (records || []).forEach((record) => {
    const item = {
      id: record.id,
      date: record.date || "",
      time: record.time || "",
      period: record.period || "其他",
      glucose: numberOrNull(record.glucose),
      insulin: numberOrNull(record.insulin),
      weight: numberOrNull(record.weight),
      foodBrand: record.food_brand || "",
      foodKind: record.food_kind || "",
      foodGrams: numberOrNull(record.food_grams),
      extraFoods: normalizeExtraFoods(record.food_extra),
      food: record.food || "",
      calories: numberOrNull(record.calories),
      note: record.note || ""
    };
    const list = recordsByCat.get(record.cat_id) || [];
    list.push(item);
    recordsByCat.set(record.cat_id, list);
  });

  trackerState = {
    cats: (cats || []).map((cat) => ({
      id: cat.id,
      name: cat.name,
      age: numberOrNull(cat.age),
      weight: numberOrNull(cat.weight),
      condition: cat.condition || "adult",
      records: recordsByCat.get(cat.id) || []
    })),
    activeCatId: trackerState.activeCatId || cats?.[0]?.id || null
  };

  if (!trackerState.cats.some((cat) => cat.id === trackerState.activeCatId)) {
    trackerState.activeCatId = trackerState.cats[0]?.id || null;
  }

  localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(trackerState));
  renderTracker();
  setCloudStatus(`已從雲端載入 ${trackerState.cats.length} 隻貓`, "online");
}

async function deleteCloudRecord(recordId) {
  if (!hasCloudConfig()) return;
  await supabaseRequest(`cat_records?id=eq.${encodeURIComponent(recordId)}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" }
  });
}

async function deleteCloudCat(catId) {
  if (!hasCloudConfig()) return;
  await supabaseRequest(`cat_records?cat_id=eq.${encodeURIComponent(catId)}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" }
  });
  await supabaseRequest(`cats?id=eq.${encodeURIComponent(catId)}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" }
  });
}

let cloudSyncTimer = null;

function queueCloudSync() {
  if (!hasCloudConfig()) return;
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(() => {
    syncTrackerToCloud({ quiet: true }).catch((error) => {
      setCloudStatus(`雲端同步失敗：${error.message}`, "error");
    });
  }, 900);
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getActiveTrackerCat() {
  return trackerState.cats.find((cat) => cat.id === trackerState.activeCatId) || null;
}

function numberOrNull(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatNumber(value, digits = 1) {
  if (value === null || value === undefined || Number.isNaN(value)) return "尚無";
  return Number(value).toLocaleString("zh-TW", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0
  });
}

function calculateTrackerCalories(cat) {
  const weight = Number(cat.weight);
  if (!weight || weight <= 0) return { calories: 0, note: "請先輸入有效體重" };

  const rer = 70 * Math.pow(weight, 0.75);
  const factors = {
    kitten: { factor: cat.age < 0.35 ? 2.5 : 2, note: "幼貓依成長期估算" },
    adult: { factor: 1.2, note: "以已結紮成貓維持量估算" },
    senior: { factor: 1.1, note: "高齡貓以較保守維持量估算" },
    weightLoss: { factor: 0.8, note: "減重請與獸醫確認安全速度" },
    weightGain: { factor: 1.4, note: "增重以溫和增加熱量估算" }
  };
  const item = factors[cat.condition] || factors.adult;
  return { calories: Math.round(rer * item.factor), note: item.note };
}

function glucoseClass(value) {
  if (!value && value !== 0) return "";
  if (value <= 150) return "safe";
  if (value <= 250) return "warning";
  return "danger";
}

function normalizeExtraFoods(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [{ foodBrand: value }];
    } catch {
      return [{ foodBrand: value }];
    }
  }
  return [];
}

function serializeExtraFoods(value) {
  const items = normalizeExtraFoods(value).filter((item) => {
    return (
      item.foodBrand ||
      item.foodKind ||
      (item.foodGrams !== null && item.foodGrams !== undefined && item.foodGrams !== "") ||
      (item.calories !== null && item.calories !== undefined && item.calories !== "") ||
      item.food
    );
  });
  return items.length ? JSON.stringify(items) : "";
}

function foodItemSummary(item) {
  const parts = [];
  if (item.foodBrand) parts.push(item.foodBrand);
  if (item.foodKind) parts.push(item.foodKind);
  if (item.foodGrams !== null && item.foodGrams !== undefined && item.foodGrams !== "") {
    parts.push(`${formatNumber(item.foodGrams, 0)}g`);
  }
  if (item.calories !== null && item.calories !== undefined && item.calories !== "") {
    parts.push(`${formatNumber(item.calories, 0)} kcal`);
  }
  if (item.food) parts.push(item.food);
  return parts.join(" / ");
}

function foodSummary(record) {
  const parts = [];
  if (record.foodBrand) parts.push(record.foodBrand);
  if (record.foodKind) parts.push(record.foodKind);
  if (record.foodGrams !== null && record.foodGrams !== undefined && record.foodGrams !== "") {
    parts.push(`${formatNumber(record.foodGrams, 0)}g`);
  }
  if (record.food) parts.push(record.food);
  normalizeExtraFoods(record.extraFoods || record.foodExtra).forEach((item) => {
    const summary = foodItemSummary(item);
    if (summary) parts.push(`＋${summary}`);
  });
  return parts.join(" / ");
}

function recordTimestamp(record) {
  return new Date(`${record.date}T${record.time || "00:00"}`).getTime();
}

function formatRecordDateTime(record) {
  const date = record.date || "";
  const time = record.time || "--:--";
  return `${date} ${time}`;
}

function formatChartTimeLabel(record) {
  const date = record.date ? record.date.slice(5) : "";
  const time = record.time || "--:--";
  return `${date} ${time}`;
}

function sortedTrackerRecords(cat) {
  return [...(cat.records || [])].sort((a, b) => {
    return `${b.date}T${b.time}`.localeCompare(`${a.date}T${a.time}`);
  });
}

function renderTracker() {
  renderTrackerCats();
  const activeCat = getActiveTrackerCat();
  trackerElements.emptyState.classList.toggle("hidden", Boolean(activeCat));
  trackerElements.dashboard.classList.toggle("hidden", !activeCat);
  if (!activeCat) return;
  renderTrackerDashboard(activeCat);
  renderTrackerRecords(activeCat);
  renderRecentGlucose(activeCat);
  drawTrackerChart(activeCat);
}

function renderTrackerCats() {
  trackerElements.catCount.textContent = trackerState.cats.length;
  trackerElements.catList.innerHTML = "";

  trackerState.cats.forEach((cat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `cat-card ${cat.id === trackerState.activeCatId ? "active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(cat.name)}</strong>
      <span>${formatNumber(cat.age)} 歲 · ${formatNumber(cat.weight, 2)} kg · ${conditionLabel(cat.condition)}</span>
    `;
    button.addEventListener("click", () => {
      trackerState.activeCatId = cat.id;
      saveTrackerState();
      renderTracker();
    });
    trackerElements.catList.appendChild(button);
  });
}

function renderTrackerDashboard(cat) {
  const calories = calculateTrackerCalories(cat);
  const records = sortedTrackerRecords(cat);
  const latestGlucose = records.find((record) => record.glucose !== null);
  const latestWeight = records.find((record) => record.weight !== null);
  const previousWeight = records.filter((record) => record.weight !== null)[1];
  const todayTotalInsulin = records
    .filter((record) => record.date === today)
    .reduce((sum, record) => sum + (Number(record.insulin) || 0), 0);

  trackerElements.activeCatName.textContent = cat.name;
  trackerElements.activeCatMeta.textContent = `${formatNumber(cat.age)} 歲 · ${formatNumber(cat.weight, 2)} kg · ${conditionLabel(cat.condition)}`;
  trackerElements.calorieTarget.textContent = `${formatNumber(calories.calories, 0)} kcal`;
  trackerElements.calorieNote.textContent = calories.note;
  trackerElements.latestGlucose.innerHTML = latestGlucose
    ? `<span class="badge ${glucoseClass(latestGlucose.glucose)}">${latestGlucose.glucose} mg/dL</span>`
    : "尚無";
  trackerElements.latestGlucoseTime.textContent = latestGlucose
    ? `${latestGlucose.date} ${latestGlucose.time} · ${latestGlucose.period}`
    : "新增紀錄後顯示";
  trackerElements.latestWeight.textContent = latestWeight ? `${formatNumber(latestWeight.weight, 2)} kg` : "尚無";
  trackerElements.weightChange.textContent =
    latestWeight && previousWeight
      ? `較前次 ${latestWeight.weight - previousWeight.weight >= 0 ? "+" : ""}${formatNumber(latestWeight.weight - previousWeight.weight, 2)} kg`
      : "紀錄兩次以上可看變化";
  trackerElements.todayInsulin.textContent = `${formatNumber(todayTotalInsulin, 2)} U`;
}

function renderTrackerRecords(cat) {
  if (!cat) return;
  const search = trackerElements.searchRecords.value.trim().toLowerCase();
  const selectedDate = trackerElements.dateFilter.value;
  const records = sortedTrackerRecords(cat).filter((record) => {
    const matchesDate = !selectedDate || record.date === selectedDate;
    const targetText = `${foodSummary(record)} ${record.note || ""}`.toLowerCase();
    return matchesDate && (!search || targetText.includes(search));
  });

  trackerElements.recordsTable.innerHTML = "";
  if (!records.length) {
    trackerElements.recordsTable.innerHTML = `
      <tr>
        <td colspan="7" class="muted">尚無符合條件的紀錄</td>
      </tr>
    `;
    return;
  }

  records.forEach((record) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.date}<br><span class="muted">${record.time}</span></td>
      <td>${record.glucose !== null ? `<span class="badge ${glucoseClass(record.glucose)}">${record.glucose} mg/dL</span>` : '<span class="muted">-</span>'}</td>
      <td>${escapeHtml(foodSummary(record) || "-")}<br><span class="muted">${record.calories !== null ? `${record.calories} kcal` : "未填熱量"}</span></td>
      <td>${record.insulin !== null ? `${record.insulin} U` : '<span class="muted">-</span>'}</td>
      <td>${record.weight !== null ? `${record.weight} kg` : '<span class="muted">-</span>'}</td>
      <td>${escapeHtml(record.note || "-")}</td>
      <td>
        <button class="icon-button" type="button" data-action="edit" data-id="${record.id}" title="編輯">編輯</button>
        <button class="icon-button" type="button" data-action="delete" data-id="${record.id}" title="刪除">刪除</button>
      </td>
    `;
    trackerElements.recordsTable.appendChild(row);
  });
}

function renderRecentGlucose(cat) {
  if (!trackerElements.recentGlucoseList) return;
  const now = Date.now();
  const twoDaysAgo = now - 2 * 24 * 60 * 60 * 1000;
  const records = sortedTrackerRecords(cat)
    .filter((record) => record.glucose !== null && recordTimestamp(record) >= twoDaysAgo)
    .slice(0, 8);

  if (!records.length) {
    trackerElements.recentGlucoseList.innerHTML = `<p class="muted">近兩天尚無血糖紀錄</p>`;
    return;
  }

  trackerElements.recentGlucoseList.innerHTML = records
    .map(
      (record) => `
        <article class="recent-glucose-card">
          <strong class="badge ${glucoseClass(record.glucose)}">${record.glucose} mg/dL</strong>
          <span>${formatRecordDateTime(record)}</span>
        </article>
      `
    )
    .join("");
}

function drawTrackerChart(cat) {
  if (!cat) return;
  const ctx = trackerElements.chart.getContext("2d");
  const range = trackerElements.rangeFilter.value;
  const records = sortedTrackerRecords(cat)
    .filter((record) => record.glucose !== null)
    .reverse()
    .filter((record) => {
    if (range === "all") return true;
      const recordTime = recordTimestamp(record);
      const minTime = Date.now() - Number(range) * 24 * 60 * 60 * 1000;
      return recordTime >= minTime;
    });

  const { width, height } = trackerElements.chart;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffefa";
  ctx.fillRect(0, 0, width, height);

  const padding = { top: 24, right: 28, bottom: 52, left: 58 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  ctx.strokeStyle = "#d9e0e7";
  ctx.lineWidth = 1;
  ctx.font = "13px Microsoft JhengHei, sans-serif";
  ctx.fillStyle = "#687280";

  const yMax = Math.max(320, ...records.map((record) => record.glucose || 0)) + 20;
  const ySteps = [80, 150, 250, Math.round(yMax)];

  ySteps.forEach((value) => {
    const y = padding.top + chartHeight - (value / yMax) * chartHeight;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    ctx.fillText(String(value), 12, y + 4);
  });

  if (!records.length) {
    ctx.fillStyle = "#687280";
    ctx.textAlign = "center";
    ctx.fillText("尚無血糖資料", width / 2, height / 2);
    ctx.textAlign = "left";
    return;
  }

  const points = records.map((record, index) => {
    const x = padding.left + (records.length === 1 ? chartWidth / 2 : (index / (records.length - 1)) * chartWidth);
    const y = padding.top + chartHeight - (record.glucose / yMax) * chartHeight;
    return { x, y, record };
  });

  ctx.strokeStyle = "#0f766e";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  points.forEach((point) => {
    ctx.fillStyle = point.record.glucose <= 150 ? "#15803d" : point.record.glucose <= 250 ? "#b45309" : "#be123c";
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#687280";
  ctx.textAlign = "center";
  points.forEach((point, index) => {
    if (index % Math.ceil(points.length / 6) === 0 || index === points.length - 1) {
      ctx.fillText(formatChartTimeLabel(point.record), point.x, height - 24);
    }
  });
  ctx.textAlign = "left";
}

function conditionLabel(condition) {
  return {
    adult: "成貓 / 已結紮",
    senior: "高齡貓",
    kitten: "幼貓",
    weightLoss: "需要減重",
    weightGain: "需要增重"
  }[condition] || "成貓 / 已結紮";
}

function renderExtraFoodFields(items = []) {
  if (!trackerElements.extraFoodList) return;
  trackerElements.extraFoodList.innerHTML = "";
  normalizeExtraFoods(items).forEach((item) => addExtraFoodFields(item));
}

function addExtraFoodFields(item = {}) {
  if (!trackerElements.extraFoodList) return;
  const field = document.createElement("div");
  field.className = "extra-food-item";
  field.innerHTML = `
    <div class="section-heading no-margin">
      <h3>其他食物</h3>
      <button class="text-button" type="button" data-action="remove-extra-food">刪除</button>
    </div>
    <div class="grid-2">
      <label>
        品牌 / 食物名稱
        <input name="extraFoodBrand" placeholder="例如：雞胸肉" value="${escapeHtml(item.foodBrand || "")}" />
      </label>
      <label>
        類型
        <select name="extraFoodKind">
          <option value="" ${!item.foodKind ? "selected" : ""}>未選擇</option>
          <option value="乾飼料" ${item.foodKind === "乾飼料" ? "selected" : ""}>乾飼料</option>
          <option value="罐頭" ${item.foodKind === "罐頭" ? "selected" : ""}>罐頭</option>
          <option value="鮮食" ${item.foodKind === "鮮食" ? "selected" : ""}>鮮食</option>
          <option value="零食" ${item.foodKind === "零食" ? "selected" : ""}>零食</option>
          <option value="其他" ${item.foodKind === "其他" ? "selected" : ""}>其他</option>
        </select>
      </label>
    </div>
    <div class="grid-2">
      <label>
        克數
        <input name="extraFoodGrams" type="number" min="0" step="1" placeholder="g" value="${item.foodGrams ?? ""}" />
      </label>
      <label>
        估計熱量
        <input name="extraFoodCalories" type="number" min="0" step="1" placeholder="kcal" value="${item.calories ?? ""}" />
      </label>
    </div>
    <label>
      補充內容
      <textarea name="extraFoodNote" rows="2" placeholder="例如：分兩次吃完、加水 20ml">${escapeHtml(item.food || "")}</textarea>
    </label>
  `;
  trackerElements.extraFoodList.appendChild(field);
}

function collectExtraFoods(formData) {
  const brands = formData.getAll("extraFoodBrand");
  const kinds = formData.getAll("extraFoodKind");
  const grams = formData.getAll("extraFoodGrams");
  const calories = formData.getAll("extraFoodCalories");
  const notes = formData.getAll("extraFoodNote");
  return brands
    .map((brand, index) => ({
      foodBrand: brand.trim(),
      foodKind: kinds[index] || "",
      foodGrams: numberOrNull(grams[index]),
      calories: numberOrNull(calories[index]),
      food: notes[index]?.trim() || ""
    }))
    .filter((item) => item.foodBrand || item.foodKind || item.foodGrams !== null || item.calories !== null || item.food);
}

function fillRecordForm(record) {
  editingRecordId = record.id;
  trackerElements.recordDate.value = record.date;
  trackerElements.recordTime.value = record.time;
  $("#record-period").value = record.period || "其他";
  $("#record-glucose").value = record.glucose ?? "";
  $("#record-insulin").value = record.insulin ?? "";
  $("#record-weight").value = record.weight ?? "";
  $("#record-food-brand").value = record.foodBrand || "";
  $("#record-food-kind").value = record.foodKind || "";
  $("#record-food-grams").value = record.foodGrams ?? "";
  renderExtraFoodFields(record.extraFoods || record.foodExtra);
  $("#record-food").value = record.food || "";
  $("#record-calories").value = record.calories ?? "";
  $("#record-note").value = record.note || "";
  trackerElements.recordForm.querySelector("button[type='submit']").textContent = "更新紀錄";
  trackerElements.recordForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetRecordForm() {
  editingRecordId = null;
  trackerElements.recordForm.reset();
  renderExtraFoodFields();
  trackerElements.recordDate.value = today;
  trackerElements.recordTime.value = new Date().toTimeString().slice(0, 5);
  $("#record-period").value = "其他";
  trackerElements.recordForm.querySelector("button[type='submit']").textContent = "儲存紀錄";
}

function fillCatForm(cat) {
  editingCatId = cat.id;
  $("#cat-name").value = cat.name;
  $("#cat-age").value = cat.age ?? "";
  $("#cat-weight").value = cat.weight ?? "";
  $("#cat-condition").value = cat.condition || "adult";
  trackerElements.catFormTitle.textContent = "編輯貓咪";
  trackerElements.catSubmit.textContent = "更新貓咪";
  trackerElements.cancelCatEdit.classList.remove("hidden");
  trackerElements.catForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetCatForm() {
  editingCatId = null;
  trackerElements.catForm.reset();
  trackerElements.catFormTitle.textContent = "新增貓咪";
  trackerElements.catSubmit.textContent = "加入貓咪";
  trackerElements.cancelCatEdit.classList.add("hidden");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

trackerElements.catForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(trackerElements.catForm);
  const catData = {
    name: formData.get("name").trim(),
    age: numberOrNull(formData.get("age")),
    weight: numberOrNull(formData.get("weight")),
    condition: formData.get("condition")
  };

  if (editingCatId) {
    trackerState.cats = trackerState.cats.map((cat) => (cat.id === editingCatId ? { ...cat, ...catData } : cat));
    trackerState.activeCatId = editingCatId;
  } else {
    const cat = {
      id: uid("cat"),
      ...catData,
      records: []
    };
    trackerState.cats.push(cat);
    trackerState.activeCatId = cat.id;
  }

  resetCatForm();
  saveTrackerState();
  renderTracker();
});

trackerElements.recordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cat = getActiveTrackerCat();
  if (!cat) return;
  const formData = new FormData(trackerElements.recordForm);
  const record = {
    id: editingRecordId || uid("record"),
    date: formData.get("date"),
    time: formData.get("time"),
    period: formData.get("period") || "其他",
    glucose: numberOrNull(formData.get("glucose")),
    insulin: numberOrNull(formData.get("insulin")),
    weight: numberOrNull(formData.get("weight")),
    foodBrand: formData.get("foodBrand").trim(),
    foodKind: formData.get("foodKind"),
    foodGrams: numberOrNull(formData.get("foodGrams")),
    extraFoods: collectExtraFoods(formData),
    food: formData.get("food").trim(),
    calories: numberOrNull(formData.get("calories")),
    note: formData.get("note").trim()
  };

  if (editingRecordId) {
    cat.records = cat.records.map((item) => (item.id === editingRecordId ? record : item));
  } else {
    cat.records.push(record);
  }

  if (record.weight !== null) {
    cat.weight = record.weight;
  }

  saveTrackerState();
  resetRecordForm();
  renderTracker();
});

trackerElements.recordsTable.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const cat = getActiveTrackerCat();
  const record = cat.records.find((item) => item.id === button.dataset.id);
  if (!record) return;

  if (button.dataset.action === "edit") {
    fillRecordForm(record);
    return;
  }

  cat.records = cat.records.filter((item) => item.id !== record.id);
  deleteCloudRecord(record.id).catch((error) => {
    setCloudStatus(`雲端刪除紀錄失敗：${error.message}`, "error");
  });
  saveTrackerState();
  renderTracker();
});

trackerElements.clearForm.addEventListener("click", resetRecordForm);
trackerElements.addExtraFood.addEventListener("click", () => addExtraFoodFields());
trackerElements.extraFoodList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='remove-extra-food']");
  if (!button) return;
  button.closest(".extra-food-item")?.remove();
});
trackerElements.cancelCatEdit.addEventListener("click", resetCatForm);
trackerElements.editCat.addEventListener("click", () => {
  const cat = getActiveTrackerCat();
  if (cat) fillCatForm(cat);
});
trackerElements.deleteCat.addEventListener("click", () => {
  const cat = getActiveTrackerCat();
  if (!cat) return;
  const ok = confirm(`確定要刪除「${cat.name}」和牠的所有紀錄嗎？`);
  if (!ok) return;
  deleteCloudCat(cat.id).catch((error) => {
    setCloudStatus(`雲端刪除貓咪失敗：${error.message}`, "error");
  });
  trackerState.cats = trackerState.cats.filter((item) => item.id !== cat.id);
  trackerState.activeCatId = trackerState.cats[0]?.id || null;
  resetCatForm();
  resetRecordForm();
  saveTrackerState();
  renderTracker();
});
trackerElements.rangeFilter.addEventListener("change", () => drawTrackerChart(getActiveTrackerCat()));
trackerElements.dateFilter.addEventListener("change", () => renderTrackerRecords(getActiveTrackerCat()));
trackerElements.searchRecords.addEventListener("input", () => renderTrackerRecords(getActiveTrackerCat()));
trackerElements.saveCloudConfig.addEventListener("click", () => {
  const config = getCloudConfig();
  saveCloudConfig(config);
  if (!config.url || !config.key) {
    setCloudStatus("請填入 Supabase URL 與 anon public key", "error");
    return;
  }
  setCloudStatus("雲端設定已儲存，可以開始同步", "online");
});
trackerElements.syncCloud.addEventListener("click", () => {
  syncTrackerToCloud().catch((error) => {
    setCloudStatus(`雲端同步失敗：${error.message}`, "error");
  });
});
trackerElements.loadCloud.addEventListener("click", () => {
  loadTrackerFromCloud().catch((error) => {
    setCloudStatus(`雲端載入失敗：${error.message}`, "error");
  });
});

trackerElements.exportJson.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(trackerState, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cat-glucose-records-${today}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

trackerElements.importJson.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.cats)) throw new Error("Invalid data");
    trackerState = {
      cats: imported.cats,
      activeCatId: imported.activeCatId || imported.cats[0]?.id || null
    };
    saveTrackerState();
    renderTracker();
  } catch {
    alert("匯入失敗，請確認 JSON 檔案格式。");
  } finally {
    event.target.value = "";
  }
});

const savedCloudConfig = loadCloudConfig();
trackerElements.supabaseUrl.value = savedCloudConfig.url;
trackerElements.supabaseKey.value = savedCloudConfig.key;
if (savedCloudConfig.url && savedCloudConfig.key) {
  setCloudStatus("已載入雲端設定", "online");
}

setMode(activeMode);
resetRecordForm();
renderTracker();
