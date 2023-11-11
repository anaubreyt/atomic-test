import React from 'react'
import { oauthTelegram } from '../../../path/path.ts'

export const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    
    const windowWidth: number = 550;
    const windowHeight: number = 530;
  
    const left: number = (window.screen.width - windowWidth) / 2;
    const top: number = (window.screen.height - windowHeight) / 2;
  
    const newWindow = window.open(oauthTelegram, '_blank', `width=${windowWidth}, height=${windowHeight}, top=${top}, left=${left}`);
      if (newWindow) {
        newWindow.focus();
      } else {
        alert('Ваш браузер заблокировал всплывающее окно. Разрешите всплывающие окна для этого сайта.');
      }
  };