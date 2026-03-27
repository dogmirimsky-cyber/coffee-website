// Replace YOUR_BOT_TOKEN_HERE with your actual Telegram Bot token.
const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const CHAT_USERNAME = '@Brosky_Order'; // Telegram username to receive the message.

document.getElementById('orderForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const coffee = document.getElementById('coffee').value;
    const quantity = document.getElementById('quantity').value;

    const message = `🛒 New coffee order!\n\nName: ${name}\nCoffee: ${coffee}\nQuantity: ${quantity}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = new URLSearchParams({
        chat_id: CHAT_USERNAME,
        text: message,
        parse_mode: 'HTML'
    });

    try {
        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        if (data.ok) {
            document.getElementById('status').textContent = '✅ Order sent! Thank you.';
            this.reset();
        } else {
            document.getElementById('status').textContent = '❌ Failed to send order. Please try again.';
            console.error('Telegram API error:', data);
        }
    } catch (err) {
        document.getElementById('status').textContent = '❌ Error sending order.';
        console.error(err);
    }
});
