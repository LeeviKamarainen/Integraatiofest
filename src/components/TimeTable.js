import React from 'react'

function Timetable() {
  return (
    <ul className="timetable-list">
        <h3 className="timetable-list-title">Perjantai</h3>
        <li className="timetable-list-item">17:00 - 18:00 Kaljaa</li>
        <li className="timetable-list-item">18:00 - 19:00 Illallinen</li>
        <li className="timetable-list-item">19:00 - 20:00 Sauna</li>
        <li className="timetable-list-item">20:00 - 04:00 Lisää kaljaa</li>

        <h3 className="timetable-list-title">Lauantai</h3>
        <li className="timetable-list-item">10:00 - 11:00 Aamupala</li>
        <li className="timetable-list-item">11:00 - 12:00 Kaljaa</li>
        <li className="timetable-list-item">12:00 - 13:00 Lounas</li>
        <li className="timetable-list-item">13:00 - 04:00 Kaljaa</li>

        <h3 className="timetable-list-title">Sunnuntai</h3>
        <li className="timetable-list-item">10:00 - 11:00 Palju</li>
        <li className="timetable-list-item">11:00 - 12:00 Sauna</li>
        <li className="timetable-list-item">12:00 - 13:00 Lounas</li>
        <li className="timetable-list-item">13:00 - 14:00 Siivous</li>
        <li className="timetable-list-item">14:00 - 15:00 Kotiinlähtö</li>
        <li className="timetable-list-item">15:00 - 00:00 Kaljaa</li>
    </ul>
)}

export default Timetable