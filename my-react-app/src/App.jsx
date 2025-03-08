import { useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import Card from './Components/Card';
import Button from './Components/Button';
import profileImage from './assets/profile.jpg';

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Greeting Component */}
        <Greeting name="Lauben" />

        <p className="text-center text-xl mt-4 text-green-600">
          {greetingMessage}
        </p>

        {/* Feature Cards Section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">App Features</h2>
          <p className="text-gray-600">Explore the powerful features of this app</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Default Cards */}
          <Card title="Welcome to My App" description="This is a simple React app built with Vite and Tailwind CSS." />
          <Card title="Explore More" description="Discover the power of React and Tailwind CSS in modern web development." />
          <Card title="Amazing Features" description="Create modern, responsive, and visually appealing web applications using the best of React and Tailwind CSS." />

          {/* Profile Card */}
          <Card
            type="profile"
            name="Shadia"
            bio="Frontend Developer | React Enthusiast"
            image={profileImage}
            socialLinks={[
              { url: "https://twitter.com", icon: "🐦" },
              { url: "https://github.com", icon: "🐙" },
              { url: "https://linkedin.com", icon: "🔗" },
            ]}
          />

          {/* New Feature Cards */}
          <Card title="⚡ Fast Performance" description="Optimized for speed and efficiency using Vite." />
          <Card title="🎨 Customizable Themes" description="Easily modify styles using Tailwind CSS." />
          <Card title="📱 Mobile Friendly" description="Fully responsive design for all devices." />
          <Card title="🔒 Secure" description="Built with security best practices." />
        </div>

        <div className="mt-8 flex justify-center">
          <Button text="Click Me" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;