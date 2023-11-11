import React from 'react'
import PresentationIcon from '../icons/presentation.tsx'
import { exCoinsPdF } from '../../../path/path.ts'

export default function PresentationLinkButton(): JSX.Element {

    return (
      <a href={exCoinsPdF}
        target='_blank'
        rel="noreferrer"
        className='presentation-icon'>
          <PresentationIcon className='presentation-icon__picture'/>
      </a>
    )
  }