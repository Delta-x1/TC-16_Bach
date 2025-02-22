document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const submenus = document.querySelectorAll('.submenu');

    document.getElementById('menu-mobile').addEventListener('click', () => menu.classList.add('show'));
    document.getElementById('btn-close').addEventListener('click', () => {
        menu.classList.remove('show');
        submenus.forEach(submenu => submenu.classList.add('show-1')); // Ẩn tất cả submenu
    });

    function createToggleButtons() {
        const menuItems = document.querySelectorAll('.nav-item');
        menuItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                if (!item.querySelector('.toggle-submenu')) { // Kiểm tra xem nút đã tồn tại chưa
                    const toggleButton = document.createElement('button');
                    toggleButton.classList.add('toggle-submenu');
                    toggleButton.innerText = '▼';
                    toggleButton.style.cursor = 'pointer';
                    item.appendChild(toggleButton);

                    toggleButton.addEventListener('click', (event) => {
                        event.stopPropagation();
                        submenu.classList.toggle('show-1'); // Chuyển đổi class 'show'
                    });
                }
            }
        });
    }

    function updateToggleButtons() {
        submenus.forEach(submenu => submenu.classList.add('show-1')); // Ẩn tất cả submenu ban đầu
        createToggleButtons();

        const menuItems = document.querySelectorAll('.nav-item');
        menuItems.forEach(item => {
            const toggleButton = item.querySelector('.toggle-submenu');
            if (toggleButton) {
                toggleButton.style.display = 'inline'; // Luôn hiển thị nút toggle
            }
        });
    }

    updateToggleButtons();
});
function changeImage(selectedImage) {
    // Thay đổi ảnh lớn
    document.getElementById('mainImage').src = selectedImage.src;

    // Xóa class 'active' khỏi tất cả các ảnh nhỏ
    const smallImages = document.querySelectorAll('.small-image');
    smallImages.forEach(img => {
        img.classList.remove('active');
    });

    // Thêm class 'active' cho ảnh đã được nhấn
    selectedImage.classList.add('active');
}