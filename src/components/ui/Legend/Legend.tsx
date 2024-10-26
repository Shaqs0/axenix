export function Legend() {
	return (
		<div className="mt-4 flex space-x-6">
			<div className="flex items-center space-x-2">
				<div className="size-4 rounded bg-[gray]" />
				<span className="text-[white]">Reserved</span>
			</div>
			<div className="flex items-center space-x-2">
				<div className="size-4 rounded bg-[orange]" />
				<span className="text-[white]">Available</span>
			</div>
		</div>
	);
}
