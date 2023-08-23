import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '남자 코트 추천', '정장 추천', '구두 추천'])
  let [likes, setLike] = useState(new Array(글제목.length).fill(0))

  const post = () => {
    return 글제목.map(function (title, idx) {
      const like = likes[idx]
      function plus() {
        const newLikes = [...likes];
        newLikes[idx] += 1
        setLike(newLikes)
      }

      return (
        <div key={idx} className='list'>
          <h4>{title} <span onClick={plus}>👍</span> {like} </h4>
          <p>2월 17일 발행</p>
        </div>)
    })
  }
  function changeTitle() {
    글제목변경(['옷 추천', ...글제목.slice(1)])
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div>{post()}</div>{ }
      <span onClick={changeTitle}>글제목 변경</span>
    </div >
  );
}

export default App;
