import React from 'react'
import TelegramIcon from '../icons/telegram.tsx'
import { handleButtonClick } from './utilits.ts'
//@ts-ignore
import style from './TelegramLinkButton.module.css'

type Props = {
    buttonText: string;
}

export default function TelegramLinkButton ( {buttonText}: Props ): JSX.Element {
    const buttonWidth: string = buttonText ? '240px' : 'auto';
  
    return (
      <a href='###'
        className={style.telegramButton} 
        onClick={(e)=> handleButtonClick(e)}
        style={{ width: buttonWidth }}
      >
        <TelegramIcon className={style.telegramIcon} />
        {buttonText}
      </a>
    )
  }