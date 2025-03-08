const Button = ({ text, onClick }) => {
    return (
      <button
        className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transition-all duration-300"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;