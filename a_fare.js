const calcFare = (distanceKm) => {
  // ตรวจสอบข้อมูล
  if (typeof distanceKm !== "number" || distanceKm < 0) {
    return 0;
  }

  // ปัดระยะทางขึ้นเป็นกิโลเมตร
  const distance = Math.ceil(distanceKm);

  // 2 กม.แรก 10 บาท
  if (distance <= 2) {
    return 10;
  }

  // กม.ที่เกินจาก 2 กม. คิด กม.ละ 2 บาท
  return 10 + (distance - 2) * 2;
};

// ทดสอบ
console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22