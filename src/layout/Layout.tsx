import { Outlet, useLocation, Link } from 'react-router-dom';
import { Logo, SignIn, Telegram, Vk } from '../assets';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; 

export function Layout() {
	const location = useLocation();
	const accessToken = useSelector((state: RootState) => state.auth.accessToken);

	return (
		<div>
			<header className='flex items-center justify-center bg-[#101010] pt-1'>
				<div className='flex h-[20vh] w-full items-center justify-around'>
					<div>
						<img src={Logo} className='-mt-14 h-[80px] w-[150px]' />
					</div>
					<div className='flex items-center gap-14 text-xl font-medium text-[#FFFFFF]'>
						<Link to="/" className={`${
							location.pathname === '/' ? 'text-[#FFFFFF] underline decoration-[#D9773A] underline-offset-4' : ''
						}`}>
							Забронировать билет
						</Link>
						<Link to="/wagons" className={`${
							location.pathname === '/wagons' ? 'text-[#FFFFFF] underline decoration-[#D9773A] underline-offset-4' : ''
						}`}>
							Выбор вагона
						</Link>
						{!accessToken ? (
							<Link to='/auth'>
								<button className='flex h-[45px] items-center gap-9 rounded-[10px] border border-primary-orange px-[15px] py-[12px] text-[15px] font-bold text-primary-orange'>
									Войти <img src={SignIn} />
								</button>
							</Link>
						) : (
							<div className='w-10' /> 
						)}
					</div>
				</div>
			</header>
			<section className='bg-[#151515]'>
				<Outlet />
			</section>

			<footer className='flex h-[32vh] justify-around bg-[#101010] text-[white]'>
				<div className='-ml-7 flex flex-col items-center justify-center gap-[30px]'>
					<img src={Logo} className='h-[86px] w-[150px]'/>
					<div className='flex items-center justify-center gap-10'>
						<img src={Vk} className='size-[47px]'/>
						<img src={Telegram} className='size-[47px]'/>
					</div>
					<p className='text-[13px] font-normal text-[#717171]'>© 2024, ООО «АксТим»</p>
				</div>
				<div className='flex items-center justify-center gap-20'>
					<div>
						<ul className='flex flex-col gap-2 '>
							<li className='text-lg font-bold text-primary-orange'>Адрес:</li>
							<li className='text-lg font-normal'>Москва </li>
							<li className='text-lg font-normal'>Павелецкая площадь, д.2 стр.2</li>
						</ul>
					</div>
					<div>
						<ul className='flex flex-col gap-2'>
							<li className='text-lg font-bold text-primary-orange'>Контакты:</li>
							<li className='text-lg font-normal'>Тел: +7 (727) 355-10-88</li>
							<li className='text-lg font-normal'>Info-russia@axenix.pro</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
