// CBODY GO Guide - 导航菜单与移动端交互

document.addEventListener('DOMContentLoaded', function() {
    // 动态生成导航菜单
    function initNavigation() {
        const navMenu = document.querySelector('.nav-menu');
        if (!navMenu) return;

        // 导航菜单配置
        const menuItems = [
            { title: 'ข้อควรรู้สำหรับพนักงาน', path: 'index.html', id: 'home' },
            { title: '1. วิธีใช้ระบบรับ RMB ของแพลตฟอร์ม', path: '1-rmb-payment/index.html', id: '1-rmb-payment' },
            // { title: '2. โปรไฟล์และอัปโหลดรูป', path: '2-profile-media/index.html', id: '2-profile-media' },
            // { title: '3. สถานะงานและตำแหน่ง', path: '3-work-status/index.html', id: '3-work-status' },
            // { title: '4. ขั้นตอนการรับงาน', path: '4-order-process/index.html', id: '4-order-process' },
            // { title: '5. แชทและการแจ้งเตือน', path: '5-communication/index.html', id: '5-communication' },
            { title: '2. วิธีชำระเงิน/ถอนเงิน', path: '6-finance/index.html', id: '6-finance' },
            // { title: '7. ความปลอดภัยและการร้องเรียน', path: '7-safety/index.html', id: '7-safety' },
            // { title: '8. คำถามที่พบบ่อย', path: '8-faq/index.html', id: '8-faq' }
        ];

        // 获取当前页面路径
        const currentPath = window.location.pathname;

        // 判断是否在子目录中 - 检查路径中是否包含子目录名称
        const isInSubdir = currentPath.match(/\/([\d\w-]+)\/index\.html$/) && !currentPath.endsWith('/guide/index.html');
        const pathPrefix = isInSubdir ? '../' : './';

        // 生成菜单 HTML
        let menuHTML = '';
        menuItems.forEach(item => {
            const fullPath = pathPrefix + item.path;

            // 更精确的 active 判断
            let isActive = false;
            if (item.id === 'home') {
                // 首页：路径包含 /guide/ 或以 /guide/index.html 结尾
                isActive = currentPath.includes('/guide/') && (currentPath.endsWith('/guide/index.html') || currentPath.endsWith('/guide/'));
            } else {
                // 其他页面：路径包含对应的目录名
                isActive = currentPath.includes('/' + item.id + '/');
            }

            menuHTML += `
                <div class="nav-item">
                    <a href="${fullPath}"${isActive ? ' class="active"' : ''}>${item.title}</a>
                </div>
            `;
        });

        navMenu.innerHTML = menuHTML;
    }

    // 初始化导航
    initNavigation();

    // 创建移动端菜单按钮
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '☰';
    mobileBtn.setAttribute('aria-label', '打开导航菜单');
    document.body.appendChild(mobileBtn);

    const sidebar = document.querySelector('.sidebar');

    // 切换侧边栏
    mobileBtn.addEventListener('click', function() {
        sidebar.classList.toggle('mobile-open');
        mobileBtn.innerHTML = sidebar.classList.contains('mobile-open') ? '✕' : '☰';
    });

    // 点击内容区域关闭侧边栏（仅移动端）
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sidebar.classList.contains('mobile-open')) {
                sidebar.classList.remove('mobile-open');
                mobileBtn.innerHTML = '☰';
            }
        });
    }
});
