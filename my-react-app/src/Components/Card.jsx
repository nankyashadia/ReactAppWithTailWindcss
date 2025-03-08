const Card = ({ type, title, description, image, name, bio, socialLinks }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
      {/* Image Section */}
      {image && (
        <div className="p-6 flex justify-center">
          <img
            src={image}
            alt={title || name || "Card Image"}
            className="w-32 h-32 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x200";
            }}
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 text-center">
        {type === "profile" ? (
          <>
            <h2 className="text-4xl font-extrabold text-black dark:text-gray-100">
              {name}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{bio}</p>
            <div className="mt-4 flex space-x-4 justify-center">
              {socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-gray-100 hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300 text-2xl"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-black dark:text-gray-100">
              {title}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;