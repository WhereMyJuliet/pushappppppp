// App.js

import React, { useState } from "react";
import MusicRoom from "./rooms/Musicroom";
import TravelRoom from "./rooms/TravelRoom";
import DanceRoom from "./rooms/DanceRoom";
import { ChatComponent } from "./chat";

export default function App() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);

    const getRoomComponent = (room) => {
        switch (room) {
            case "general":
                return <ChatComponent/>;
            case "music":
                return <MusicRoom/>;
            case "travel":
                return <TravelRoom/>;
            case "dance":
                return <DanceRoom/>;
            default:
                return null;
        }
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
            <label style={{display: "flex", marginBottom: "10px"}}>
                Выберите комнату чата:
                <select style={{width: "40%", margin: "auto"}} value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}>
                    <option value="general">Общая</option>
                    <option value="travel">Путешествия</option>
                    <option value="music">Музыка</option>
                    <option value="dance">Танцы</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)} style={{marginBottom: "10px"}}>
                {show ? "Закрыть чат" : "Открыть чат"}
            </button>
            {show && <hr/>}
            {show && (
                <div style={{width: "100%", textAlign: "center"}}>
                    {getRoomComponent(roomId)}
                </div>
            )}
        </div>
    );
}