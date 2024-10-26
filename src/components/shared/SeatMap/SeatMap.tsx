import { Seat } from '../../ui/Seat/Seat';

type SeatMapProps = {
  totalSeats: number;
  selectedSeats: number[];
  onSeatClick: (seatNumber: number) => void;
};

export function SeatMap({ totalSeats, selectedSeats, onSeatClick }: SeatMapProps) {
	const seatGroups = [
		[1, 2, 5, 6],
		[3, 4, 7, 8],
		[9, 10, 13, 14],
		[11, 12, 15, 16],
	];

	return (
		<div className="flex flex-col items-center rounded-lg border-2 border-[orange] p-2">
			{seatGroups.map((group, index) => (
				<div key={index} className="mb-4 flex space-x-4">
					<div className="flex flex-col space-y-2">
						<Seat
							number={group[0]}
							isReserved={group[0] % 3 === 0}
							isSelected={selectedSeats.includes(group[0])}
							onClick={() => onSeatClick(group[0])}
						/>
						<Seat
							number={group[1]}
							isReserved={group[1] % 3 === 0}
							isSelected={selectedSeats.includes(group[1])}
							onClick={() => onSeatClick(group[1])}
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<Seat
							number={group[2]}
							isReserved={group[2] % 3 === 0}
							isSelected={selectedSeats.includes(group[2])}
							onClick={() => onSeatClick(group[2])}
						/>
						<Seat
							number={group[3]}
							isReserved={group[3] % 3 === 0}
							isSelected={selectedSeats.includes(group[3])}
							onClick={() => onSeatClick(group[3])}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
