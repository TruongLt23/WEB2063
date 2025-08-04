const API_URL = 'http://localhost:3000/products';

const form = document.getElementById('product-form');
const titleInput = document.getElementById('title');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const imageInput = document.getElementById('image');
const productList = document.getElementById('product-list');
const submitBtn = document.getElementById('submitBtn');

let editingProductId = null; // null = thêm mới, có id = đang sửa

// Load sản phẩm khi trang tải
window.addEventListener('DOMContentLoaded', loadProducts);

// Lấy danh sách sản phẩm từ API và hiển thị
async function loadProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    alert('Lỗi khi tải sản phẩm!');
    console.error(err);
  }
}

// Hiển thị sản phẩm dạng card
function renderProducts(products) {
  productList.innerHTML = '';
  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" height="200" style="object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Hãng: ${product.name}</p>
          <p class="card-text">Giá: ${product.price}₫</p>
          <button class="btn btn-warning btn-sm me-2" onclick="editProduct(${product.id})">Sửa</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Xóa</button>
        </div>
      </div>
    `;
    productList.appendChild(card);
  });
}

// Validate dữ liệu
function validateInputs(title, name, price, image) {
  if (!title || !name || !price || !image) return false;
  if (isNaN(price) || Number(price) < 0) return false;
  return true;
}

// Xử lý submit form
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const name = nameInput.value.trim();
  const price = priceInput.value.trim();
  const image = imageInput.value.trim();

  if (!validateInputs(title, name, price, image)) {
    alert('Vui lòng nhập đúng và đầy đủ thông tin!');
    return;
  }

  const productData = { title, name, price: Number(price), image };

  try {
    if (editingProductId) {
      // Sửa
      await fetch(`${API_URL}/${editingProductId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      submitBtn.textContent = 'Thêm sản phẩm';
      editingProductId = null;
    } else {
      // Thêm
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
    }

    form.reset();
    loadProducts();
  } catch (err) {
    alert('Lỗi khi lưu sản phẩm!');
    console.error(err);
  }
});

// Sửa sản phẩm
async function editProduct(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const product = await res.json();
    titleInput.value = product.title;
    nameInput.value = product.name;
    priceInput.value = product.price;
    imageInput.value = product.image;
    editingProductId = id;
    submitBtn.textContent = 'Cập nhật sản phẩm';
  } catch (err) {
    alert('Lỗi khi tải sản phẩm để sửa!');
    console.error(err);
  }
}

// Xóa sản phẩm
async function deleteProduct(id) {
  if (!confirm('Bạn có chắc muốn xóa sản phẩm này?')) return;

  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    loadProducts();
  } catch (err) {
    alert('Lỗi khi xóa sản phẩm!');
    console.error(err);
  }
}
