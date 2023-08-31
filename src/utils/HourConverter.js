import React, { useState } from 'react'

const HourConverter = (event) => {
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    const newMinutes = event.target.value;
    setMinute(newMinutes);
    const newHours = Math.floor(newMinutes / 60);
    setHour(newHours);

    return [minute, hour]
}

export default HourConverter