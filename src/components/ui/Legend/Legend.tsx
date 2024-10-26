export function Legend() {
	return (
		<div className="mt-4 flex space-x-4">
			<div className="flex items-center">
				<div className="mr-2 size-4 bg-[gray]" />
				<span className="text-[white]">Reserved</span>
			</div>
			<div className="flex items-center">
				<div className="mr-2 size-4 bg-[orange]" />
				<span className="text-[white]">Available</span>
			</div>
		</div>
	);
}
  