import { addMonths, format, startOfMonth, eachDayOfInterval, endOfMonth, isSameDay } from 'date-fns';
import { useState, useEffect } from 'react';

interface CalendarProps {
  onDateSelect: (date: Date) => void; // Пропс для передачи выбранной даты
}

export function Calendar({ onDateSelect }: CalendarProps) {
	const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	// Обработчик изменения размера экрана
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getDaysInMonth = (date: Date) => {
		return eachDayOfInterval({
			start: startOfMonth(date),
			end: endOfMonth(date),
		});
	};

	// Функции для переключения месяца
	const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
	const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

	// Обработчик выбора даты
	const handleDateClick = (date: Date) => {
		setSelectedDate(date);
		onDateSelect(date); // Передача выбранной даты
	};

	return (
		<div className="flex gap-5 rounded-md p-2 shadow-lg">
			<div className="mb-4 flex items-center justify-between">
				<button
					onClick={prevMonth}
					className="flex self-center rounded-md bg-[blue] px-2 py-1 text-[white]"
				>
          ←
				</button>
			</div>

			{/* Отображение месяцев в зависимости от устройства */}
			{(isMobile ? [0] : [0, 1, 2]).map((monthOffset) => {
				const month = addMonths(currentMonth, monthOffset);
				const daysInMonth = getDaysInMonth(month);

				return (
					<div key={format(month, 'yyyy-MM')} className="mb-6">
						<h3 className="mb-2 text-lg font-semibold">
							{format(month, 'MMMM yyyy')}
						</h3>
						<div className="grid grid-cols-7 gap-1 text-center">
							{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
								<div key={index} className="text-[gray]">{day}</div>
							))}
							{daysInMonth.map((day) => (
								<div
									key={day.toString()}
									onClick={() => handleDateClick(day)}
									className={`cursor-pointer rounded border p-2 ${
										selectedDate && isSameDay(day, selectedDate) ? 'bg-[blue] text-[white]' : ''
									}`}
								>
									{format(day, 'd')}
								</div>
							))}
						</div>
					</div>
				);
			})}

			<button
				onClick={nextMonth}
				className="rounded-md bg-[blue] px-4 py-2 text-[white]"
			>
        →
			</button>
		</div>
	);
}
