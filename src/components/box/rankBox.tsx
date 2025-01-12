import styled from "styled-components";

const RankContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    border: 1px solid #bdbdbd ;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
`

const RankTitle = styled.text`
    font-size: 18px;
    font-weight: 500;
`

const RankListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const RankList = styled.div`
    border-bottom: 1px solid #bdbdbd;
    font-size: 14px;
`

export default function RankBox() {
    const mockData = [
        {rank: 1, title: "news1"},
        {rank: 2, title: "news2"},
        {rank: 3, title: "news3"},
        {rank: 4, title: "news4"},
        {rank: 5, title: "news5"},
        {rank: 6, title: "news6"},
        {rank: 7, title: "news7"},
        {rank: 8, title: "news8"},
        {rank: 9, title: "news9"},
        {rank: 10, title: "news10"},
    ]

    return(
        <RankContainer>
            <RankTitle>
                이번주 랭킹
            </RankTitle>
            <RankListContainer>
                {mockData.map((item) => (
                    <RankList key = {item.rank}>
                        <span>{item.rank}위</span>
                        <span>{item.title}</span>
                    </RankList>
                ))}
            </RankListContainer>
        </RankContainer>
    )
}