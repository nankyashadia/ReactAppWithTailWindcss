import { useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import Card from './Components/Card';
import Button from './Components/Button';
import profileImage from './assets/profile.jpg'; // Import the local image

function App() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greetingMessage;

  if (hours < 12) {
    greetingMessage = "Good Morning";
  } else if (hours < 17) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Greeting name="Lauben" />
        <p className="text-center text-xl mt-4 text-green-600 font-semibold italic">
          {greetingMessage}
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default Card 1 */}
          <Card
            title="Welcome to My App"
            description="This is a simple React app built with Vite and Tailwind CSS."
          />

          {/* Default Card 2 */}
          <Card
            title="Explore More"
            description="Discover the power of React and Tailwind CSS in modern web development."
          />

          {/* Default Card 3 */}
          <Card
            title="Amazing Features"
            description="Unlock the full potential of React and Tailwind CSS with powerful tools for building modern, responsive, and dynamic web applications."
          />

          {/* Profile Card */}
          <Card
            type="profile"
            name="Shadia"
            bio="Frontend Developer | React Enthusiast"
            image={profileImage} // Use the local image
            socialLinks={[
              { url: "https://twitter.com", icon: "🐦" },
              { url: "https://github.com", icon: "🐙" },
              { url: "https://linkedin.com", icon: "🔗" },
            ]}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button text="Click Me" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;