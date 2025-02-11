import React from "react";
import Img from "@/assets/hotel.webp";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const TopCard = () => {
	return (
		<>
			<Image
				src={Img}
				alt="Hotel"
				className="image"
			/>
			<h1 className="apartment">Apartamento Moderno</h1>
			<div className="star-position flex flex-col">
				<FaStar className="star" />
				<span className="star-text">4.5 (50 avaliações)</span>
				<span className="description">
					Um belo apartamento moderno no centro da cidade!
				</span>
			</div>
		</>
	);
};

export default TopCard;
