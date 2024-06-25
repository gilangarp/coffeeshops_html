function menu(svgElement) {
    let list = document.getElementById('drop');

    if (svgElement.getAttribute('name') === 'menu') {
        svgElement.setAttribute('name', 'close');
        list.classList.remove('hidden');
        list.classList.add('block');
    } else {
        svgElement.setAttribute('name', 'menu');
        list.classList.remove('block');
        list.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('scroll'); 
    const scrollLeftBtn = document.getElementById('btn-scroll-left');
    const scrollRightBtn = document.getElementById('btn-scroll-right');

    scrollLeftBtn.addEventListener('click', function() {
        container.scrollLeft -= 100; 
    });

    scrollRightBtn.addEventListener('click', function() {
        container.scrollLeft += 100;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var categoryBtn = document.getElementById('categoryBtn');
    var categoryDropdown = document.getElementById('categoryDropdown');

    // Menangani klik pada opsi dropdown
    categoryDropdown.addEventListener('click', function(event) {
        var target = event.target;
        if (target.tagName === 'OPTION') {
            // Lakukan sesuatu dengan nilai opsi yang dipilih
            console.log('Selected option:', target.value);

            // Sembunyikan dropdown dan tampilkan kembali tombol categoryBtn
            categoryDropdown.classList.remove('show');
            categoryBtn.classList.remove('hidden');
        }
    });

    // Menangani klik pada tombol categoryBtn
    categoryBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event klik dari menyebar ke elemen lain

        // Toggle class 'show' untuk menampilkan atau menyembunyikan dropdown
        categoryDropdown.classList.toggle('show');
        categoryBtn.classList.add('hidden');
    });

    // Menyembunyikan dropdown jika user mengklik di luar dropdown
    document.addEventListener('click', function(event) {
        if (!categoryDropdown.contains(event.target) && event.target !== categoryBtn) {
            categoryDropdown.classList.remove('show');
            categoryBtn.classList.remove('hidden');
        }
    });
});
