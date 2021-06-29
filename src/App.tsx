import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

// 表示するポケモン数
const pokemonCount = 151

const ids = new Array(6).fill(0).map(() => Math.floor(Math.random()*pokemonCount))

function Pokemon({ id }) {
  const { isLoading, error, data } = useQuery(`pokemon_${id}`, () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  return fetch(url).then((res) => res.json())
  })

  if (isLoading) return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>読込中。。</div>);

  if (error) return (<div>"読み込みエラー!!" + (error as Error).message</div>);

  const name = data.name[0].toUpperCase() + data.name.slice(1)
  const imgSrc = data.sprites.front_default

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <p style={{ textAlign: 'center' }}>{name}</p>
      <img style={{ width: '15vw' }} src={imgSrc} />
    </div>
  );

}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 style={{ textAlign: 'center' }}>Your Pokemon!</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 33vw)', width: 'auto', margin: '5vh auto' }}>
        {ids.map(id => (<Pokemon id={id} key={id} />))}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
