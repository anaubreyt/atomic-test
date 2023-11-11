import React from 'react'
import TelegramIcon from '../icons/telegram.tsx'
import { handleButtonClick } from './utilits.tsx'

type Props = {
    buttonText: string;
}

export default function TelegramLinkButton ( {buttonText}: Props ): JSX.Element {
    const buttonWidth: string = buttonText ? '240px' : 'auto';
  
    return (
      <a href='###'
        className='telegram-button' 
        onClick={(e)=> handleButtonClick(e)}
        style={{ width: buttonWidth }}
      >
        <TelegramIcon className="telegram-icon"/>
        {buttonText}
      </a>
    )
  }