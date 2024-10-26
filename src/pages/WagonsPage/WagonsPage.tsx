

export function WagonsPage () {
	return (
		<div className="flex h-[90vh] w-screen items-start justify-center max-lg:h-screen">
			<div className="mt-[48px] flex flex-col gap-14">
				<p className="text-[50px] font-semibold tracking-[4px] text-[white]">Выбор вагона</p>
				<div className="flex flex-col gap-12">
					<button className="wagon-card">
						<div className="flex flex-col items-start justify-start gap-1 text-2xl font-semibold">
							<p>Плацкартный</p>
							<p>3000 ₽</p>
						</div>
						<div className="flex w-[633px] justify-start text-start">
							<p className="text-xl font-normal text-[white]">Насладитесь комфортным путешествием в удобном плацкартном вагоне. У нас есть все необходимое для вашего приятного отдыха в пути. В вагоне представлены удобные места, чистота и порядок, а также возможность наслаждаться горячими напитками. </p>
						</div>
					</button>
					<button className="wagon-card ">
						<div className="max-lg: flex flex-col justify-start gap-2 text-start text-2xl font-semibold">
							<p>Купе</p>
							<p>6000 ₽</p>
						</div>
						<div className="flex w-[633px] justify-start text-start">
							<p className="text-xl font-normal text-[white]">Этот вагон предлагает комфортабельные условия для поездки на дальние расстояния. Внутри вы найдете уютные купе, которые идеально подходят для отдыха в пути. Каждое купе обеспечено всем необходимым для вашего удобства.</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}