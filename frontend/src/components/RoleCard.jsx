import React from 'react';

function RoleCard({ role }) {
  return (
    <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h3 className="text-lg font-semibold">{role}</h3>
    </div>
  );
}
export default RoleCard;