import React from "react";

const CreateRoom = (props) => {
    const create = async (e) => {
        e.preventDefault();

        const resp = await fetch("https://server-webrtc.onrender.com/create");
        const { room_id } = await resp.json();

		props.history.push(`/room/s57X8YIg`)
    };

    return (
        <div>
            <button onClick={create}>Create Room</button>
        </div>
    );
};

export default CreateRoom;
