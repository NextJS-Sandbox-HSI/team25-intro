// src/app/[username_github_anda]/components/ReusableHeader.tsx
import React from 'react';

interface ReusableHeaderProps {
  title: string;
}

const ReusableHeader: React.FC<ReusableHeaderProps> = ({ title }) => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', textAlign: 'center'}}>
      <h2>{title}</h2>
    </header>
  );
};

export default ReusableHeader;