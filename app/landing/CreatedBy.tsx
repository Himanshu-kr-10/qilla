import NFTCARD from '@/components/ui/nft-card'
import React from 'react'

const CreatedBy = () => {
  return (
    <div className='container'>
      <header>
        <h2 className='text-center text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-800'>Start Building on the pluschain</h2>
      </header>
      <div className='grid grid-cols-auto sm:grid-cols-2 grid-flow-row lg:grid-cols-3 gap-7 xl:gap-12 mt-9 max-w-5xl mx-auto'>
        <NFTCARD image='/1.jpg' title="The Door by Maat Kane"/>
        <NFTCARD image='/6.jpg' title="Metabolts"/>
        <NFTCARD image='/nftironman.jpeg' title='IronMan'/>
      </div>
    </div>
  )
}

export default CreatedBy