// TravelRoom.js
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './cssroms/TravelRooms.css';

const TravelRoom = () => {
    const fontStyles = {
        fontFamily: '"Barlow", sans-serif',
    };

    const events = [
        {
            title: 'Путешествия с TravelX',
            description: 'Добро пожаловать в увлекательный мир путешествий с TravelX! Наши туры предлагают незабываемые приключения, комфортное размещение и профессиональные гиды. Открывайте новые горизонты вместе с нами!',
            list: [
                'Комфортное размещение',
                'Профессиональные гиды',
                'Незабываемые приключения',
            ],
        },
        {
            title: 'Экскурсии по историческим местам',
            description: 'Исследуйте богатое историческое наследие мира с нашими захватывающими экскурсиями. Посетите древние замки, храмы и музеи, чтобы узнать о культуре и истории различных стран.',
            list: [
                'Узнайте о культуре и истории',
                'Посетите древние замки, храмы и музеи',
            ],
            linkText: 'Забронировать тур',
            link: 'https://www.travelx.tours',
        },
        {
            title: 'Приключенческие туры для активных духом',
            description: 'Любите активный отдых? Присоединяйтесь к нашим приключенческим турам! Вас ждут увлекательные походы по горам, велосипедные прогулки и водные приключения под руководством опытных инструкторов.',
            list: [
                'Увлекательные походы по горам',
                'Велосипедные прогулки',
                'Водные приключения под руководством опытных инструкторов',
            ],
            linkText: 'Забронировать тур',
            link: 'https://www.travelx.tours',
        },
        {
            title: 'Отдых на белоснежных пляжах',
            description: 'Мечтаете о роскошном отдыхе на берегу моря? Отправьтесь с нами на пляжные курорты! Насладитесь теплым солнцем, кристально чистым морем и высококлассным обслуживанием.',
            list: [
                'Роскошный отдых на берегу моря',
                'Теплое солнце',
                'Кристально чистое море',
            ],
            linkText: 'Забронировать пляжный отдых',
            link: 'https://www.travelx.tours/beach-resorts',
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
                Путешествия с TravelX
            </animated.h1>
            <div className="events-container">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={index === 0 ? 'first-event' : 'event'}
                        style={{
                            boxShadow: index === 0 ? '0 10px 20px rgba(255, 223, 0, 0.7)' : '0 10px 20px rgba(0, 0, 0, 0.5)',
                            backgroundColor: index === 0 ? 'rgba(255, 223, 0, 0.7)' : '',
                        }}
                    >
                        <div className="event-header">
                            {event.title && <h2 style={{ color: "black"}}>{event.title}</h2>}
                        </div>
                        {event.description && (
                            <div className="description" style={{ color:'black' }}>
                                <p>{event.description}</p>
                                {event.list && (
                                    <ul>
                                        {event.list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
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

export default TravelRoom;
