"use client"

import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, ChevronUp, ChevronDown, ArrowUpRight, Star, Users, Calendar, Zap, TrendingUp } from 'lucide-react';

// Sample data - you can replace this with your API call later
const leaderboardData = [
  { id: 1, name: "Alex` Johnson", score: 950, streak: 7, avatar: "/api/placeholder/40/40", change: 2, achievements: ["Early Bird", "Workout King", "Book Worm"] },
  { id: 2, name: "Jamie Smith", score: 890, streak: 5, avatar: "/api/placeholder/40/40", change: -1, achievements: ["Hydration Hero", "Meditation Master"] },
  { id: 3, name: "Taylor Brown", score: 875, streak: 6, avatar: "/api/placeholder/40/40", change: 3, achievements: ["Step Champion", "Clean Eater"] },
  { id: 4, name: "Casey Williams", score: 840, streak: 4, avatar: "/api/placeholder/40/40", change: 0, achievements: ["Journal Keeper", "Early Riser"] },
  { id: 5, name: "Jordan Miller", score: 820, streak: 3, avatar: "/api/placeholder/40/40", change: -2, achievements: ["No Sugar Week", "Yoga Expert"] },
  { id: 6, name: "Riley Davis", score: 790, streak: 2, avatar: "/api/placeholder/40/40", change: 1, achievements: ["Study Hour", "Device Detox"] },
  { id: 7, name: "Morgan Wilson", score: 760, streak: 2, avatar: "/api/placeholder/40/40", change: 4, achievements: ["Sleep Schedule", "Water Goal"] },
  { id: 8, name: "Drew Moore", score: 730, streak: 1, avatar: "/api/placeholder/40/40", change: -3, achievements: ["Meal Prep", "Daily Walk"] },
  { id: 9, name: "Sam Garcia", score: 715, streak: 3, avatar: "/api/placeholder/40/40", change: 2, achievements: ["Gratitude Practice"] },
  { id: 10, name: "Quinn Roberts", score: 705, streak: 4, avatar: "/api/placeholder/40/40", change: -1, achievements: ["Savings Goal"] },
  { id: 11, name: "Cameron Young", score: 690, streak: 2, avatar: "/api/placeholder/40/40", change: 5, achievements: ["Clean Room"] },
  { id: 12, name: "Avery Thomas", score: 675, streak: 1, avatar: "/api/placeholder/40/40", change: -2, achievements: ["Language Practice"] },
  { id: 13, name: "Reese Anderson", score: 660, streak: 3, avatar: "/api/placeholder/40/40", change: 0, achievements: ["Coding Hour"] },
  { id: 14, name: "You", score: 645, streak: 2, avatar: "/api/placeholder/40/40", change: 1, isCurrentUser: true, achievements: ["Daily Reader", "Inbox Zero"] }
];

// Dynamic background patterns with black and purple theme
const backgroundPatterns = [
  'linear-gradient(135deg, rgba(25, 25, 25, 0.95) 0%, rgba(75, 0, 130, 0.9) 100%)',
  'radial-gradient(circle at 10% 20%, rgba(25, 25, 25, 0.95) 0%, rgba(128, 0, 128, 0.9) 90%)',
  'linear-gradient(120deg, rgba(25, 25, 25, 0.95) 0%, rgba(106, 0, 128, 0.9) 100%)',
  'linear-gradient(to right, rgba(25, 25, 25, 0.95), rgba(75, 0, 130, 0.9))',
  'linear-gradient(to right, rgba(40, 40, 40, 0.95), rgba(90, 0, 140, 0.9))'
];

