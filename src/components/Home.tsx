import { memo } from 'preact/compat';

const Home = () => {
  return (
    <div className="text-center p-4" tabIndex={1}>
      <h2 className="text-2xl font-semibold">Welcome to this app for web accesibility</h2>
      <p className="mt-2">You can click on any navbar item to view its details.</p>
    </div>
  );
};

export default memo(Home);
