const menus = [
  { name: "ข้าวกะเพรา", price: 50 },
  { name: "ข้าวผัด", price: 60 },
  { name: "ก๋วยเตี๋ยว", price: 45 },
  { name: "สเต็ก", price: 120 }
];

const getMenusByBudget = (menus, budget) => {
  return menus.filter(menu => menu.price <= budget);
};

// กรณีที่ 1: งบ 50 บาท
console.log("กรณีที่ 1:", getMenusByBudget(menus, 50));

// กรณีที่ 2: งบ 100 บาท
console.log("กรณีที่ 2:", getMenusByBudget(menus, 100));

// กรณีขอบ: งบ 45 บาท
console.log("กรณีขอบ:", getMenusByBudget(menus, 45));