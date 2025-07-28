// =========================================
// 1. Bubbling and Capturing (Sự Nổi và Sự Bắt)
// =========================================

// Thêm sự kiện với Bubbling (mặc định là false)
element.addEventListener("click", function () {
  console.log("Bubbling...");
}, false);

// Thêm sự kiện với Capturing
element.addEventListener("click", function () {
  console.log("Capturing...");
}, true);

// Ngăn sự kiện lan truyền (bubbling/capturing)
event.stopPropagation();


// Demo:
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // Ngăn không cho sự kiện lan ra phần tử cha
  console.log("Child clicked!");
});


// =========================================
// 2. Page Navigation (Điều Hướng Trang)
// =========================================

// Chuyển sang trang khác
window.location.href = "https://example.com";

// Chuyển mà vẫn lưu trong lịch sử
window.location.assign("https://example.com");

// Chuyển trang nhưng không lưu lịch sử (không quay lại được)
window.location.replace("https://example.com");

// Quay lại trang trước đó
window.history.back();

// Cuộn lên đầu trang một cách mượt
window.scrollTo({ top: 0, behavior: "smooth" });


// =========================================
// 3. DOM Traversing (Duyệt DOM)
// =========================================

const el = document.querySelector(".box");

// Lấy phần tử cha
el.parentElement;

// Lấy danh sách các phần tử con
el.children;
el.firstElementChild;
el.lastElementChild;

// Lấy phần tử liền kề trước hoặc sau
el.previousElementSibling;
el.nextElementSibling;

// Tìm phần tử cha gần nhất khớp với selector
el.closest(".container");


// =========================================
// 4. Passing Arguments to Event Handlers
// =========================================

// Cách 1: Arrow function truyền tham số
button.addEventListener("click", (e) => {
  customHandler("Xin chào", e);
});

function customHandler(msg, event) {
  console.log(msg); // In ra: Xin chào
}


// Cách 2: Trả về một function
function handlerWithId(id) {
  return function (event) {
    console.log("ID là:", id);
  };
}

button.addEventListener("click", handlerWithId(101));

