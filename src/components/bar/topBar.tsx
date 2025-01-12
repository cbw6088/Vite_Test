import styled from 'styled-components'
import profileImg from '../../assets/profile.png'
import searchIcon from '../../assets/search.png'
import categoryIcon from '../../assets/menu.png'
import { Link } from 'react-router-dom'
import { device } from '../../pages/styles/responsive'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 100px;

    ${device.mobile} {
        height: 80px;
        padding: 5px;
    }

    ${device.tablet} {
        height: 90px;
    }

    ${device.laptop} {
        height: 100px;
    }

    ${device.desktop} {
        height: 100px;
    }
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-bottom: 1px solid #ADADADAD;
    padding: 10px;
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    border-bottom: 1px solid #ADADADAD;
    padding: 10px;
`

const LogoText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 100px;
    height: 44px;
    font-weight: bold;
    color: #919191;
    background-color: #ADADADAD;
`

/* 로그인 */
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const LoginId = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: #253D4E;
`

const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
`

/* 검색창 */
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 480px;
    height: 40px;

    ${device.mobile} {
        width: 100%;
        height: 35px;
    }

    ${device.tablet} {
        width: 360px;
        height: 40px;
    }

    ${device.laptop} {
        width: 420px;
        height: 40px;
    }

    ${device.desktop} {
        width: 480px;
        height: 40px;
    }
`

const SearchInput = styled.input`
    width: 90%;
    height: 90%;
    border: none;
    outline: none;
    padding: 2px 12px;
    font-size: 14px;
    color: #ADADAD;
    background-color: #F3F3F3;
    border-radius: 4px 0 0 4px;
`

const SearchButton = styled.button`
    width: 10%;
    height: 100%;
    border: none;
    outline: none;
    /* padding: 2px 6px; */
    background-color: #475BDB;
    border-radius: 0 4px 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #3648B2;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
`

/* 카테고리 */
const BottomLineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
`

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

const CategoryIcon = styled.img`
    width: 16px;
    height: 14px;
`

const CategoryText = styled.span`
    font-size: 15px;
    color: #253D4E;
    font-weight: bold;
`

const CategoryMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const CategoryButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    color: #253D4E;
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`

export default function TopBar() {
    return (
        <Container>
            <TopContainer>
                <LogoText>로고</LogoText>
                <SearchContainer>
                    <SearchInput placeholder='검색' />
                    <SearchButton>
                        <SearchIcon src={searchIcon}/>
                    </SearchButton>
                </SearchContainer>
                <LoginContainer>
                    <ProfileImg src={profileImg} />
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <LoginId>로그인</LoginId>
                    </Link>
                </LoginContainer>
            </TopContainer>
            <BottomContainer>
                <BottomLineContainer>
                    <CategoryContainer>
                        <CategoryIcon src={categoryIcon} />
                        <CategoryText>카테고리</CategoryText>
                    </CategoryContainer>
                    <CategoryMenu>
                        <CategoryButton>채용공고</CategoryButton>
                        <CategoryButton>채용일정</CategoryButton>
                        <CategoryButton>커뮤니티</CategoryButton>
                        <CategoryButton>이력서</CategoryButton>
                        <CategoryButton>합격족보</CategoryButton>
                    </CategoryMenu>
                </BottomLineContainer>
            </BottomContainer>
        </Container>
    )
}