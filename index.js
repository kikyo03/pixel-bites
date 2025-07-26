const categoryBtns = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product');

// Add click event to each category button
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get selected category
        const selectedCategory = btn.getAttribute('data-category');
        
        // Filter products
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (selectedCategory === 'all' || productCategory === selectedCategory) {
                product.classList.remove('hidden');
                // Add smooth animation
                product.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                product.classList.add('hidden');
            }
        });
    });
});