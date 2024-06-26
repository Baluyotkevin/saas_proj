'use client'
import { PodcastDetailsPlayer } from '@/components/PodcastDetailsPlayer'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import Image from 'next/image'
import React from 'react'

const PodcastDetails = ({ params : { podcastId } } : { params : { podcastId: Id<'podcasts'> }}) => {

  const podcast = useQuery(api.podcasts.getPodcastById, { podcastId })

  return (
    <section className='flex w-full flex-col'>
      <header className='mt-9 flex items-center justify-between'>
        <h1 className='font-bold text-20 text-white-1'>
          Currently Playing
        </h1>

        <figure className='flex gap-3'>
          <Image 
            src='/icons/headphones.svg'
            width={24}
            height={24}
            alt="headphones"
          />

          <h2 className="text-16 font-bold text-white-1">
            {podcast?.views}
          </h2>
        </figure>
      </header>

      <PodcastDetailsPlayer />
      
      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md: text-center">
        {podcast?.podcastDescription}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className='text-18 font-bont text-white-1'>Transcription</h1>
          <p className='text-16 font-medium text-white-2'>{podcast?.voicePrompt}</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className='text-18 font-bont text-white-1'>Thumbnail Prompt</h1>
          <p className='text-16 font-medium text-white-2'>{podcast?.imagePrompt}</p>
        </div>
      </div>

      <section className='mt-8 flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">
          Similar Podcasts
        </h1>
        
      </section>

    </section>
  )
}

export default PodcastDetails