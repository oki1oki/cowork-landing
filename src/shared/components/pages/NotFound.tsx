import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl text-blue-600 text-center">
        Sorry, but we don't have this page :(
      </h1>
      <Link to="/" className="block">
        <button className="rounded-xl bg-primary text-white px-3 py-2">
          To home
        </button>
      </Link>
    </div>
  );
};
