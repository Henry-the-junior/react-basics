import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from './characters'
import Character from './Character'
import {greeting} from './testing/testing'

function QuestionMarkBlock() {
  return (
    <>
    <div class="nav">
      <img src="question_mark.png" alt="" width="50"/>
      <h1> 超級瑪利歐人物介紹</h1>
    </div>
    </>
  );
}

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

function MarioCharactersPage() {
  return (
    <>
    <QuestionMarkBlock />
    <CharacterList />
    </>
  );
}


ReactDom.render(<MarioCharactersPage />, document.getElementById('root'));