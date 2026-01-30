import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">Geo Mining</div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm">© {new Date().getFullYear()} Geo Mining</div>
      </footer>
    </div>
  );
};

export default PublicLayout;
