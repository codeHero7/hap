// components/EmailTemplate.tsx
import * as React from 'react';

interface EmailProps {
  name: string;
  position: string;
}

// Ensure this is a clean, named export
export const JobEmail: React.FC<EmailProps> = ({ name, position }) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
    <h1 style={{ color: '#1a2a3a' }}>New Application for {position}</h1>
    <p><strong>Applicant Name:</strong> {name}</p>
    <p>This application was submitted via the {position} portal.</p>
  </div>
);
