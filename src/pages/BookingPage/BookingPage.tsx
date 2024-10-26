import { useState } from 'react';
import { Legend, SeatMap } from '../../components';

export function BookingPage() {
	const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

	const handleSeatClick = (seatNumber: number) => {
		setSelectedSeats((prevSelectedSeats) =>
			prevSelectedSeats.includes(seatNumber)
				? prevSelectedSeats.filter((seat) => seat !== seatNumber)
				: [...prevSelectedSeats, seatNumber]
		);
	};

	const handleShowSelectedSeats = () => {
		alert(`Вы выбрали места: ${selectedSeats.join(', ')}`);
	};

	return (
		<div className="flex h-[70vh] flex-col items-center justify-center bg-[#151515] p-4">
			<h1 className="mb-4 text-2xl font-bold text-[white]">Схема вагона</h1>
			<SeatMap totalSeats={16} selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
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