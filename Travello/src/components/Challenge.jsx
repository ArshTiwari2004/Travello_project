import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Camera, Sparkles, MessageCircle, Video, Book, Globe, Image, X } from 'lucide-react';


const Challenge = () => {
  const [showRewards, setShowRewards] = useState(false);
  const [currentReward, setCurrentReward] = useState(null);
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChallengeComplete = (reward) => {
    setCurrentReward(reward);
    setShowRewards(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => console.error("Error getting location:", error)
      );
    }
  };

  const handleClaimReward = (event) => {
    event.preventDefault();

    if (experience && image && location.latitude && location.longitude) {
      setCompletedChallenges((prev) => [...prev, currentReward.id]);
      setShowRewards(false);
      setShowConfetti(true);

      // Hide confetti after a short duration
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      alert("Please fill in all the required details to complete the challenge.");
    }
  };

  const dailyChallenges = [
    {
      id: 1,
      title: 'Daily Photo Challenge',
      description: 'Take a picture of a local landmark from a unique angle.',
      icon: <Camera className="w-6 h-6" />,
      points: 50
    },
    {
      id: 2,
      title: 'Taste of the Day',
      description: 'Try a local street food and share your experience.',
      icon: <Sparkles className="w-6 h-6" />,
      points: 30
    },
    {
      id: 3,
      title: 'Local Interaction',
      description: 'Have a conversation with a local and learn something new about the culture.',
      icon: <MessageCircle className="w-6 h-6" />,
      points: 40
    }
  ];

  const regularChallenges = [
    {
      id: 4,
      title: 'Hidden Gem Finder',
      description: 'Discover a lesser-known attraction and create a short video guide.',
      icon: <Video className="w-6 h-6" />,
      points: 100
    },
    {
      id: 5,
      title: 'Local Legend',
      description: 'Learn about a local legend or myth and retell it creatively.',
      icon: <Book className="w-6 h-6" />,
      points: 80
    },
    {
      id: 6,
      title: 'Eco-Warrior',
      description: 'Participate in a local environmental conservation activity.',
      icon: <Globe className="w-6 h-6" />,
      points: 120
    },
    {
      id: 7,
      title: 'Art Hunter',
      description: 'Find and photograph three pieces of street art or public sculptures.',
      icon: <Image className="w-6 h-6" />,
      points: 90
    }
  ];

  const ChallengeCard = ({ challenge, onClick, completed }) => (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
        completed ? 'opacity-50 pointer-events-none' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-cyan-100 p-3 rounded-full">
            {challenge.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-cyan-900">{challenge.title}</h3>
            <p className="text-gray-600 mt-1">{challenge.description}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-cyan-600 font-medium">
            Earn {challenge.points} points
          </span>
          <button
            onClick={() => onClick(challenge)}
            className="px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors duration-200"
            disabled={completed}
          >
            {completed ? 'Completed' : 'Complete Challenge'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-cyan-100 py-12 px-4">
       
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-900 mb-12">
          Daily & Regular Challenges
        </h1>

        {showConfetti && <Confetti />}

        {/* Daily Challenges Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-cyan-100 p-2 rounded-full">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-semibold text-cyan-900">Daily Challenges</h2>
          </div>
          <div className="space-y-4">
            {dailyChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onClick={handleChallengeComplete}
                completed={completedChallenges.includes(challenge.id)}
              />
            ))}
          </div>
        </div>

        {/* Regular Challenges Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-cyan-100 p-2 rounded-full">
              <span className="text-2xl">🎮</span>
            </div>
            <h2 className="text-2xl font-semibold text-cyan-900">Regular Challenges</h2>
          </div>
          <div className="space-y-4">
            {regularChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onClick={handleChallengeComplete}
                completed={completedChallenges.includes(challenge.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Rewards Modal */}
      {showRewards && currentReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowRewards(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-cyan-900 mb-6">You're Almost There!</h2>

            <div className="border border-cyan-400 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-cyan-900">{currentReward.title}</h3>
              <p className="text-lg font-semibold text-cyan-700">
                Points to be earned: {currentReward.points}
              </p>
            </div>

            <p className="text-cyan-700 text-center mb-6">
              Fill in the details below to complete the challenge and claim your reward!
            </p>

            <form className="space-y-6" onSubmit={handleClaimReward}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Tell us your experience
                </label>
                <textarea
                  placeholder="Share your experience..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full border rounded-lg p-3 text-gray-700"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Current Location
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={location.latitude}
                    readOnly
                    className="border rounded-lg p-3 bg-gray-50"
                    placeholder="Latitude"
                  />
                  <input
                    type="text"
                    value={location.longitude}
                    readOnly
                    className="border rounded-lg p-3 bg-gray-50"
                    placeholder="Longitude"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full border rounded-lg p-3"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200"
              >
                Claim Reward
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
