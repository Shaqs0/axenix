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
			className={`flex h-20 w-11 cursor-pointer items-center justify-center rounded-[4px]  ${
				isReserved
					? 'cursor-not-allowed bg-[red] text-[white]' 
					: isSelected
						? 'bg-[green] text-[white]' 
						: 'bg-[orange] text-[black]' 
			}`}
		>
			{number}
		</div>
	);
}
