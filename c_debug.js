const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

// filter ต้อง return ค่า b.late
const lateRoutes = buses
  .filter(b => b.late)
  .map(b => b.route);

// reduce ต้องมีค่าเริ่มต้น 0
const total = buses.reduce(
  (sum, b) => sum + b.passengers,
  0
);

console.log("สายที่มาสาย:", lateRoutes);
console.log("ผู้โดยสารรวม:", total);