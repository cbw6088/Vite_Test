import styled from 'styled-components'
import newsImg1 from '../../assets/newsImg/news1.jpg'
import newsImg2 from '../../assets/newsImg/news2.jpg'
import newsIcon1 from '../../assets/newsImg/newsIcon.jpeg'
import { device } from '../../pages/styles/responsive'

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px;
    gap: 20px;
`

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: calc((100%-40px)/3);
    min-width: 20vw;
    height: 35vh;
    background-color: #ffffff;
    border-radius: 20px;
    border: 1px solid #a6a6a6;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    ${device.mobile} {
        width: 100%;
        height: 45vh;
        margin-bottom: 15px;
    }

    ${device.tablet} {
        width: calc((100%-20px)/2);
        height: 40vh;
    }

    ${device.laptop} {
        width: calc((100%-40px)/3);
        height: 40vh;
    }

    ${device.desktop} {
        width: calc((100%-40px)/3);
        height: 40vh;
    }
`

const NewsImg = styled.img`
    width: 90%;
    height: 60%;
    border-radius: 10px;
    margin-top: 15px;
`

const NewsContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #ADADADAD;
`

const Title = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #000000;
`

const NewsContent = styled.span`
    font-size: 12px;
    color: #000000;
`

const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 10%;
    padding: 6px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    gap: 5px;
`

const NewsIcon = styled.img`
    width: 30%;
    height: 100%;
    border-radius: 100px;
`

const IconText = styled.span`
    font-size: 12px;
    color: #000000;
    font-weight: bold;
`

const BottomText = styled.span`
    font-size: 12px;
    color: #000000;
`

export default function NewsCard() {
    return (
        <Container>
            <CardContainer>
                <NewsImg src={newsImg1} />
                <NewsContentContainer>
                    <Title>
                        금감원, 우리금융 검사 결과 발표 2월로 연기
                    </Title>
                    <NewsContent>
                        #금융 #핀테크 #인슈어테크
                    </NewsContent>
                </NewsContentContainer>
                <BottomContainer>
                    <IconContainer>
                        <NewsIcon src={newsIcon1} />
                        <IconText>
                            세계일보
                        </IconText>
                    </IconContainer>
                    <BottomText>
                        조회수: 0
                    </BottomText>
                </BottomContainer>
            </CardContainer>

            <CardContainer>
                <NewsImg src={newsImg1} />
                <NewsContentContainer>
                    <Title>
                        금감원, 우리금융 검사 결과 발표 2월로 연기
                    </Title>
                    <NewsContent>
                        #금융 #핀테크 #인슈어테크
                    </NewsContent>
                </NewsContentContainer>
                <BottomContainer>
                    <IconContainer>
                        <NewsIcon src={newsIcon1} />
                        <IconText>
                            세계일보
                        </IconText>
                    </IconContainer>
                    <BottomText>
                        조회수: 0
                    </BottomText>
                </BottomContainer>
            </CardContainer>

            <CardContainer>
                <NewsImg src={newsImg1} />
                <NewsContentContainer>
                    <Title>
                        금감원, 우리금융 검사 결과 발표 2월로 연기
                    </Title>
                    <NewsContent>
                        #금융 #핀테크 #인슈어테크
                    </NewsContent>
                </NewsContentContainer>
                <BottomContainer>
                    <IconContainer>
                        <NewsIcon src={newsIcon1} />
                        <IconText>
                            세계일보
                        </IconText>
                    </IconContainer>
                    <BottomText>
                        조회수: 0
                    </BottomText>
                </BottomContainer>
            </CardContainer>

            <CardContainer>
                <NewsImg src={newsImg2} />
                <NewsContentContainer>
                    <Title>
                        금감원, 우리금융 검사 결과 발표 2월로 연기
                    </Title>
                    <NewsContent>
                        #금융 #핀테크 #인슈어테크
                    </NewsContent>
                </NewsContentContainer>
                <BottomContainer>
                    <IconContainer>
                        <NewsIcon src={newsIcon1} />
                        <IconText>
                            세계일보
                        </IconText>
                    </IconContainer>
                    <BottomText>
                        조회수: 0
                    </BottomText>
                </BottomContainer>
            </CardContainer>

            <CardContainer>
                <NewsImg src={newsImg2} />
                <NewsContentContainer>
                    <Title>
                        금감원, 우리금융 검사 결과 발표 2월로 연기
                    </Title>
                    <NewsContent>
                        #금융 #핀테크 #인슈어테크
                    </NewsContent>
                </NewsContentContainer>
                <BottomContainer>
                    <IconContainer>
                        <NewsIcon src={newsIcon1} />
                        <IconText>
                            세계일보
                        </IconText>
                    </IconContainer>
                    <BottomText>
                        조회수: 0
                    </BottomText>
                </BottomContainer>
            </CardContainer>

            <CardContainer>
                <NewsImg src={newsImg2} />
                <NewsContentContainer>
                    <Title>
                        금감원, 우리금융 검사 결과 발표 2월로 연기
                    </Title>
                    <NewsContent>
                        #금융 #핀테크 #인슈어테크
                    </NewsContent>
                </NewsContentContainer>
                <BottomContainer>
                    <IconContainer>
                        <NewsIcon src={newsIcon1} />
                        <IconText>
                            세계일보
                        </IconText>
                    </IconContainer>
                    <BottomText>
                        조회수: 0
                    </BottomText>
                </BottomContainer>
            </CardContainer>
            
        </Container>
    )
}