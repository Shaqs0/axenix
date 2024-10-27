import { useRef } from 'react';
import { BgImg } from '../../assets';
import { DateInput, DirectionInput } from '../../components';

export function MainPage() {
	const bookingRef = useRef<HTMLDivElement>(null);

	const scrollToBooking = () => {
		if (bookingRef.current) {
			bookingRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="flex w-screen flex-col items-start justify-center">
			<div className="relative h-[80vh] w-screen bg-cover bg-top" style={{ backgroundImage: `url(${BgImg})` }}>
				<div className="absolute inset-0 bg-gradient-to-b from-[black]/60 to-[black]/30" />
				<div className="absolute left-[10%] top-1/2 -translate-y-1/2">
					<div className='flex flex-col gap-10'>
						<p className='text-[50px] font-bold tracking-[4px] text-[#FFFFFF]'>Бронирование билетов</p>
						<p className='w-[40vw] text-xl font-medium text-primary-orange'>
							Бронирование поездов – это удобный способ планирования ваших поездок. Вы можете легко забронировать билеты через интернет, в кассах или с помощью мобильных приложений. 
						</p>
						<div>
							<button 
								className='flex h-[70px] w-[200px] items-center justify-center rounded-[10px] bg-[black] text-base font-medium text-[#FFFFFF] opacity-80'
								onClick={scrollToBooking} 
							>
								Купить билет
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='flex h-[64vh] text-[white]'>
				<div 
					className="absolute left-[10%] top-[130%] -translate-y-1/2"
					ref={bookingRef}
				>
					<div className='flex flex-col gap-12'>
						<p className='text-[50px] font-bold tracking-[4px] text-[#FFFFFF]'>Забронировать билет</p>

						<div className='flex flex-col gap-10'>
							<div>
								<DirectionInput />
							</div>
							<div>
								<DateInput />
							</div>
						</div>
						<button className='flex h-[50px] items-center justify-center rounded-[10px] bg-primary-orange text-[15px] font-medium text-[black]'>Забронировать</button>
					</div>
				</div>
			</div>
		</div>
	);
}
