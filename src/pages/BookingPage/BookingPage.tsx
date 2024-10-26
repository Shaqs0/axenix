import { Legend, SeatMap } from '../../components';


export function BookingPage() {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-[black] p-4">
			<h1 className="mb-4 text-2xl font-bold text-[white]">Train Seat Booking</h1>
			<SeatMap totalSeats={30} /> 
			<Legend /> 
		</div>
	);
}