const LeaderboardPage = () => {
  const [timeFilter, setTimeFilter] = useState('week');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showAchievements, setShowAchievements] = useState(null);
  const [stats, setStats] = useState({ totalUsers: 0, totalHabits: 0, avgScore: 0 });
  
  // Change background periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(prev => (prev + 1) % backgroundPatterns.length);
    }, 30000); // Change every 30 seconds
    
    // Calculate stats
    setStats({
      totalUsers: leaderboardData.length,
      totalHabits: 1250, // Example static data
      avgScore: Math.round(leaderboardData.reduce((acc, user) => acc + user.score, 0) / leaderboardData.length)
    });
    
    return () => clearInterval(interval);
  }, []);
  
  const displayData = expanded ? leaderboardData : leaderboardData.slice(0, 5);
  
  // Get appropriate icon for position
  const getPositionIcon = (position) => {
    switch (position) {
      case 0:
        return <Trophy className="text-yellow-500" size={20} />;
      case 1:
        return <Medal className="text-gray-400" size={20} />;
      case 2:
        return <Medal className="text-amber-600" size={20} />;
      default:
        return <span className="text-gray-300 font-medium w-5 text-center">{position + 1}</span>;
    }
  };
  
  // Get change indicator
  const getChangeIndicator = (change) => {
    if (change > 0) {
      return <ChevronUp className="text-green-500" size={16} />;
    } else if (change < 0) {
      return <ChevronDown className="text-red-500" size={16} />;
    }
    return <span className="text-gray-400 px-1">-</span>;
  };
  
  return (
    <div 
      className="min-h-screen pt-16 pb-16" 
      style={{ background: backgroundPatterns[backgroundIndex] }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Score Your Daily Life</h1>
          <p className="text-purple-300 text-lg">Turning everyday habits into rewarding achievements</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg shadow-xl p-4 flex items-center border border-purple-500">
            <div className="bg-purple-900 p-3 rounded-full mr-4">
              <Users className="text-purple-300" size={24} />
            </div>
            <div>
              <p className="text-purple-300 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg shadow-xl p-4 flex items-center border border-purple-500">
            <div className="bg-purple-900 p-3 rounded-full mr-4">
              <Zap className="text-purple-300" size={24} />
            </div>
            <div>
              <p className="text-purple-300 text-sm">Total Habits Tracked</p>
              <p className="text-2xl font-bold text-white">{stats.totalHabits}</p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg shadow-xl p-4 flex items-center border border-purple-500">
            <div className="bg-purple-900 p-3 rounded-full mr-4">
              <TrendingUp className="text-purple-300" size={24} />
            </div>
            <div>
              <p className="text-purple-300 text-sm">Average Score</p>
              <p className="text-2xl font-bold text-white">{stats.avgScore}</p>
            </div>
          </div>
        </div>

        {/* Main Leaderboard Card */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-purple-500">
          {/* Top 3 Users - Special Display */}
          <div className="bg-gradient-to-r from-purple-900 to-black p-8 text-white">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Leaderboard Champions</h2>
              <div className="flex text-sm bg-gray-800 rounded-md overflow-hidden border border-purple-500">
                <button 
                  className={`px-4 py-2 ${timeFilter === 'day' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
                  onClick={() => setTimeFilter('day')}
                >
                  Day
                </button>
                <button 
                  className={`px-4 py-2 ${timeFilter === 'week' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
                  onClick={() => setTimeFilter('week')}
                >
                  Week
                </button>
                <button 
                  className={`px-4 py-2 ${timeFilter === 'month' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
                  onClick={() => setTimeFilter('month')}
                >
                  Month
                </button>
              </div>
            </div>
            
            <div className="flex flex-row justify-around items-center gap-4 py-4">
              {leaderboardData.slice(0, 3).map((user, index) => (
                <div key={user.id} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg border border-purple-400 shadow-lg">
                  <div className={`relative ${index === 0 ? 'w-32 h-32' : 'w-24 h-24'}`}>
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-500">
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    </div>
                    <div className={`absolute -bottom-3 -right-3 bg-gray-900 rounded-full p-2 border-2 border-purple-400 ${index === 0 ? 'p-3' : 'p-2'}`}>
                      {index === 0 ? 
                        <Trophy className="text-yellow-500" size={index === 0 ? 28 : 20} /> : 
                        <Medal className={index === 1 ? "text-gray-300" : "text-amber-600"} size={20} />
                      }
                    </div>
                  </div>
                  <h3 className={`mt-4 font-bold text-white ${index === 0 ? 'text-2xl' : 'text-xl'}`}>{user.name}</h3>
                  <div className="flex items-center mt-2">
                    <p className={`font-semibold text-purple-300 ${index === 0 ? 'text-xl' : 'text-lg'}`}>{user.score}</p>
                    <span className="ml-1 text-purple-300">pts</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mt-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{user.streak} day streak</span>
                  </div>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {user.achievements.slice(0, 2).map((achievement, i) => (
                      <span key={i} className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded-full flex items-center">
                        <Star size={12} className="mr-1 text-yellow-400" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex overflow-x-auto px-6 py-3 border-b border-purple-900 bg-gray-800">
            <button 
              className={`px-4 py-2 mr-3 rounded-md text-sm whitespace-nowrap ${categoryFilter === 'all' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
              onClick={() => setCategoryFilter('all')}
            >
              All Habits
            </button>
            <button 
              className={`px-4 py-2 mr-3 rounded-md text-sm whitespace-nowrap ${categoryFilter === 'fitness' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
              onClick={() => setCategoryFilter('fitness')}
            >
              Fitness
            </button>
            <button 
              className={`px-4 py-2 mr-3 rounded-md text-sm whitespace-nowrap ${categoryFilter === 'mindfulness' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
              onClick={() => setCategoryFilter('mindfulness')}
            >
              Mindfulness
            </button>
            <button 
              className={`px-4 py-2 mr-3 rounded-md text-sm whitespace-nowrap ${categoryFilter === 'productivity' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
              onClick={() => setCategoryFilter('productivity')}
            >
              Productivity
            </button>
            <button 
              className={`px-4 py-2 mr-3 rounded-md text-sm whitespace-nowrap ${categoryFilter === 'nutrition' ? 'bg-purple-800 text-white' : 'text-gray-300'}`}
              onClick={() => setCategoryFilter('nutrition')}
            >
              Nutrition
            </button>
          </div>
          
          {/* Rest of Leaderboard */}
          <div className="py-2 bg-gray-900">
            <div className="px-6 py-3 flex justify-between text-sm text-gray-400 border-b border-gray-800">
              <span>Rank</span>
              <span>Score</span>
            </div>
            
            <div className="space-y-1">
              {displayData.slice(3).map((user, index) => (
                <div key={user.id}>
                  <div 
                    className={`flex items-center justify-between px-6 py-4 hover:bg-gray-800 transition-colors ${user.isCurrentUser ? 'bg-purple-900 border-l-4 border-purple-400' : ''}`}
                    onClick={() => setShowAchievements(showAchievements === user.id ? null : user.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getPositionIcon(index + 3)}
                        <div className="flex flex-col items-center">
                          {getChangeIndicator(user.change)}
                          <span className="text-xs text-gray-500">{Math.abs(user.change) || '-'}</span>
                        </div>
                      </div>
                      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-purple-500">
                        <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{user.name}</h3>
                        <div className="flex items-center text-xs text-gray-400">
                          <span className="mr-2">{user.streak} day streak</span>
                          {user.streak >= 5 && <span className="text-purple-300 flex items-center"><Award size={12} className="mr-1" /> Hot streak!</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-lg text-purple-300">{user.score}</span>
                      <ArrowUpRight size={16} className="ml-1 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Achievements Panel */}
                  {showAchievements === user.id && (
                    <div className="bg-gray-800 px-6 py-4 border-t border-b border-gray-700">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Recent Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {user.achievements.map((achievement, i) => (
                          <span key={i} className="bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-full flex items-center">
                            <Star size={12} className="mr-2 text-yellow-400" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Expand/Collapse Button */}
          {leaderboardData.length > 8 && (
            <div className="px-6 py-4 border-t border-gray-800">
              <button 
                className="w-full py-2 text-sm text-purple-300 hover:text-purple-200 flex items-center justify-center bg-gray-800 rounded-md"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Show Less' : 'View All'}
                <ChevronDown className={`ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`} size={16} />
              </button>
            </div>
          )}
          
          {/* Your Position */}
          <div className="bg-gray-800 px-6 py-4 border-t border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-300">Your position:</span>
              <span className="font-medium text-purple-300">14th</span>
            </div>
            <button className="px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white text-sm rounded-md transition-colors shadow-lg">
              View Your Stats
            </button>
          </div>
        </div>
        
        {/* Motivational Message */}
        <div className="text-center mt-8 text-gray-300">
          <p className="italic">"The only competition that matters is the one against your previous self."</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;