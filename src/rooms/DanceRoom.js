// DanceRooms.js
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './cssroms/DanceRooms.css';

const DanceRoom = () => {
    const fontStyles = {
        fontFamily: '"Barlow", sans-serif',
    };

    const events = [
        {
            title: 'Танцевальный вечер',
            date: '10 мая 2024',
            description: 'Присоединяйтесь к нашему танцевальному вечеру в исполнении талантливых хореографов.',
            list: [
                'Танцевальные номера',
                'Живая музыка',
                'Веселая атмосфера',
            ],
            linkText: 'Купить абонимент сейчас',
            link: 'https://www.dancescool.kg',
        },
        {
            title: 'Мастер-класс по сальсе',
            date: '15 августа 2024',
            description: 'Изучите основы сальсы от профессиональных танцоров.',
            list: [
                'Уроки по основам сальсы',
                'Танцевальные комбинации',
                'Практика с партнером',
            ],
            linkText: 'Купить абонимент сейчас',
            link: 'https://www.dancescool.kg',
        },
        {
            title: 'Энергичные латиноамериканские танцы',
            date: '5 сентября 2024',
            description: 'Научитесь танцевать под зажигательные ритмы латиноамериканских мелодий.',
            linkText: 'Купить абонимент сейчас',
            link: 'https://www.dancescool.kg',
        },
        {
            title: 'Танцевальный конкурс "Звезды в движении"',
            date: '30 сентября 2024',
            description: 'Примите участие в нашем захватывающем танцевальном конкурсе и выиграйте ценные призы.',
            linkText: 'Купить абонимент сейчас',
            link: 'https://www.dancescool.kg',
        },
        {
            title: 'Вечер танцев под открытым небом',
            date: '10 июля 2024',
            description: 'Наслаждайтесь вечером танцев под звездами с лучшими танцорами года.',
            linkText: 'Купить абонимент сейчас',
            link: 'https://www.dancescool.kg',
        },
        {
            title: 'Танцевальная встреча для начинающих',
            date: '1 сентября 2024',
            description: 'Познакомьтесь с миром танцев на нашем мероприятии для новичков.',
            linkText: 'Купить абонимент сейчас',
            link: 'https://www.dancescool.kg',
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
                Танцевальная комната
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
                            {event.title && <h2 style={{ color: 'black', margin: "auto"}}>{event.title}</h2>}
                            {event.date && <p style={{}} className="date">{event.date}</p>}
                        </div>
                        {event.description && <p className="description" style={{ color: 'black' }}>{event.description}</p>}
                        {event.list && (
                            <ul>
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

export default DanceRoom;
