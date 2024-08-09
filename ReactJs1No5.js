// Spread Operator pada Array
const angka1 = [3,4];
const angka2 = [...angka1, 5, 6];
console.log(angka2); // Output: [3, 4, 5, 6]

// Spread Operator pada Object
const user1 = { nama: "Muim", umur: 18 };
const user2 = { ...user1, pekerjaan: "Guru" };
console.log(user2); // Output: { nama: "Muim", umur: 18, pekerjaan: "Guru" }