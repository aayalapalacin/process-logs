// components/SectionHeader.tsx
import React from "react";
import "./SectionHeader.css"; // Import the plain CSS file

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return <h2 className="section-header">{title}</h2>;
};

export default SectionHeader;
