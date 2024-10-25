import { useState, useRef, useEffect } from 'react';
import { Calendar } from '../../ui/Calendar/Calendar';
import { format } from 'date-fns';

export function DateInput() {
	const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
	const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	const containerRef = useRef<HTMLDivElement>(null);

	const toggleStartCalendar = () => {
		setIsStartCalendarOpen((prev) => !prev);
		setIsEndCalendarOpen(false); 
	};

	const toggleEndCalendar = () => {
		setIsEndCalendarOpen((prev) => !prev);
		setIsStartCalendarOpen(false); 
	};

	const handleStartDateSelect = (date: Date) => {
		setStartDate(date);
		setIsStartCalendarOpen(false);
	};

	const handleEndDateSelect = (date: Date) => {
		
		if (startDate && date < startDate) {
			return;
		}
		setEndDate(date);
		setIsEndCalendarOpen(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
			setIsStartCalendarOpen(false);
			setIsEndCalendarOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="flex gap-4" ref={containerRef}>
			<div className="relative">
				<input
					type="text"
					placeholder="Дата начала"
					onClick={toggleStartCalendar}
					value={startDate ? format(startDate, 'dd.MM.yyyy') : ''}
					readOnly
					className="rounded border p-2"
				/>
				{isStartCalendarOpen && (
					<div className="absolute top-full z-10 mt-2 max-lg:w-[400px] lg:w-[950px]">
						<Calendar onDateSelect={handleStartDateSelect} />
					</div>
				)}
			</div>

			<div className="relative">
				<input
					type="text"
					placeholder="Дата окончания"
					onClick={toggleEndCalendar}
					value={endDate ? format(endDate, 'dd.MM.yyyy') : ''}
					readOnly
					className="rounded border p-2"
				/>
				{isEndCalendarOpen && (
					<div className="absolute top-full z-10 mt-2 max-lg:w-[400px] lg:w-[950px]">
						<Calendar onDateSelect={handleEndDateSelect} />
					</div>
				)}
			</div>
		</div>
	);
}
