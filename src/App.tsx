import styled from 'styled-components'
import NewsCard from './components/box/newsCard'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`

const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 80%;
    height: 100%;
`

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dc6161;
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
                <ListContainer>
                        
                </ListContainer>
            </Wrapper>
        </Container>
    )
}

export default App
