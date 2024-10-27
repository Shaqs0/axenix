import { useState, useEffect } from 'react';
import { Legend, SeatMap } from '../../components';
import { PREFIX } from '../../helpers/API';

export function BookingCoupePage() {
	const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
	const [totalSeats, setTotalSeats] = useState<number>(0);

	useEffect(() => {
		const fetchSeats = async () => {
			try {
				const response = await fetch(`${PREFIX}/api/info/wagons`);
				const data = await response.json();
				const platzkart = data.Result.find(wagon => wagon.wagon_id === 1); 
				setTotalSeats(platzkart.seats.length); 
			} catch (error) {
				console.error('Ошибка при получении мест:', error);
			}
		};

		fetchSeats();
	}, []);

	const handleSeatClick = (seatNumber: number, bookingStatus: string) => {
		if (bookingStatus === 'FREE') {
			setSelectedSeats((prevSelectedSeats) =>
				prevSelectedSeats.includes(seatNumber)
					? prevSelectedSeats.filter((seat) => seat !== seatNumber)
					: [...prevSelectedSeats, seatNumber]
			);
		}
	};

	const handleShowSelectedSeats = () => {
		alert(`Вы выбрали места: ${selectedSeats.join(', ')}`);
	};

	return (
		<div className="flex h-[70vh] flex-col items-center justify-center bg-[#151515] p-4">
			<h1 className="mb-4 text-2xl font-bold text-[white]">Схема вагона</h1>
			<SeatMap totalSeats={totalSeats} selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
			<Legend />
			<button
				onClick={handleShowSelectedSeats}
				className="mt-4 rounded bg-[blue] px-4 py-2 text-[white] hover:bg-[blue]"
			>
				Показать выбранные места
			</button>
		</div>
	);
}
