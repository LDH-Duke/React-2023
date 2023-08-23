import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '남자 코트 추천', '정장 추천', '구두 추천'])
  let [likes, setLike] = useState(new Array(글제목.length).fill(0))
  let [modal, setModal] = useState(0);

  function changeTitle() {
    글제목변경(['옷 추천', ...글제목.slice(1)])
  }

  function sortPost() {
    const newpost = [...글제목].sort()
    글제목변경(newpost)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <span onClick={changeTitle}>글제목 변경</span><br></br>
      <span onClick={sortPost}>내림차순 변경</span>
      {
        글제목.map(function (title, idx) {
          const like = likes[idx]
          function plus() {
            const newLikes = [...likes];
            newLikes[idx] += 1
            setLike(newLikes)
          }

          return (
            <div key={idx} className='list'>
              <h4 onClick={() => { if (modal == 0) { setModal(1) } else { setModal(0) } }}>{title} <span onClick={plus}>👍</span> {like} </h4>
              <p>2월 17일 발행</p>
            </div>)
        })
      }
      {
        modal == 1 ? <Modal 글제목={글제목} /> : null
      }

    </div >
  );
}

function Modal(props) {
  return (
    <div className='detail'>
      <h4>{props.글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
