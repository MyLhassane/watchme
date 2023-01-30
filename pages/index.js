import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import PopularMovie from '../components/PopularMovie'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-gray-700'>
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}
