import { Outlet, useLocation, Link } from 'react-router-dom';
import { Logo, SignIn } from '../assets';

export function Layout() {
	const location = useLocation();

	return (
		<div>
			<header className='flex items-center justify-center bg-[#101010]'>
				<div className='flex h-[20vh] w-full items-center justify-around'>
					<div>
						<img src={Logo} className='-mt-14 h-[80px] w-[150px]' />
					</div>
					<div className='flex items-center gap-10 text-xl font-medium text-[#FFFFFF]'>
						<Link to="/">
							<p className={`${
								location.pathname === '/' ? 'text-[#FFFFFF] underline decoration-[#D9773A] underline-offset-4' : ''
							}`}>
								Забронировать билет
							</p>
						</Link>
						<Link to="/tickets">
							<p className={`${
								location.pathname === '/tickets' ? 'text-[#FFFFFF] underline decoration-[#D9773A] underline-offset-4' : ''
							}`}>
								Доступные билеты
							</p>
						</Link>
						<button className='flex items-center gap-9 rounded-[10px] border border-primary-orange px-[15px] py-[12px] text-[15px] font-bold text-primary-orange'>
							Войти <img src={SignIn} />
						</button>
					</div>
				</div>
			</header>
			<section className='bg-[#151515]'>
				<Outlet />
			</section>

			<footer className='h-[20vh] bg-[#101010] text-[white]'>
				UnderMeow
			</footer>
		</div>
	);
}
