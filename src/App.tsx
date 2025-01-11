import styled from 'styled-components'
import NewsCard from './components/box/newsCard'
import RankBox from './components/box/rankBox'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`

const BoxContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    height: 100%;
`

const RankContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* background-color: #dc6161; */
    width: 20%;
    height: 100%;
`

function App() {
    
    return (
        <Container>
            <Wrapper>
                <BoxContainer>
                    <NewsCard />
                </BoxContainer>
                <RankContainer>
                    <RankBox />
                </RankContainer>
            </Wrapper>
        </Container>
    )
}

export default App
