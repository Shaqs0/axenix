import { Seat } from '../../ui/Seat/Seat';

type SeatMapProps = {
  totalSeats: number;
  selectedSeats: number[];
  onSeatClick: (seatNumber: number) => void;
};

export function SeatMap({ totalSeats, selectedSeats, onSeatClick }: SeatMapProps) {
	const seatGroups = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	]; 

	return (
		<div className="flex flex-col items-center rounded-lg border-4 border-[gray] bg-[darkgray] px-2 pb-3">
			<div className="flex items-center ">
				{seatGroups.map((group, index) => (
					<div key={index} className="flex flex-col items-center border-2 border-b-0 border-[orange] bg-[black] p-2">
						<div className="mb-2 flex space-x-4">
							{group.slice(0, 2).map((seatNumber) => (
								<Seat
									key={seatNumber}
									number={seatNumber}
									isReserved={seatNumber % 3 === 0}
									isSelected={selectedSeats.includes(seatNumber)}
									onClick={() => onSeatClick(seatNumber)}
								/>
							))}
						</div>
						<div className="flex space-x-4">
							{group.slice(2).map((seatNumber) => (
								<Seat
									key={seatNumber}
									number={seatNumber}
									isReserved={seatNumber % 3 === 0}
									isSelected={selectedSeats.includes(seatNumber)}
									onClick={() => onSeatClick(seatNumber)}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}