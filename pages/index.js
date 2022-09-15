import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function Home({ movies }) {
  console.log(movies)
  return (
    <div>
      <Hero />
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
