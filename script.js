document.addEventListener('DOMContentLoaded', () => {
    const cart = []; // Simple array to hold cart items

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.productId;
            const productName = e.target.closest('.product-item').querySelector('h3').textContent;
            const productPrice = parseFloat(e.target.closest('.product-item').querySelector('.price').textContent.replace('$', ''));

            // In a real app, you'd manage quantities, etc.
            cart.push({ id: productId, name: productName, price: productPrice });
            alert(`${productName} added to cart!`);
            console.log('Cart:', cart);
        });
    });

    // Simulate purchase (this will be triggered by a checkout button on a separate page)
    // For now, we'll add a placeholder function that could be called.
    window.simulatePurchase = (orderId, orderDetails) => {
        console.log('Simulating purchase for order:', orderId);
        console.log('Order details:', orderDetails);

        // Here is where we would call the function to send the Telegram message.
        // We'll implement this in the next steps.
        alert('Purchase successful! Thank you for your order.');
        // Redirect to a thank you page or clear cart in a real application
    };

    // Example of how you might trigger simulatePurchase if you had a checkout button:
    // document.getElementById('checkout-button')?.addEventListener('click', () => {
    //     const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    //     simulatePurchase(orderId, cart);
    // });
});