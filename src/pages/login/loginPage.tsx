import styled from "styled-components"

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    background-color: #f4f4f4;
    gap: 10px;
`

const LoginTitle = styled.div`
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 20px;
`

const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 30%;
    height: 60%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`

const InputContainer = styled.input`
    width: 60%;
    height: 45px;
    border: none;
    border-bottom: 1px solid #ADADADAD;
    outline: none;
`

const FindButton = styled.div`
    color: #757575ac;
    font-size: 12px;
    background-color: transparent;
    margin-top: 5px;
    border: none;
    outline: none;
    cursor: pointer;

    :focus{
        outline: none;
        background-color: #757575ac;
        color: #474747ac;
    }

    :active{
        outline: none;
    }
`

const LoginButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 50px;
    background-color: #475BDB;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
`

const SignupContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

`

const SignupText = styled.span`
    font-size: 12px;
`

const SignupButton = styled.div`
    color: #eea124;
    font-size: 13px;
    font-weight: 500;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #eea124;
`

export default function LoginPage(){
    const handleLoginBtn = (userId: string) => {
        alert(`${userId}  로그인 버튼 클릭!`);
    }

    return(
        <LoginContainer>
            <LoginTitle>로그인</LoginTitle>
            <LoginBox>
                <InputContainer placeholder="아이디를 입력하세요."/>
                <InputContainer placeholder="비밀번호를 입력하세요."/>
                <FindButton>아이디/비밀번호 찾기</FindButton>
                <SignupContainer>
                    <SignupText>회원가입을 하고 서비스를 이용해보세요!</SignupText>
                    <SignupButton>회원가입</SignupButton>
                </SignupContainer>
                <LoginButton onClick={() => handleLoginBtn("cbw123")}>로그인</LoginButton>
            </LoginBox>
        </LoginContainer>
    )
}