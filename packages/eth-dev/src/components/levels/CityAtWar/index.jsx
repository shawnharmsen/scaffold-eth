import React, { useState, useEffect } from 'react'
import { Terminal } from '../../gameItems/components'
import { connectController as wrapGlobalGameData } from '../../gameItems'

import { ExampleGameActionsWindow, GenerateWallet } from './components'
import dialogArray from './dialog'

const CityAtWar = ({ dialog, actions }) => {
  useEffect(() => {
    // set initial level background
    actions.background.setCurrentBackground({ background: 'cityChaos' })
    // set dialog
    actions.dialog.initDialog({
      initialDialogPathId: 'city-at-war/start',
      currentDialog: dialogArray
    })
  }, [])

  const [walletGeneratorVisibility, setWalletGeneratorVisibility] = useState(false)

  return (
    <div id='cityAtWar'>
      <Terminal
        isOpen
        globalGameActions={actions}
        setWalletGeneratorVisibility={setWalletGeneratorVisibility}
      />

      <ExampleGameActionsWindow isOpen={false} />

      <GenerateWallet isOpen={walletGeneratorVisibility} globalGameActions={actions} />
    </div>
  )
}

export default wrapGlobalGameData(CityAtWar)