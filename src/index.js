import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

import {data} from './characters'
import Character from './Character'
import {greeting} from './testing/testing'

function QuestionMarkBlock() {
  return (
    <>
    <div className="nav">
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MarioCharactersPage />
);


// ReactDom.render(<MarioCharactersPage />, document.getElementById('root'));