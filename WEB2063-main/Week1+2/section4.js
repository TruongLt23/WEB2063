// ✅ 1. Map và Set

// Map: lưu key-value (key có thể là bất kỳ kiểu dữ liệu nào)
const myMap = new Map();
myMap.set('name', 'Trường');
myMap.set('age', 21);
console.log('Map:', myMap.get('name')); // Kết quả: Trường

// Set: lưu giá trị duy nhất, không trùng lặp
const mySet = new Set([1, 2, 2, 3, 4]);
mySet.add(5); // Thêm phần tử
console.log('Set:', [...mySet]); // Kết quả: [1, 2, 3, 4, 5]


// ✅ 2. forEach – Duyệt mảng
const fruits = ['apple', 'banana', 'mango'];
fruits.forEach((fruit, i) => {
  console.log(`${i + 1}. ${fruit}`);
});
// Kết quả:
// 1. apple
// 2. banana
// 3. mango


// ✅ 3. map – Tạo mảng mới
const nums1 = [1, 2, 3];
const doubled = nums1.map(n => n * 2);
console.log('map:', doubled); // Kết quả: [2, 4, 6]


// ✅ 4. filter – Lọc mảng
const nums2 = [1, 2, 3, 4, 5];
const oddNums = nums2.filter(n => n % 2 !== 0);
console.log('filter:', oddNums); // Kết quả: [1, 3, 5]


// ✅ 5. reduce – Tính tổng
const nums3 = [1, 2, 3, 4];
const total = nums3.reduce((acc, cur) => acc + cur, 0);
console.log('reduce:', total); // Kết quả: 10


// ✅ 6. Magic of Chaining – Kết hợp nhiều hàm
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n % 2 !== 0)  // [1, 3, 5]
  .map(n => n * 2)           // [2, 6, 10]
  .reduce((a, b) => a + b);  // 18
console.log('Magic of Chaining:', result);


// ✅ 7. find – Tìm phần tử đầu tiên
const students = [
  { name: 'Luyến', score: 9 },
  { name: 'Minh', score: 7 },
];
const foundStudent = students.find(s => s.name === 'Luyến');
console.log('find:', foundStudent); 
// Kết quả: { name: 'Luyến', score: 9 }


// ✅ 8. findIndex – Tìm vị trí phần tử
const items = ['a', 'b', 'c'];
const index = items.findIndex(i => i === 'b');
console.log('findIndex:', index); // Kết quả: 1


// ✅ 9. some – Có ít nhất một phần tử đúng điều kiện
const marks = [3, 6, 8];
const hasFail = marks.some(m => m < 5);
console.log('some:', hasFail); // Kết quả: true


// ✅ 10. every – Tất cả phần tử đúng điều kiện
const marks2 = [6, 7, 8];
const allPassed = marks2.every(m => m >= 5);
console.log('every:', allPassed); // Kết quả: true


// ✅ 11. flat – Làm phẳng mảng
const nested = [1, 2, [3, 4, [5, 6]]];
console.log('flat (1 cấp):', nested.flat(1)); // Kết quả: [1, 2, 3, 4, [5, 6]]
console.log('flat (2 cấp):', nested.flat(2)); // Kết quả: [1, 2, 3, 4, 5, 6]


// ✅ 12. flatMap – map() + flat()
const sentences = ['hello world', 'good night'];
const words = sentences.flatMap(s => s.split(' '));
console.log('flatMap:', words); 
// Kết quả: ['hello', 'world', 'good', 'night']
