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
		<div className="mx-auto w-full max-w-md rounded-md border-2 border-primary-orange bg-[black] p-8 shadow-md">
			<h2 className="mb-6 text-center text-[44px] font-bold text-[white]">
				{isRegister ? 'Регистрация' : 'Авторизация'}
			</h2>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				{isRegister && (
					<div className="mb-4">
						<label className="label-text">ФИО</label>
						<input
							type="text"
							{...register('fullName', { required: 'Введите ФИО' })}
							className="form-input"
							autoComplete="name"  
						/>
						{errors.fullName && <p className="mt-1 text-sm text-[white]">{errors.fullName.message}</p>}
					</div>
				)}
        
				<div className="mb-4">
					<label className="label-text">Email</label>
					<input
						type="email"
						{...register('email', {
							required: 'Введите email',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Неверный формат Email'
							}
						})}
						className="form-input focus:bg-[black]"
						autoComplete="email" 
					/>
					{errors.email && <p className="mt-1 text-sm text-[white]">{errors.email.message}</p>}
				</div>
        
				<div className="mb-6">
					<label className="label-text">Пароль</label>
					<input
						type="password"
						{...register('password', {
							required: 'Введите пароль',
							minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' }
						})}
						className="form-input"
						autoComplete="new-password" 
					/>
					{errors.password && <p className="mt-1 text-sm text-[white]">{errors.password.message}</p>}
				</div>

				<button
					type="submit"
					className="mt-8 w-full rounded-md border border-primary-orange bg-[black] py-2 text-[white] transition duration-200 hover:bg-primary-orange"
				>
					{isRegister ? 'Зарегистрироваться' : 'Войти'}
				</button>
			</form>
			<p className="mt-4 text-center text-[white]">
				{isRegister ? 'Уже зарегистрированы?' : 'Нет аккаунта?'}
				<button
					type="button"
					onClick={handleFormToggle}
					className="ml-1 text-base font-semibold text-primary-orange hover:underline"
				>
					{isRegister ? 'Войти' : 'Зарегистрироваться'}
				</button>
			</p>
		</div>
	);
}
