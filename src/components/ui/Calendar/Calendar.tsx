import { addMonths, format, startOfMonth, eachDayOfInterval, endOfMonth, isSameDay } from 'date-fns';
import { useState, useEffect } from 'react';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

export function Calendar({ onDateSelect }: CalendarProps) {
	const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [isMobile, setIsMobile] = useState(false);

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

	const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
	const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

	const handleDateClick = (date: Date) => {
		setSelectedDate(date);
		onDateSelect(date); 
	};

	return (
		<div className="flex gap-5 rounded-xl bg-[#151515] p-2 shadow-lg">
			<div className="flex">
				<button
					onClick={prevMonth}
					className="flex h-[50px] items-center justify-center rounded-md bg-primary-orange px-4 py-2 text-[white]"
				>
          ⇦
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
							{daysInMonth.map((day) => (
								<div
									key={day.toString()}
									onClick={() => handleDateClick(day)}
									className={`cursor-pointer rounded border p-2 ${
										selectedDate && isSameDay(day, selectedDate) ? 'bg-primary-orange text-[white]' : ''
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
				className="flex h-[50px] items-center justify-center rounded-md bg-primary-orange px-4 py-2 text-[white]"
			>
        ⇨
			</button>
		</div>
	);
}