const Greeting = ({ name }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Hello, {name}!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to my beautiful React app.
      </p>
    </div>
  );
};

export default Greeting;