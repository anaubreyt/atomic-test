import React from 'react'
import PresentationLinkButton from '../atoms/presentationLinkButton/PresentationLinkButton.tsx'
import TelegramLinkButton from '../atoms/telegramLinkButton/TelegramLinkButton.tsx'

export default function LinkButtonsForm(): JSX.Element {
    const telegramButtonText: string = 'Войти через Telegram';

  return (
    <div className='buttons-form'> 
        <TelegramLinkButton buttonText={telegramButtonText} />
        <PresentationLinkButton />
    </div>
  )
}
