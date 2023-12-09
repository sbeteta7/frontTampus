
import React, {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';



function Resv_Cal() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSelect = (date) => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        return {
            name: format(date, 'EEEE'),
            day: format(date, 'dd'),
            month: format(date, 'yyyy'),
        }
    }

    const formattedDate = formatDate(selectedDate)

    return (
        <>
            <div className='px-20'>
                <p className='py-2 text-[20px] '>Seleccione el dia</p>
                <Calendar 
                    date= {selectedDate} 
                    onChange={handleSelect}
                />

                <p className="text-lg font-semibold mb-2">Fecha seleccionada:</p>
                <div className='max-w-sm mx-auto bg-white rounded-lg border border-black shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105'>
                    <div className="flex flex-col space-y-2 text-center">
                        <p className="text-gray-700">{formattedDate.name}</p>
                        <p className="text-2xl font-bold">{formattedDate.day}</p>
                        <p className="text-gray-700">{formattedDate.month}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resv_Cal;
