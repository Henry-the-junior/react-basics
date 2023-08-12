import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from './characters'
import Character from './Character'
import {greeting} from './testing/testing'

function CharacterList() {
  console.log(greeting);
  return (
    <section className='characterList'>
      {data.map((character, index) => {
        return <Character key={character.id} {...character}></Character>;
      })}
    </section>
  );
}



ReactDom.render(<CharacterList />, document.getElementById('root'));