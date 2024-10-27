import { Seat } from '../../ui/Seat/Seat';

type SeatMapProps = {
  totalSeats: number;         
  selectedSeats: number[];
  onSeatClick: (seatNumber: number, bookingStatus: string) => void; 
};

export function SeatMap({ totalSeats, selectedSeats, onSeatClick }: SeatMapProps) {
	const seatGroups = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	];

	return (
		<div className="flex h-[50vh] w-[70vw] flex-col items-center rounded-lg border-4 border-[gray] px-2 pb-3">
			<div className="flex items-center border-t-[3px] border-[gray]">
				{seatGroups.map((group, index) => (
					<div key={index} className="relative flex flex-col items-center border-x-[3px] border-b-[3px] border-[gray] px-2 pb-8 pt-[8px]">
			
						<div className="z-10 -mb-3 flex space-x-4">
							{group.slice(0, 2).map((seatNumber) => (
								<Seat
									key={seatNumber}
									number={seatNumber}
									isReserved={seatNumber % 3 === 0} 
									isSelected={selectedSeats.includes(seatNumber)}
									onClick={() => onSeatClick(seatNumber, 'FREE')} 
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
									onClick={() => onSeatClick(seatNumber, 'FREE')} 
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
