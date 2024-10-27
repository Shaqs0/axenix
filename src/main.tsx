import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthPage, BookingCoupePage, BookingPlatzkartPage, MainPage, WagonsPage } from './pages';
import { Layout } from './layout/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <MainPage/>
			},
			{
				path: '/wagons',
				element: <WagonsPage/>
			},
			{
				path: '/coupe',
				element: <BookingCoupePage/>
			},
			{
				path: '/platzkart',
				element: <BookingPlatzkartPage/>
			}
		]
	},
	{
		path: '/auth',
		element: <AuthPage/>
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
);
