import styled from '@emotion/styled'
import {rem} from 'polished'

export default function Header() {
    return (
        <HeaderStyled>
            <div className="container">
                <div className="logo">
                    <img src="#" alt="Sites Logo" />
                    <span className="logo-text">Next Movies</span>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: #efefef;
    padding: 20px;

    .logo {
        display: flex;
        align-items: center;

        .logo-text {
            color: #333333;
            font-weight: bold;
            font-size: ${rem(20)};
            margin-left: 20px;
        }
    }
` 