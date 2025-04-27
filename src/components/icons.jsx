import React from 'react';

export const WiadpayLogo = ({ className = '', ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`wiadpay-logo ${className}`}
      {...props}
    >
      {/* Using Teal for the main circle */}
      <circle cx="12" cy="12" r="10" className="text-teal-500" />
      {/* White checkmark remains for contrast */}
      <path d="M7 13l3 3 7-7" stroke="white" strokeWidth="2.5" />
    </svg>
  );
};

// ShieldIcon Component: Renders a shield SVG icon, using Teal.
export const ShieldIcon = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shield-icon ${className}`}
      {...props}
    >
      {/* Path remains currentColor, color defined by parent className */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      {/* Checkmark inside */}
       <path d="M9 12l2 2 4-4" />
    </svg>
  );
};

// TransactionIcon Component: Renders a transaction/exchange SVG icon.
export const TransactionIcon = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transaction-icon ${className}`}
      {...props}
    >
      {/* Arrows indicating transfer */}
      <path d="M21 12H3m0 0l8-8M3 12l8 8"/>
      <path d="M3 12h18m0 0l-8 8m8-8l-8-8"/>
    </svg>
  );
};

// WalletIcon Component: Renders a wallet SVG icon.
export const WalletIcon = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`wallet-icon ${className}`}
      {...props}
    >
      {/* Modern wallet representation */}
      <path d="M19 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3" />
      <path d="M1 12h14" />
      <path d="M15 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </svg>
  );
};

// UserIcon Component: Renders a user profile SVG icon.
export const UserIcon = ({ className = '', ...props }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`user-icon ${className}`}
        {...props}
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  };