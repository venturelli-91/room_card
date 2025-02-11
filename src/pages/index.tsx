"use client";
import React from "react";
import TopCard from "@/components/TopCard";
import MiddleCard from "@/components/MiddleCard";
import EndCard from "@/components/EndCard";

export default function index() {
	return (
		<React.StrictMode>
			<div className="full-card">
				<TopCard />
				<MiddleCard />
				<EndCard />
			</div>
		</React.StrictMode>
	);
}
