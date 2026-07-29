document.addEventListener('DOMContentLoaded', () => {
    const chatItems = document.querySelectorAll('.chat-item');
    const sendBtn = document.querySelector('.send-btn');
    const chatInput = document.querySelector('.chat-input-area input');
    const messagesContainer = document.querySelector('.chat-messages');
    const searchChatInput = document.querySelector('.chat-search input');

    const conversations = {
        "Equipo LabXP": [
            { type: 'incoming', text: '¡Hola Estefano! Revisamos tu perfil y quedamos muy contentos con tus certificados.', time: '10:40 AM' },
            { type: 'incoming', text: 'Tu postulación para la microexperiencia de Desarrollo Web fue aprobada. 🚀', time: '10:41 AM' },
            { type: 'outgoing', text: '¡Muchas gracias! Quedo atento a las indicaciones para empezar.', time: '10:42 AM' }
        ],
        "Tech Corp Recruiters": [
            { type: 'incoming', text: 'Hola Estefano, vimos tu trabajo en la plataforma.', time: 'Ayer' },
            { type: 'incoming', text: '¿Tendrás disponibilidad para una llamada mañana?', time: 'Ayer' }
        ],
        "María Gómez (Mentor)": [
            { type: 'incoming', text: 'Hola, ¿cómo vas con la tarea de CSS Flexbox?', time: 'Mar 12' },
            { type: 'outgoing', text: 'Hola María, ya envié los cambios al repositorio.', time: 'Mar 12' },
            { type: 'incoming', text: 'Revisé tu código, todo se ve excelente.', time: 'Mar 12' }
        ]
    };

    let activeUser = "Equipo LabXP";

    function renderMessages(userName) {
        messagesContainer.innerHTML = '<div class="date-divider"><span>Conversación</span></div>';
        
        const chatHistory = conversations[userName] || [];
        
        chatHistory.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', msg.type);
            
            const checkIcon = msg.type === 'outgoing' ? " <i class='bx bx-check-double'></i>" : "";
            
            messageElement.innerHTML = `
                <div class="message-content">
                    <p>${escapeHTML(msg.text)}</p>
                    <span class="message-time">${msg.time}${checkIcon}</span>
                </div>
            `;
            messagesContainer.appendChild(messageElement);
        });

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            chatItems.forEach(i => i.classList.remove('active'));
            item.classList.remove('unread');
            item.classList.add('active');

            const userName = item.querySelector('h4').textContent.trim();
            const userImg = item.querySelector('img').src;

            activeUser = userName;

            document.querySelector('.chat-user-details h3').textContent = userName;
            document.querySelector('.chat-user-details img').src = userImg;

            renderMessages(userName);
        });
    });

    searchChatInput.addEventListener('input', (e) => {
        const filterText = e.target.value.toLowerCase().trim();

        chatItems.forEach(item => {
            const userName = item.querySelector('h4').textContent.toLowerCase();
            const previewText = item.querySelector('.preview').textContent.toLowerCase();

            if (userName.includes(filterText) || previewText.includes(filterText)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    function sendMessage() {
        const text = chatInput.value.trim();

        if (text !== '') {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            if (!conversations[activeUser]) {
                conversations[activeUser] = [];
            }

            conversations[activeUser].push({
                type: 'outgoing',
                text: text,
                time: timeString
            });

            renderMessages(activeUser);
            chatInput.value = '';
        }
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    sendBtn.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});