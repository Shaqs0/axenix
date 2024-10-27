export function Legend() {
	return (
		<div className="mt-4 flex space-x-6">
			<div className="flex items-center space-x-2">
				<div className="size-4 rounded bg-[red]" /> 
				<span className="text-[white]">Забронировано</span>
			</div>
			<div className="flex items-center space-x-2">
				<div className="size-4 rounded bg-[orange]" />
				<span className="text-[white]">Доступно</span>
			</div>
			<div className="flex items-center space-x-2">
				<div className="size-4 rounded bg-[green]" />
				<span className="text-[white]">Выбрано</span>
			</div>
		</div>
	);
}
