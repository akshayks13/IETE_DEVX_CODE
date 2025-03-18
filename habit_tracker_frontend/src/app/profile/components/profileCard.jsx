'use client';

import React from 'react';

const ProfileCard = ({ 
  username, 
  handle, 
  level, 
  characterClass, 
  healthPoints, 
  maxHealthPoints,
  experiencePoints,
  maxExperiencePoints,
  joinedDate,
  totalLogins,
  lastLogin,
  nextLogInReward,
  avatarSrc,
  hasDescription,
  hasPhoto,
  onEditProfile
}) => {
  // Format dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div className="bg-gray-900 text-gray-100 rounded-lg p-6 shadow-lg max-w-2xl mx-auto mt-10 border border-purple-500">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="bg-purple-900 p-2 rounded-lg mr-4 border-2 border-purple-400 transition-all duration-300 hover:border-purple-300 hover:shadow-purple-500/50 hover:shadow-lg">
            {avatarSrc ? (
              <img src={avatarSrc} alt="Avatar" className="w-16 h-16" />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-purple-300">{username}</h2>
            <p className="text-sm text-gray-400">{handle} • <span className="text-purple-400">Level {level}</span> <span className="text-yellow-400">{characterClass}</span></p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
          <span className="text-2xl">&times;</span>
        </button>
      </div>

      {/* Stats Bars */}
      <div className="mb-6">
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <div className="text-pink-500 mr-2">❤️</div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-pink-500 h-4 rounded-full transition-all duration-500" 
                style={{ width: `${(healthPoints / maxHealthPoints) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-300">{healthPoints} / {maxHealthPoints}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <div className="text-yellow-500 mr-2">✦</div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-yellow-400 h-4 rounded-full transition-all duration-500" 
                style={{ width: `${(experiencePoints / maxExperiencePoints) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-300">{experiencePoints} / {maxExperiencePoints}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 mb-4">
        <div className="flex">
          <button className="px-4 py-2 border-b-2 border-purple-500 text-purple-300 font-medium transition-all duration-300 hover:bg-purple-900/30">
            Profile
          </button>
          <button className="px-4 py-2 text-gray-400 transition-all duration-300 hover:text-purple-300 hover:bg-purple-900/30">
            Stats
          </button>
          <button className="px-4 py-2 text-gray-400 transition-all duration-300 hover:text-purple-300 hover:bg-purple-900/30">
            Achievements
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-purple-300 mb-2">About</h3>
        {hasDescription ? (
          <p className="text-gray-300">Your description here</p>
        ) : (
          <p className="text-gray-500">Sleeping is my favourite Habit.</p>
        )}
      </div>

      {/* Photo Section */}
      <div className="mb-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-purple-300 mb-2">Photo</h3>
        {hasPhoto ? (
          <div className="bg-gray-700 p-4 rounded-lg">Photo would appear here</div>
        ) : (
          <p className="text-gray-500">This Habitican hasn't added a photo.</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2">
          {/* Edit Profile Button */}
          <button 
            onClick={onEditProfile}
            className="bg-purple-700 text-white py-3 px-4 rounded-lg w-full hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Edit Profile
          </button>
        </div>
        <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded-lg">
          {/* User Info */}
          <div className="text-sm">
            <div className="flex justify-between mb-2 hover:bg-gray-700 p-1 rounded transition-colors duration-200">
              <span className="text-gray-400">Joined:</span>
              <span className="text-purple-300">{formatDate(joinedDate)}</span>
            </div>
            <div className="flex justify-between mb-2 hover:bg-gray-700 p-1 rounded transition-colors duration-200">
              <span className="text-gray-400">Total Log Ins:</span>
              <span className="text-purple-300">{totalLogins}</span>
            </div>
            <div className="flex justify-between mb-2 hover:bg-gray-700 p-1 rounded transition-colors duration-200">
              <span className="text-gray-400">Latest Log In:</span>
              <span className="text-purple-300">{formatDate(lastLogin)}</span>
            </div>
            <div className="flex justify-between hover:bg-gray-700 p-1 rounded transition-colors duration-200">
              <span className="text-gray-400">Next Log In Reward:</span>
              <span className="text-purple-300">{nextLogInReward}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;