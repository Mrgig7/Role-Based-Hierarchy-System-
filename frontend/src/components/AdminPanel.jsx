import { useSelector } from 'react-redux';
export default function AdminPanel() {
  const { user } = useSelector(state => state.user);
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold">Administrator Control Panel</h2>
      <p>Welcome, {user?.name} (Administrator)</p>
    </div>
  );
}