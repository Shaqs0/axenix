import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthPage, BookingPage, MainPage, WagonsPage } from './pages';
import { Layout } from './layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
			}
		]
	},
	{
		path: '/auth',
		element: <AuthPage/>
	},
	{
		path: '/booking',
		element: <BookingPage/>
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}/>
		</QueryClientProvider>
	</StrictMode>,
);
