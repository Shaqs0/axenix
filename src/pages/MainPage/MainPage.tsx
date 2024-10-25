import { BgImg } from '../../assets';

export function MainPage() {
	return (
		<div className="flex w-screen items-start justify-center">
			<div className="relative h-[80vh] w-screen bg-cover bg-top" style={{ backgroundImage: `url(${BgImg})` }}>
				<div className="absolute inset-0 bg-gradient-to-b from-[black]/60 to-[black]/30" />
				<div className="absolute left-[10%] top-1/2 -translate-y-1/2">
					<div className='flex flex-col gap-10'>
						<p className='text-[50px] font-bold tracking-[4px] text-[#FFFFFF]'>Бронирование билетов</p>
						<p className='w-[40vw] text-xl font-normal text-primary-orange'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<div>
							<button className='flex h-[70px] w-[200px] items-center justify-center rounded-[10px] bg-[black] text-base font-medium text-[#FFFFFF]'>Купить билет</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
