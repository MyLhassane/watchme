import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
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
  const movies = [{ name: 'hello' }];

  return {
    props: { movies }
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1