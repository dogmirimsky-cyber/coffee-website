const CHAT_ID = '8001144306';
const BOT_TOKEN = '8332315107:AAHq_a443j_z0_j3_u1_o3_p4_r7_t9_w1_x0'; // Replace with your actual bot token

function buyProduct(productName, productPrice) {
    const message = `New order: ${productName} - ${productPrice}`;
    sendMessageToTelegram(message);
}

async function sendMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = {
        chat_id: CHAT_ID,
        text: message,
    };

    try {
        const response = await fetch(`${url}?${new URLSearchParams(params)}`);
        if (!response.ok) {
            console.error('Telegram API error:', response.status, response.statusText);
        } else {
            console.log('Message sent to Telegram successfully!');
        }
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}
