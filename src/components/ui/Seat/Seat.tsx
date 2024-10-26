type SeatProps = {
	number: number;
	isReserved: boolean;
	isSelected: boolean;
	onClick: () => void;
};

export function Seat({ number, isReserved, isSelected, onClick }: SeatProps) {
	return (
		<div
			onClick={!isReserved ? onClick : undefined} 
			className={`flex size-10 cursor-pointer items-center justify-center rounded border ${
				isReserved
					? 'cursor-not-allowed bg-[gray] text-[white]'
					: isSelected
						? 'bg-[blue] text-[white]'
						: 'bg-[orange] text-[black]'
			}`}
		>
			{number}
		</div>
	);
}