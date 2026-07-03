"use client";

import IndustryBlock from "./IndustryBlock";
import { INDUSTRIES } from "./data";

export default function IndustriesList() {
  return (
    <>
      {INDUSTRIES.map((industry) => (
        <IndustryBlock key={industry.id} industry={industry} />
      ))}
    </>
  );
}
