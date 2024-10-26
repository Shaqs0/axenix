import { useState } from 'react';
import { AuthForm } from '../../components/shared';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

interface AuthFormData {
	fullName?: string;
	email: string;
	password: string;
}

export function AuthPage() {
	const [showCodeModal, setShowCodeModal] = useState(false);
	const [verificationCode, setVerificationCode] = useState('');
	const [userId, setUserId] = useState<string | null>(null);
	const [isCodeRefreshable, setIsCodeRefreshable] = useState(true);

	const handleAuthSubmit = async (data: AuthFormData, isRegister: boolean) => {
		if (isRegister) {
			try {
				const response = await axios.post(
					`${PREFIX}/api/auth/registration/user?name=${data.fullName}&email=${data.email}&password=${data.password}`
				);
				console.log('Registration successful:', response.data);
				setUserId(response.data.id);
				setShowCodeModal(true);
			} catch (error) {
				console.error('Registration error:', error);
			}
		} else {
			try {
				const response = await axios.post(
					`${PREFIX}/api/auth/authorization/user?email=${data.email}&password=${data.password}`
				);
				console.log('Login successful:', response.data);
				setUserId(response.data.id);
				setShowCodeModal(true);
			} catch (error) {
				console.error('Login error:', error);
			}
		}
	};

	const handleCodeSubmit = async () => {
		if (!userId) {
			console.error('User ID is not available');
			return;
		}

		try {
			const response = await axios.post(
				`${PREFIX}/api/auth/confirmation-code/user?user=${userId}&code=${verificationCode}`
			);
			console.log('Verification successful:', response.data);
			setShowCodeModal(false);
		} catch (error) {
			console.error('Verification error:', error);
			console.log(`${PREFIX}/api/auth/confirmation-code/user?user=${userId}&code=${verificationCode}`);
		}
	};

	const handleRefreshCode = async () => {
		if (!userId) {
			console.error('User ID is not available');
			return;
		}

		try {
			const response = await axios.post(
				`${PREFIX}/api/auth/new-confirmation-code/send?user=${userId}`
			);
			console.log('New confirmation code sent:', response.data);
			setIsCodeRefreshable(false); 

			setTimeout(() => {
				setIsCodeRefreshable(true); 
			}, 120000);
		} catch (error) {
			console.error('Error sending new confirmation code:', error);
		}
	};

	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<AuthForm onSubmit={handleAuthSubmit} />

			{showCodeModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-[black] bg-[opacity/50]">
					<div className="w-full max-w-sm rounded-md bg-[white] p-6 shadow-md">
						<h2 className="mb-4 text-lg font-semibold">Введите код подтверждения</h2>
						<input
							type="text"
							value={verificationCode}
							onChange={(e) => setVerificationCode(e.target.value)}
							className="mb-4 w-full rounded-md border border-[gray] p-2"
							placeholder="Код из почты"
						/>
						<button
							onClick={handleCodeSubmit}
							className="w-full rounded-md bg-[blue] py-2 text-[white] hover:bg-[blue]"
						>
							Подтвердить
						</button>
						<span
							className={`mt-2 cursor-pointer text-[blue] ${!isCodeRefreshable ? 'pointer-events-none opacity-50' : ''}`}
							onClick={isCodeRefreshable ? handleRefreshCode : undefined}
						>
							Обновить код
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
