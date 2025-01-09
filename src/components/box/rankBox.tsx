import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
`

const RankContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
`

const RankList = styled.ul`
    list-style: none;
    padding: 0;
`

export default function RankBox() {
    return (
        <Container>
            <Title>
                RankBox
            </Title>
            <RankList>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </RankList>
        </Container>
    )
}