import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './cssroms/Musicrooms.css';

const MusicRoom = () => {
    const fontStyles = {
        fontFamily: '"Barlow", sans-serif',
    };

    const events = [
        {
            title: 'Людвиг ван Бетховен',
            date: '10 мая 2024',
            description: 'Сегодня вы можете насладиться прекрасным концертом в исполнении молодого и талантливого Кристиана Долье.',
            linkText: 'Успейте заказать билеты на сайте',
            link: 'https://www.musicscool.kg',
            list: ['Игра на фортепиано', 'Оркестровая музыка', 'Композиторская техника'],
        },
        {
            title: 'Мастер-класс по игре на гитаре',
            date: '10 мая 2024',
            description: 'Примите участие в мастер-классе от известного гитариста и освойте технику игры на гитаре.',
            linkText: 'Успейте заказать билеты на сайте',
            link: 'https://www.musicscool.kg',
            list: ['Техники игры на гитаре', 'Профессиональные советы', 'Интерактивная практика'],
        },
        {
            title: 'Вечер джаза и блюза',
            date: '25 июня 2024',
            description: 'Наслаждайтесь атмосферой джаза и блюза на нашем вечере с живым исполнением.',
            linkText: 'Успейте заказать билеты на сайте',
            link: 'https://www.musicscool.kg',
            list: ['Импровизация в джазе', 'Блюзовые ритмы', 'Сольные выступления'],
        },
        {
            title: 'Классический концерт молодых талантов',
            date: '5 августа 2024',
            description: 'Приглашаем вас на концерт молодых музыкантов, где звучат произведения классической музыки.',
            linkText: 'Успейте заказать билеты на сайте',
            link: 'https://www.musicscool.kg',
            list: ['Симфонии молодых композиторов', 'Виртуозные соло', 'Оркестровые произведения'],
        },
        {
            title: 'Акустический вечер с солистом',
            date: '15 сентября 2024',
            description: 'Погрузитесь в атмосферу аккомпанирования и сольных выступлений нашего виртуозного солиста.',
            linkText: 'Успейте заказать билеты на сайте',
            link: 'https://www.musicscool.kg',
            list: ['Инструментальные соло', 'Вокальные выступления', 'Акустические аранжировки'],
        },
        {
            title: 'Рок-концерт "Гроза звуков"',
            date: '3 октября 2024',
            description: 'Готовьтесь к взрыву звуков и энергии на нашем рок-концерте с участием популярных рок-групп.',
            linkText: 'Успейте заказать билеты на сайте',
            link: 'https://www.musicscool.kg',
            list: ['Энергичные рок-баллады', 'Гитарные соло', 'Живые выступления групп'],
        },
    ];

    const containerRef = useRef(null);
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const handleScroll = () => {
        if (containerRef.current) {
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (containerTop < windowHeight / 2) {
                fadeIn.opacity.setValue(1);
            } else {
                fadeIn.opacity.setValue(0);
            }
        }
    };

    return (
        <div
            className="room-container"
            ref={containerRef}
            onScroll={handleScroll}
        >
            <animated.h1
                style={{
                    textAlign: 'center',
                    fontSize: 30,
                    ...fontStyles,
                    ...fadeIn,
                }}
            >
                Музыкальная комната
            </animated.h1>
            <div className="events-container">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="event"
                        style={{
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <div className="event-header">
                            {event.title && <h2 style={{ color: 'black' }}>{event.title}</h2>}
                            {event.date && <p className="date">{event.date}</p>}
                        </div>
                        {event.description && (
                            <p className="description" style={{ color: 'black' }}>
                                {event.description}
                            </p>
                        )}
                        {event.list && (
                            <ul style={{ paddingLeft: '20px', color: 'black' }}>
                                {event.list.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {event.linkText && (
                            <div className="link-container">
                                <h2>{event.linkText}</h2>
                                <a href={event.link}>{event.link}</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MusicRoom;