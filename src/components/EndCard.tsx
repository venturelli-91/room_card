import React from "react";

const EndCard = () => {
	return (
		<>
			<div className="features flex gap-2 m-8">
				<div>
					<h3 className=" bg-slate-200 w-full rounded-lg sm:w-14 sm:h-6 text-xs items-center p-1">
						Varanda
					</h3>
				</div>
				<div>
					<h3 className=" bg-slate-200 w-full rounded-lg sm:w-16 sm:h-6 text-xs items-center p-1">
						Mobiliado
					</h3>
				</div>
				<div>
					<h3 className=" bg-slate-200 w-full rounded-lg sm:w-16 sm:h-6 text-xs text-center pt-1">
						Pet-friendly
					</h3>
				</div>
			</div>

			<div>
				<h2 className="price">R$ 2500,00</h2>
			</div>

			<div className="flex justify-between">
				<button className="button_1">Agendar visita</button>
				<button className="button_2">Contatar corretor</button>
			</div>
		</>
	);
};

export default EndCard;
