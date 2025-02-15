import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600">User Profile</h2>
      <p className="text-lg mt-2"><strong>Name:</strong> {user.name || 'Guest'}</p>
      <p className="text-lg"><strong>Email:</strong> {user.email || 'Not Available'}</p>
    </div>
  );
}
export default Profile;