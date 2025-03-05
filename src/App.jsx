import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <Profile name="Arnold Kiprotich" email="arnoldkiprotich50@gmail.com" />
        <Counter />
      </div>
    </div>
  );
}