/* ===================================
   GLOSS & GLOW RESIN ART - WhatsApp Order Only
   =================================== */

// ====== PRICE FORMAT ======

function formatPrice(price) {
  if (price === 0) return 'Custom Price';
  return `₹${price.toLocaleString('en-IN')}`;
}

// ====== WHATSAPP ORDER ======

function orderOnWhatsApp(product) {
  let message = `*Gloss & Glow Resin Art – Order Request*\n\n`;
  message += `*Product:* ${product.name}\n`;

  if (product.size) {
    message += `*Size:* ${product.size}\n`;
  }

  if (product.price > 0) {
    message += `*Price:* ${formatPrice(product.price)}\n`;
  } else {
    message += `*Price:* Custom (Please confirm)\n`;
  }

  message += `\nPlease share:\n• Your Name\n• Image / Reference\n• Delivery Address`;

  const phoneNumber = '918699589709'; // your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

// ====== CUSTOM ORDERS ======

function openWhatsAppCustom(customType = 'general') {
  let message = '*Gloss & Glow Resin Art – Custom Order Inquiry*\n\n';

  if (customType === 'flower') {
    message += 'I am interested in *Flower Preservation*.\n\n';
  } else if (customType === 'varmala') {
    message += 'I am interested in *Varmala Preservation*.\n\n';
  } else {
    message += 'I would like a *Custom Resin Product*.\n\n';
  }

  message += 'Please guide me with pricing, timeline, and options.';

  const phoneNumber = '918699589709';
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

// ====== SCROLL ANIMATIONS ======

function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

// ====== PRODUCT RENDERING ======

function renderProducts(productsToRender = products, containerId = 'products-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card animate-on-scroll';

    productCard.innerHTML = `
      <div class="product-image-wrapper">
        <img src="assets/images/${product.image}" alt="${product.name}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>

      <div class="product-info">
        <span class="product-category">${categories?.[product.category] || product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <p class="card-description">${product.description}</p>

        <div class="product-actions">
          ${
            product.price > 0
              ? `<button class="btn btn-primary"
                   onclick='orderOnWhatsApp(${JSON.stringify(product)})'>
                   Order on WhatsApp
                 </button>`
              : `<button class="btn btn-secondary"
                   onclick="openWhatsAppCustom('${product.category}')">
                   Custom Order
                 </button>`
          }
        </div>
      </div>
    `;

    container.appendChild(productCard);
  });

  animateOnScroll();
}

// ====== FILTER & SEARCH ======

function filterProducts(category) {
  const filtered =
    category === 'all'
      ? products
      : products.filter(p => p.category === category);

  renderProducts(filtered);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

function searchProducts(query) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
  renderProducts(filtered);
}

// ====== NAV ACTIVE ======

function setActiveNav(pageName) {
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.href.includes(pageName));
  });
}

// ====== PAGE ROUTING HELPERS ======

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function getUrlParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-toggle');
  const navUl = document.querySelector('nav ul');
  
  if (!hamburger || !navUl) return;
  
  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.toggle('active');
    navUl.classList.toggle('show');
  });
  
  // Close menu when a link is clicked
  const navLinks = navUl.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navUl.classList.remove('show');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('header')) {
      hamburger.classList.remove('active');
      navUl.classList.remove('show');
    }
  });
  
  // Handle window resize - close menu on larger screens
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navUl.classList.remove('show');
    }
  });
});
