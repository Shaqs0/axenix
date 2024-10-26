import { Seat } from '../../ui/Seat/Seat';

type SeatMapProps = {
  totalSeats: number;
};

export function SeatMap({ totalSeats }: SeatMapProps) {
	const seats = Array.from({ length: totalSeats }, (_, index) => index + 1);

	return (
		<div className="grid grid-cols-4 gap-4">
			{seats.map((seatNumber) => (
				<Seat key={seatNumber} number={seatNumber} isReserved={seatNumber % 3 === 0} />
			))}
		</div>
	);
}
