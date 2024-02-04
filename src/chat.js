// chat.js

import React from 'react';

export function createConnection(serverUrl, roomId) {
    return {
        connect() {
            console.log(
                '✅ Подключение к комнате "' + roomId + '" по адресу ' + serverUrl + '...'
            );
        },
        disconnect() {
            console.log(
                '❌ Отключение от комнаты "' + roomId + '" по адресу ' + serverUrl
            );
        }
    };
}

export const ChatComponent = () => {
    return (
        <div style={chatContainerStyle}>
            <div style={headerStyle}>Информация о Танцах, Путешествии и Музыке</div>
            <div style={contentStyle}>Пример компонента чата</div>
        </div>
    );
};

// Стили
const chatContainerStyle = {
    width: '300px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    padding: '16px',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
};

const contentStyle = {
    fontSize: '14px',
    color: '#555',
};
