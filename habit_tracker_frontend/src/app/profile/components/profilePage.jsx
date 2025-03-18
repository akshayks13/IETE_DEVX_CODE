'use client';

import React, { useState } from 'react';
import ProfileCard from './profileCard';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    username: "ADHIKKESH S K",
    handle: "@hb-b1nsurothe048on7j",
    level: 1,
    characterClass: "Warrior",
    healthPoints: 50,
    maxHealthPoints: 50,
    experiencePoints: 6,
    maxExperiencePoints: 25,
    joinedDate: "03/18/2025",
    totalLogins: 0,
    lastLogin: "03/18/2025",
    nextLogInReward: "1 Day",
    avatarSrc: null,
    hasDescription: false,
    hasPhoto: false,
  });

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  return (
    <div className="p-4 bg-black min-h-screen opacity - 0">
      <ProfileCard
        {...profileData}
        onEditProfile={handleEditProfile}
      />
    </div>
  );
};

export default ProfilePage;