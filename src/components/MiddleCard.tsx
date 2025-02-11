import React from "react";
import { RiHotelBedLine } from "react-icons/ri";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { FaBath } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";

const MiddleCard = () => {
	const medida = 85;
	const unidade = "m²";

	return (
		<>
			<div className="icons">
				<div>
					<IoIosPin size={20} />
					<span>Centro</span>
				</div>

				<div>
					<HiMiniArrowPathRoundedSquare size={20} />
					<span>
						{medida}
						{unidade}
					</span>
				</div>

				<div>
					<FaBath size={20} />
					<span>1 Banheiro</span>
				</div>

				<div>
					<RiHotelBedLine size={20} />
					<span>2 quartos</span>
				</div>
			</div>
		</>
	);
};

export default MiddleCard;
