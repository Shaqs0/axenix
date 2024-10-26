import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AuthFormProps {
  onSubmit: (data: AuthFormData, isRegister: boolean) => void;
}

interface AuthFormData {
  fullName?: string;
  email: string;
  password: string;
}

export function AuthForm({ onSubmit }: AuthFormProps) {
	const [isRegister, setIsRegister] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>();

	const handleFormToggle = () => {
		setIsRegister((prev) => !prev);
	};

	const handleFormSubmit: SubmitHandler<AuthFormData> = (data) => {
		onSubmit(data, isRegister);
	};

	return (
		<div className="mx-auto w-full max-w-md rounded-md border border-[gray] bg-[white] p-8 shadow-md">
			<h2 className="mb-6 text-center text-2xl font-semibold">
				{isRegister ? 'Регистрация' : 'Авторизация'}
			</h2>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				{isRegister && (
					<div className="mb-4">
						<label className="mb-2 block text-[gray]">ФИО</label>
						<input
							type="text"
							{...register('fullName', { required: 'Введите ФИО' })}
							className="w-full rounded-md border border-[gray] px-4 py-2 focus:outline-none"
						/>
						{errors.fullName && <p className="text-sm text-[red]">{errors.fullName.message}</p>}
					</div>
				)}
        
				<div className="mb-4">
					<label className="mb-2 block text-[gray]">Email</label>
					<input
						type="email"
						{...register('email', {
							required: 'Введите email',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Неверный формат Email'
							}
						})}
						className="w-full rounded-md border border-[gray] px-4 py-2 focus:outline-none"
					/>
					{errors.email && <p className="text-sm text-[red]">{errors.email.message}</p>}
				</div>
        
				<div className="mb-6">
					<label className="mb-2 block text-[gray]">Пароль</label>
					<input
						type="password"
						{...register('password', {
							required: 'Введите пароль',
							minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' }
						})}
						className="w-full rounded-md border border-[gray] px-4 py-2 focus:outline-none"
					/>
					{errors.password && <p className="text-sm text-[red]">{errors.password.message}</p>}
				</div>

				<button
					type="submit"
					className="w-full rounded-md bg-[blue] py-2 text-[white] transition duration-200 hover:bg-[black]"
				>
					{isRegister ? 'Зарегистрироваться' : 'Войти'}
				</button>
			</form>
			<p className="mt-4 text-center">
				{isRegister ? 'Уже зарегистрированы?' : 'Нет аккаунта?'}
				<button
					type="button"
					onClick={handleFormToggle}
					className="ml-1 text-[blue] hover:underline"
				>
					{isRegister ? 'Войти' : 'Зарегистрироваться'}
				</button>
			</p>
		</div>
	);
}
