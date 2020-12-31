import styled from '@emotion/styled'

function Card ({ movie }) {
    const { API_URL } = process.env
    return (
        <CardStyled>
            <div className="poster">
                <img src={API_URL + movie.poster.url} alt="" />
            </div>

            <div className="body">
                <h3>{ movie.title }</h3>
                <p>{movie.release_date}</p>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
            text-align:center;
            font-size: 30px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
            text-align:center;
            font-size: 20px;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`

export default Card