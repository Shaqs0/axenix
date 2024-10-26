

type SeatProps = {
  number: number;
  isReserved: boolean;
};

export function Seat({ number, isReserved }: SeatProps) {
	return (
		<div
			className={`flex size-10 items-center justify-center rounded border ${
				isReserved ? 'bg-[gray] text-[white]' : 'bg-[orange] text-[black]'
			}`}
		>
			{number}
		</div>
	);
}
