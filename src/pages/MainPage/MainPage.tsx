import { BgImg } from '../../assets';

export function MainPage() {
	return (
		<div className="flex w-screen items-start justify-center">
			<div className="relative h-[80vh] w-screen bg-cover bg-top" style={{ backgroundImage: `url(${BgImg})` }}>
				<div className="absolute inset-0 bg-gradient-to-b from-[black]/30 to-[black]/30" />
				<div className="relative z-10 p-8"> 
					<p className='text-[50px] font-bold tracking-[4px] text-[#FFFFFF]'>Бронирование билетов</p>
					<p className='text-xl font-normal text-primary-orange'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
	);
}
