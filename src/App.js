import './App.css';
import InputBox from './components/InputBox'
import styled from 'styled-components'
import ResultBox from './components/ResultBox'

function App() {
  return (
    <div>
          <TitleWrapper>
      <h1 className="title">
  Can My Dog Eat This?
</h1>
<InputBox />
    </TitleWrapper>
    <ResultBox />
    </div>


  ); 
}


const TitleWrapper = styled.div`
display: block;
text-align: center;
border: 2px solid blue;
padding: 1rem;
`




export default App;
