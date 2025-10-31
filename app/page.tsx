import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the brainy explorer"
          topic="neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard 
          id="124"
          name="Counstry the number wizard"
          topic="derivatives and integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="125"
          name="verba the vocabulary builder"
          topic="language"
          subject="english literature"
          duration={30}
          color="#ffda6e"
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page