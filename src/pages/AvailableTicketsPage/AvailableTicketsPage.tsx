import { AuthForm } from '../../components/shared';

interface AuthFormData {
	fullName?: string;
	email: string;
	password: string;
  }
export function AvailableTicketsPage() {
	const handleAuthSubmit = (data: AuthFormData, isRegister: boolean) => {
		console.log('Form submitted:', data, 'Register mode:', isRegister);
	};

	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<AuthForm onSubmit={handleAuthSubmit} />
		</div>
	);
}
