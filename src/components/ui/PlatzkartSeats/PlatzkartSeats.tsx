import { useState, useEffect } from 'react';
import axios from 'axios';
import { PREFIX } from '../../../helpers/API';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export function PlatzkartSeats() {
	const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
	const [seats, setSeats] = useState<any[]>([]);
	const [hoveredSeat, setHoveredSeat] = useState<{ seatNum: string; block: number } | null>(null);
	const accessToken = useSelector((state: RootState) => state.auth.accessToken);

	const handleSeatClick = (seatNumber: number, bookingStatus: string) => {
		if (bookingStatus === 'FREE') {
			setSelectedSeats((prevSelectedSeats) =>
				prevSelectedSeats.includes(seatNumber)
					? prevSelectedSeats.filter((seat) => seat !== seatNumber)
					: [...prevSelectedSeats, seatNumber]
			);
		}
	};

	const isSeatSelected = (seatNumber: number) => selectedSeats.includes(seatNumber);

	const fetchSeats = async () => {
		try {
			const response = await axios.get(`${PREFIX}/api/info/wagons`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const platzkartWagon = response.data.Result.find((wagon: any) => wagon.wagon_id === 1);
			setSeats(platzkartWagon.seats);
		} catch (error) {
			console.error('Ошибка при получении данных:', error);
		}
	};

	useEffect(() => {
		fetchSeats();
	}, [accessToken]);

	const compartments = Array.from({ length: Math.ceil(seats.length / 6) }, (_, i) =>
		seats.slice(i * 6, i * 6 + 6)
	);

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-[50px] font-semibold tracking-[4px] text-[white]">Плацкарт - выбор мест</h1>
			<div className="mt-8 rounded-lg border-4 border-[gray] ">
				<div className="flex flex-wrap justify-center gap-0">
					{compartments.map((compartment, i) => (
						<div key={i} className="flex flex-col items-center rounded-md border border-[gray] p-4">
							<div className="mb-4 flex flex-col items-center">
								<div className="grid grid-cols-2 gap-2">
									{compartment.slice(0, 4).map((seat) => (
										<button
											key={seat.seat_id}
											onClick={() => handleSeatClick(parseInt(seat.seatNum), seat.bookingStatus)}
											onMouseEnter={() => setHoveredSeat({ seatNum: seat.seatNum, block: seat.block })}
											onMouseLeave={() => setHoveredSeat(null)}
											className={`flex size-16 items-center justify-center rounded-md text-lg font-semibold ${
												seat.bookingStatus === 'BOOKED'
													? 'cursor-not-allowed bg-[red] text-[white]'
													: isSeatSelected(parseInt(seat.seatNum))
														? 'bg-[green] text-[white]'
														: 'cursor-pointer bg-[gray] text-[black]'
											}`}
											disabled={seat.bookingStatus === 'BOOKED'}
										>
											{seat.seatNum}
										</button>
									))}
								</div>
								<div className="invisible size-16"></div>
								<div className="invisible size-16"></div>
							</div>
							<div className="-mt-2 flex gap-2">
								{compartment.slice(4, 6).map((seat) => (
									<button
										key={seat.seat_id}
										onClick={() => handleSeatClick(parseInt(seat.seatNum), seat.bookingStatus)}
										onMouseEnter={() => setHoveredSeat({ seatNum: seat.seatNum, block: seat.block })}
										onMouseLeave={() => setHoveredSeat(null)}
										className={`flex size-16 items-center justify-center rounded-md text-lg font-semibold ${
											seat.bookingStatus === 'BOOKED'
												? 'cursor-not-allowed bg-[red] text-[white]'
												: isSeatSelected(parseInt(seat.seatNum))
													? 'bg-[green] text-[white]'
													: 'cursor-pointer bg-[gray] text-[black]'
										}`}
										disabled={seat.bookingStatus === 'BOOKED'}
									>
										{seat.seatNum}
									</button>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-6">
				<p className="text-xl text-[white]">Вы выбрали места: {selectedSeats.join(', ') || 'нет'}</p>
				{hoveredSeat && (
					<p className="text-lg text-[white]">
						{hoveredSeat.block === 1 ? 'Верхнее место' : 'Нижнее место'}
					</p>
				)}
			</div>
		</div>
	);
}
