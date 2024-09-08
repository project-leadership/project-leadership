// ProfilePlaceholder.js
import React from 'react';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const ProfilePlaceholder = () => (
  <Svg width={40} height={40} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Base Rectangle */}
    <Rect x="30" y="30" width="140" height="140" rx="15" fill="#fbfced" />
    
    {/* Gradient Squares */}
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="30%" stopColor="#1a5f7a" stopOpacity="1" />
        <Stop offset="100%" stopColor="#1a4375" stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Rect x="40" y="40" width="120" height="54" fill="url(#grad)" rx="15" />
    <Rect x="40" y="104" width="120" height="54" fill="url(#grad)" rx="15" />
    
  
  </Svg>
);

export default ProfilePlaceholder;
