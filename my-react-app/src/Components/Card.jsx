const Card = ({ type, title, description, image, name, bio, socialLinks }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image (if provided) */}
        {image && (
          <div className="p-6 flex justify-center"> {/* Center the image */}
            <img
              src={image}
              alt={title || name || "Card Image"} // 
              className="w-32 h-32 object-cover rounded-full" // Make the image round
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x200"; // Fallback image
              }}
            />
          </div>
        )}
  
        {/* Card Content */}
        <div className="p-6">
          {/* Profile Card Content */}
          {type === "profile" && (
            <>
              <h2 className="text-3xl font-bold text-gray-800 text-center">{name}</h2>
              <p className="mt-2 text-gray-600 text-center">{bio}</p>
              <div className="mt-4 flex space-x-4 justify-center">
                {socialLinks?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300 text-2xl"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </>
          )}
  
          {/* Default Card Content */}
          {!type && (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Card;