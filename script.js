// ============================================
// SOLE CULTURE — Script Global
// ============================================

// ── CART ─────────────────────────────────────
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  // Toast is handled per-page; fallback alert only if toast fn not available
  if (typeof showToast === 'function') {
    showToast(`<strong>${product.name}</strong> añadido al carrito ✓`);
  }
  if (typeof updateBadge === 'function') updateBadge();
}

// ── SEARCH (shop page) ───────────────────────
function searchProducts() {
  if (typeof filterProducts === 'function') filterProducts();
}

// ── DISPLAY PRODUCTS (legacy / shop fallback) ─
function displayProducts() {
  const container = document.querySelector('.advertisements') || document.getElementById('product-container');
  if (!container) return;
  // Products are rendered inline in index.html; this is a no-op there
}

// Run only if called from shop page and not already rendered
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-container') && typeof renderProducts === 'undefined') {
      displayProducts();
    }
  });
}
