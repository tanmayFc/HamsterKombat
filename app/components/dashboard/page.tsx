"use client";
// import {
//   setIsLogin,
// } from "@/lib/features/counter/profileSlice";

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/lib/store";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";


// function Dashboard() {

  

//   return (<>

//     </>)
// }

// export default Dashboard



import React, { useState, useEffect } from 'react';
import './App.css';
import Hamster from './icons/Hamster'
import { hamsterExchange, mainCharacter, dollarCoin } from './images';
import Coins from './icons/Coins';

const App: React.FC = () => {

//     "Bronze",    // From 0 to 4999 coins
//     "Silver",    // From 5000 coins to 24,999 coins
//     "Gold",      // From 25,000 coins to 99,999 coins
//     "Platinum",  // From 100,000 coins to 999,999 coins
//     "Diamond",   // From 1,000,000 coins to 2,000,000 coins
//     "Epic",      // From 2,000,000 coins to 10,000,000 coins
//     "Legendary", // From 10,000,000 coins to 50,000,000 coins
//     "Master",    // From 50,000,000 coins to 100,000,000 coins
//     "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
//     "Lord"       // From 1,000,000,000 coins to ∞
//   ];

  // const levelMinPoints = [
  //   0,        // Bronze
  //   5000,     // Silver
  //   25000,    // Gold
  //   100000,   // Platinum
  //   1000000,  // Diamond
  //   2000000,  // Epic
  //   10000000, // Legendary
  //   50000000, // Master
  //   100000000,// GrandMaster
  //   1000000000// Lord
  // ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);
  const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
  const pointsToAdd = 11;
  const profitPerHour = 126420;

  // const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  // const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  // const calculateTimeLeft = (targetHour: number) => {
  //   const now = new Date();
  //   const target = new Date(now);
  //   target.setUTCHours(targetHour, 0, 0, 0);

  //   if (now.getUTCHours() >= targetHour) {
  //     target.setUTCDate(target.getUTCDate() + 1);
  //   }

  //   const diff = target.getTime() - now.getTime();
  //   const hours = Math.floor(diff / (1000 * 60 * 60));
  //   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  //   const paddedHours = hours.toString().padStart(2, '0');
  //   const paddedMinutes = minutes.toString().padStart(2, '0');

  //   return `${paddedHours}:${paddedMinutes}`;
  // };

  // useEffect(() => {
  //   const updateCountdowns = () => {
  //     setDailyRewardTimeLeft(calculateTimeLeft(0));
  //     setDailyCipherTimeLeft(calculateTimeLeft(19));
  //     setDailyComboTimeLeft(calculateTimeLeft(12));
  //   };

  //   updateCountdowns();
  //   const interval = setInterval(updateCountdowns, 60000); // Update every minute

  //   return () => clearInterval(interval);
  // }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };


  return (
    <div style={{display:'flex', flexDirection:'column', width:'100dvw', justifyContent:'center', alignItems:'center', height:'100dvh'}}>

            {/* ***** preserve ***** */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src={dollarCoin.src} alt="Dollar Coin" style={{ width: '40px', height: '40px' }} />
                <p style={{ fontSize: '30px', color: 'black' }}>{points.toLocaleString()}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{width:'330px', height:'330px', borderRadius:'50%',cursor: 'pointer', backgroundColor:'#4449a3', display:'grid',placeItems:'center' }} onClick={handleCardClick}>
                <div style={{ width: '300px', height: '300px', padding: '1rem', borderRadius: '50%',  background: 'radial-gradient(circle, #4960b2,#282e3e)' }} >
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
                    <img src={mainCharacter.src} alt="Main Character" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* ***** preserve ***** */}
    </div>
  );
};

export default App;