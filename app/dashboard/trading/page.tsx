"use client";
import React, { useEffect } from 'react';
import './styles/App.css';
import {  mainCharacter, dollarCoin } from '../../assets/images/index';
import axios from 'axios';
import { useStore } from '../../../lib/store/userStore';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';



export default function App() {
  

  const coins = useStore((state: { coins: any }) => state.coins)
  const setCoins = useStore((state) => state.setCoin)

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);
    setCoins(2);
  };
  const apicall =async ()=>{
    console.log(coins)
    if(coins%5===0){
        const response = await axios.post("http://localhost:3002/usercoin",{userid:"sahil",coin :coins});
        if (response.data.status === 201) {
            console.log("coins updates")
          } else {
            console.log("coins not updated")
          }
    }
  }

  useEffect(()=>{
    apicall()
  },[coins])

  return (
    <div style={{display:'flex', flexDirection:'column', width:'100dvw', justifyContent:'center', alignItems:'center', height:'100dvh'}}>

            {/* ***** preserve ***** */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src={dollarCoin.src} alt="Dollar Coin" style={{ width: '40px', height: '40px' }} />
                <p style={{ fontSize: '30px', color: 'black' }}>{coins}</p>
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
}
