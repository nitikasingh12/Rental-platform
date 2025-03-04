import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Find Your Perfect Rental</h1>
      <p className="mt-4">Secure Web3-enabled property rentals with Hive Blockchain.</p>
      <Link to="/listings">
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
          Browse Listings
        </button>
      </Link>
    </div>
  );
};

export default Home;
