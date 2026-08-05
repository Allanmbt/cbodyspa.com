(function () {
    'use strict';

    var DATA_URL = '/store-th/data/products.json';
    var data = null;
    var activeCategory = 'all';
    var activeProduct = null;
    var activeImage = 0;
    var activeColor = 0;
    var activeSize = 0;
    var lastTrigger = null;
    var contactTrigger = null;
    var contactMode = 'general';
    var toastTimer = null;
    var galleryTimer = null;

    var elements = {
        categoryList: document.getElementById('categoryList'),
        categoryTitle: document.getElementById('categoryTitle'),
        productCount: document.getElementById('productCount'),
        productGrid: document.getElementById('productGrid'),
        emptyState: document.getElementById('emptyState'),
        loadError: document.getElementById('loadError'),
        retryButton: document.getElementById('retryButton'),
        dialog: document.getElementById('productDialog'),
        dialogClose: document.getElementById('dialogClose'),
        dialogImage: document.getElementById('dialogImage'),
        galleryPrev: document.getElementById('galleryPrev'),
        galleryNext: document.getElementById('galleryNext'),
        imageCounter: document.getElementById('imageCounter'),
        thumbnailList: document.getElementById('thumbnailList'),
        dialogCode: document.getElementById('dialogCode'),
        dialogTitle: document.getElementById('dialogTitle'),
        dialogDescription: document.getElementById('dialogDescription'),
        dialogPrice: document.getElementById('dialogPrice'),
        colorGroup: document.getElementById('colorGroup'),
        colorOptions: document.getElementById('colorOptions'),
        selectedColor: document.getElementById('selectedColor'),
        sizeGroup: document.getElementById('sizeGroup'),
        sizeOptions: document.getElementById('sizeOptions'),
        selectedSize: document.getElementById('selectedSize'),
        purchaseButton: document.getElementById('purchaseButton'),
        headerLineButton: document.getElementById('headerLineButton'),
        contactDialog: document.getElementById('contactDialog'),
        contactDialogClose: document.getElementById('contactDialogClose'),
        contactCancel: document.getElementById('contactCancel'),
        contactEyebrow: document.getElementById('contactEyebrow'),
        contactDialogTitle: document.getElementById('contactDialogTitle'),
        contactDialogText: document.getElementById('contactDialogText'),
        contactSummary: document.getElementById('contactSummary'),
        contactProductTitle: document.getElementById('contactProductTitle'),
        contactProductMeta: document.getElementById('contactProductMeta'),
        confirmLineButton: document.getElementById('confirmLineButton'),
        confirmLineText: document.getElementById('confirmLineText'),
        copyLineId: document.getElementById('copyLineId'),
        dialogLineId: document.getElementById('dialogLineId'),
        toast: document.getElementById('toast')
    };

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function formatPrice(price) {
        return data.store.currency + new Intl.NumberFormat('th-TH').format(price);
    }

    function showToast(message) {
        window.clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.classList.add('is-visible');
        toastTimer = window.setTimeout(function () {
            elements.toast.classList.remove('is-visible');
        }, 2400);
    }

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }

        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        return Promise.resolve();
    }

    function loadProducts() {
        elements.loadError.hidden = true;
        elements.retryButton.hidden = false;
        elements.loadError.querySelector('h2').textContent = 'ไม่สามารถแสดงสินค้าได้';
        elements.loadError.querySelector('p').textContent = 'กรุณารีเฟรชหน้า หรือติดต่อแอดมินทาง LINE';
        return fetch(DATA_URL, { cache: 'no-store' })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('ไม่สามารถโหลดข้อมูลสินค้าได้');
                }
                return response.json();
            })
            .then(function (payload) {
                data = payload;
                elements.dialogLineId.textContent = data.store.lineId;
                renderCategories();
                renderProducts();
            })
            .catch(function () {
                elements.productGrid.innerHTML = '';
                elements.productCount.textContent = '';
                elements.loadError.hidden = false;
                if (window.location.protocol === 'file:') {
                    elements.loadError.querySelector('h2').textContent = 'กรุณาเปิดผ่าน Local Server';
                    elements.loadError.querySelector('p').textContent = 'เบราว์เซอร์ไม่อนุญาตให้อ่านไฟล์ JSON ผ่าน file://';
                    elements.retryButton.hidden = true;
                }
            });
    }

    function renderCategories() {
        elements.categoryList.innerHTML = data.categories.map(function (category) {
            var selected = category.id === activeCategory;
            return '<button class="category-chip' + (selected ? ' is-active' : '') + '" type="button" data-category="' + escapeHtml(category.id) + '" aria-pressed="' + selected + '">' + escapeHtml(category.label) + '</button>';
        }).join('');
    }

    function renderProducts() {
        var category = data.categories.find(function (item) { return item.id === activeCategory; }) || data.categories[0];
        var products = activeCategory === 'all'
            ? data.products
            : data.products.filter(function (product) { return product.category === activeCategory; });

        elements.categoryTitle.textContent = category.title;
        elements.productCount.textContent = products.length + ' รายการ';
        elements.emptyState.hidden = products.length !== 0;

        elements.productGrid.innerHTML = products.map(function (product) {
            var galleryLabel = product.images.length > 1
                ? '<span class="card-gallery-count" aria-label="' + product.images.length + ' รูป"><b>' + product.images.length + '</b> รูป</span>'
                : '';

            return '<article class="product-card">' +
                '<button class="product-card-button" type="button" data-product="' + escapeHtml(product.id) + '" aria-label="ดู ' + escapeHtml(product.title) + '">' +
                    '<span class="product-image-wrap">' +
                        '<img src="' + escapeHtml(product.images[0]) + '" alt="" loading="lazy" width="960" height="960">' +
                        '<span class="product-code">' + escapeHtml(product.id) + '</span>' +
                        galleryLabel +
                    '</span>' +
                    '<span class="product-card-body">' +
                        '<strong class="product-title">' + escapeHtml(product.title) + '</strong>' +
                        '<span class="product-card-bottom"><b>' + escapeHtml(formatPrice(product.price)) + '</b><i aria-hidden="true">＋</i></span>' +
                    '</span>' +
                '</button>' +
            '</article>';
        }).join('');
    }

    function selectCategory(categoryId) {
        if (categoryId === activeCategory) {
            return;
        }
        activeCategory = categoryId;
        renderCategories();
        renderProducts();
    }

    function openProduct(productId, trigger) {
        activeProduct = data.products.find(function (product) { return product.id === productId; });
        if (!activeProduct) {
            return;
        }

        lastTrigger = trigger;
        activeImage = 0;
        activeColor = 0;
        activeSize = 0;

        elements.dialogCode.textContent = 'รหัส ' + activeProduct.id;
        elements.dialogTitle.textContent = activeProduct.title;
        elements.dialogDescription.textContent = activeProduct.description || '';
        elements.dialogDescription.hidden = !activeProduct.description;
        elements.dialogPrice.textContent = formatPrice(activeProduct.price);

        renderGallery();
        renderOptions();
        elements.dialog.showModal();
        startGalleryAutoplay();
        document.body.classList.add('dialog-open');
    }

    function closeProduct() {
        stopGalleryAutoplay();
        elements.dialog.close();
        document.body.classList.remove('dialog-open');
        if (lastTrigger) {
            lastTrigger.focus({ preventScroll: true });
        }
    }

    function renderGallery() {
        var images = activeProduct.images;
        elements.dialogImage.src = images[activeImage];
        elements.dialogImage.alt = '';
        elements.dialogImage.classList.remove('is-changing');
        void elements.dialogImage.offsetWidth;
        elements.dialogImage.classList.add('is-changing');
        elements.imageCounter.textContent = images.length > 1 ? (activeImage + 1) + ' / ' + images.length : '';
        elements.imageCounter.hidden = images.length < 2;
        elements.galleryPrev.hidden = images.length < 2;
        elements.galleryNext.hidden = images.length < 2;
        elements.thumbnailList.hidden = images.length < 2;

        elements.thumbnailList.innerHTML = images.map(function (image, index) {
            return '<button type="button" class="thumbnail' + (index === activeImage ? ' is-active' : '') + '" data-image="' + index + '" aria-label="ดูรูปที่ ' + (index + 1) + '"><img src="' + escapeHtml(image) + '" alt=""></button>';
        }).join('');
    }

    function stopGalleryAutoplay() {
        window.clearInterval(galleryTimer);
        galleryTimer = null;
    }

    function startGalleryAutoplay() {
        stopGalleryAutoplay();
        if (!activeProduct || activeProduct.images.length < 2 || document.hidden) {
            return;
        }
        galleryTimer = window.setInterval(function () {
            setActiveImage(activeImage + 1, false);
        }, 2800);
    }

    function setActiveImage(index, restartAutoplay) {
        var length = activeProduct.images.length;
        activeImage = (index + length) % length;
        if (activeProduct.colors) {
            var matchingColor = activeProduct.colors.findIndex(function (color) {
                return color.image === activeImage;
            });
            if (matchingColor >= 0) {
                activeColor = matchingColor;
                renderOptions();
            }
        }
        renderGallery();
        if (restartAutoplay) {
            startGalleryAutoplay();
        }
    }

    function renderOptions() {
        var colors = activeProduct.colors || [];
        var sizes = activeProduct.sizes || [];

        elements.colorGroup.hidden = colors.length < 2;
        elements.sizeGroup.hidden = sizes.length < 2;

        if (colors.length > 1) {
            elements.selectedColor.textContent = colors[activeColor].label;
            elements.colorOptions.innerHTML = colors.map(function (color, index) {
                var image = typeof color.image === 'number' ? activeProduct.images[color.image] : '';
                return '<button type="button" class="option-chip option-visual' + (index === activeColor ? ' is-active' : '') + '" data-color="' + index + '" aria-pressed="' + (index === activeColor) + '">' +
                    (image ? '<img src="' + escapeHtml(image) + '" alt="">' : '<span class="color-dot color-dot-' + index + '"></span>') +
                    '<span>' + escapeHtml(color.label) + '</span>' +
                '</button>';
            }).join('');
        }

        if (sizes.length > 1) {
            elements.selectedSize.textContent = sizes[activeSize];
            elements.sizeOptions.innerHTML = sizes.map(function (size, index) {
                return '<button type="button" class="option-chip' + (index === activeSize ? ' is-active' : '') + '" data-size="' + index + '" aria-pressed="' + (index === activeSize) + '">' + escapeHtml(size) + '</button>';
            }).join('');
        }
    }

    function buildOrderMessage() {
        var lines = [
            'สวัสดีค่ะ สนใจสั่งซื้อสินค้า',
            'รหัส: ' + activeProduct.id,
            'สินค้า: ' + activeProduct.title,
            'จำนวนที่ต้องการ: กรุณาระบุในแชต'
        ];

        if (activeProduct.colors && activeProduct.colors.length > 1) {
            lines.push('สี / แบบ: ' + activeProduct.colors[activeColor].label);
        }
        if (activeProduct.sizes && activeProduct.sizes.length > 1) {
            lines.push('ขนาด: ' + activeProduct.sizes[activeSize]);
        }
        return lines.join('\n');
    }

    function buildOrderMeta() {
        var details = ['รหัส ' + activeProduct.id, formatPrice(activeProduct.price)];
        if (activeProduct.colors && activeProduct.colors.length > 1) {
            details.push(activeProduct.colors[activeColor].label);
        }
        if (activeProduct.sizes && activeProduct.sizes.length > 1) {
            details.push('ขนาด ' + activeProduct.sizes[activeSize]);
        }
        return details.join(' · ');
    }

    function openContactDialog(mode, trigger) {
        if (!data) {
            return;
        }

        contactMode = mode;
        contactTrigger = trigger;

        if (mode === 'product') {
            stopGalleryAutoplay();
            elements.dialog.close();
            elements.contactEyebrow.textContent = 'สั่งซื้อผ่านแอดมิน';
            elements.contactDialogTitle.textContent = 'ยืนยันรายการที่เลือก';
            elements.contactDialogText.textContent = 'ระบบจะคัดลอกข้อมูลสินค้า กรุณาแจ้งจำนวนที่ต้องการในแชต LINE';
            elements.contactSummary.hidden = false;
            elements.contactProductTitle.textContent = activeProduct.title;
            elements.contactProductMeta.textContent = buildOrderMeta();
            elements.confirmLineText.textContent = 'คัดลอกข้อมูลและเปิด LINE';
        } else {
            elements.contactEyebrow.textContent = 'ติดต่อ CBODY';
            elements.contactDialogTitle.textContent = 'ติดต่อแอดมิน';
            elements.contactDialogText.textContent = 'สอบถามข้อมูลสินค้าและการสั่งซื้อกับแอดมินผ่าน LINE';
            elements.contactSummary.hidden = true;
            elements.confirmLineText.textContent = 'เปิด LINE';
        }

        elements.contactDialog.showModal();
        document.body.classList.add('dialog-open');
    }

    function closeContactDialog() {
        elements.contactDialog.close();
        document.body.classList.remove('dialog-open');
        if (contactMode === 'product' && lastTrigger) {
            lastTrigger.focus({ preventScroll: true });
        } else if (contactTrigger) {
            contactTrigger.focus({ preventScroll: true });
        }
    }

    function confirmContact() {
        window.open(data.store.lineUrl, '_blank', 'noopener,noreferrer');
        if (contactMode === 'product') {
            copyText(buildOrderMessage())
                .then(function () { showToast('คัดลอกข้อมูลสินค้าแล้ว นำไปวางใน LINE ได้เลย'); })
                .catch(function () { showToast('เปิด LINE แล้ว กรุณาแจ้งรหัส ' + activeProduct.id); });
        }
        closeContactDialog();
    }

    elements.categoryList.addEventListener('click', function (event) {
        var button = event.target.closest('[data-category]');
        if (button) {
            selectCategory(button.dataset.category);
        }
    });

    elements.productGrid.addEventListener('click', function (event) {
        var button = event.target.closest('[data-product]');
        if (button) {
            openProduct(button.dataset.product, button);
        }
    });

    elements.thumbnailList.addEventListener('click', function (event) {
        var button = event.target.closest('[data-image]');
        if (button) {
            setActiveImage(Number(button.dataset.image), true);
        }
    });

    elements.colorOptions.addEventListener('click', function (event) {
        var button = event.target.closest('[data-color]');
        if (!button) {
            return;
        }
        activeColor = Number(button.dataset.color);
        var selected = activeProduct.colors[activeColor];
        if (typeof selected.image === 'number') {
            activeImage = selected.image;
        }
        renderGallery();
        renderOptions();
        startGalleryAutoplay();
    });

    elements.sizeOptions.addEventListener('click', function (event) {
        var button = event.target.closest('[data-size]');
        if (button) {
            activeSize = Number(button.dataset.size);
            renderOptions();
        }
    });

    elements.dialogClose.addEventListener('click', closeProduct);
    elements.dialog.addEventListener('click', function (event) {
        if (event.target === elements.dialog) {
            closeProduct();
        }
    });
    elements.dialog.addEventListener('cancel', function (event) {
        event.preventDefault();
        closeProduct();
    });
    elements.dialog.addEventListener('close', function () {
        stopGalleryAutoplay();
        document.body.classList.toggle('dialog-open', elements.contactDialog.open);
    });

    elements.galleryPrev.addEventListener('click', function () { setActiveImage(activeImage - 1, true); });
    elements.galleryNext.addEventListener('click', function () { setActiveImage(activeImage + 1, true); });
    elements.purchaseButton.addEventListener('click', function () {
        openContactDialog('product', elements.purchaseButton);
    });
    elements.headerLineButton.addEventListener('click', function () {
        openContactDialog('general', elements.headerLineButton);
    });
    elements.contactDialogClose.addEventListener('click', closeContactDialog);
    elements.contactCancel.addEventListener('click', closeContactDialog);
    elements.contactDialog.addEventListener('click', function (event) {
        if (event.target === elements.contactDialog) {
            closeContactDialog();
        }
    });
    elements.contactDialog.addEventListener('cancel', function (event) {
        event.preventDefault();
        closeContactDialog();
    });
    elements.contactDialog.addEventListener('close', function () {
        document.body.classList.toggle('dialog-open', elements.dialog.open);
    });
    elements.confirmLineButton.addEventListener('click', confirmContact);
    elements.copyLineId.addEventListener('click', function () {
        copyText(data.store.lineId).then(function () { showToast('คัดลอก LINE ID แล้ว'); });
    });
    elements.retryButton.addEventListener('click', loadProducts);

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopGalleryAutoplay();
        } else if (elements.dialog.open) {
            startGalleryAutoplay();
        }
    });

    loadProducts();
})();
