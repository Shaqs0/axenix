import { useState } from 'react';
import { Train } from '../../../assets';

export function DirectionInput() {
	const [fromValue, setFromValue] = useState<string>('');
	const [toValue, setToValue] = useState<string>('');
	const [fromOptionsVisible, setFromOptionsVisible] = useState<boolean>(false);
	const [toOptionsVisible, setToOptionsVisible] = useState<boolean>(false);

	const handleFromFocus = () => {
		setFromOptionsVisible(true);
	};

	const handleToFocus = () => {
		setToOptionsVisible(true);
	};

	const handleFromSelect = (value: string) => {
		setFromValue(value);
		setFromOptionsVisible(false);
	};

	const handleToSelect = (value: string) => {
		setToValue(value);
		setToOptionsVisible(false);
	};

	return (
		<div className="relative flex gap-4">
			<div className="relative">
				<input
					className="DirectionInput"
					placeholder="Откуда"
					value={fromValue}
					onFocus={handleFromFocus}
					onChange={(e) => setFromValue(e.target.value)}
					readOnly
				/>
				{fromOptionsVisible && (
					<div className="absolute z-10 mt-1 h-[120px] w-full rounded-md border  bg-[#151515] shadow-lg">
						<div
							className="flex cursor-pointer justify-center p-2 hover:bg-[black]"
							onClick={() => handleFromSelect('Ростов-На-Дону')}
						>
                            Ростов-На-Дону
						</div>
					</div>
				)}
			</div>
			<img src={Train} className='size-12' alt="Train" />
			<div className="relative">
				<input
					className="DirectionInput"
					placeholder="Куда"
					value={toValue}
					onFocus={handleToFocus}
					onChange={(e) => setToValue(e.target.value)}
					readOnly
				/>
				{toOptionsVisible && (
					<div className="absolute z-10 mt-1 h-[120px] w-full rounded-md border border-[gray] bg-[#151515] shadow-lg">
						<div
							className="flex cursor-pointer justify-center p-2 hover:bg-[#000000]"
							onClick={() => handleToSelect('Москва')}
						>
                            Москва
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
