import EventList from '@/Components/Events/Event-list'
import { getFeaturedEvents } from '@/Data'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {

  const featuredEvent = getFeaturedEvents()
  return (
    <div>
      <EventList items = {featuredEvent}></EventList>
    </div>
  )
}
