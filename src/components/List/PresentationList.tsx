import styled from "styled-components";
import theme from '../../styles/theme';
import addPost from "assets/icons/addPost.svg";
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

let presentList = [
  {
    id: 0,
    title : "발제 1 블라블라",
    comment : [{id : 0, content:" 제 의견 1 블라블라"}, {id: 1, content: "제 의견 2 블라블라"}]
  } ,
  {
    id: 1,
    title : "발제 2 블라블라",
    comment : [{id : 0, content:" 제 의견 1 블라블라"}, {id: 1, content: "제 의견 2 블라블라"}]
  } ,
  {
    id: 2,
    title : "발제 3 블라블라",
    comment : [{id : 0, content:" 제 의견 1 블라블라"}, {id: 1, content: "제 의견 2 블라블라"}]
  } ,
]

function PresentationList() {
  const [inputOpen, setInputOpen] = useState(false);
  const [recommendOpen, setRecommendOpen] = useState(false);


  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle >발제</StyledTitle>
        <StyledBtnWrapper>
          <StyledAddWrapper onClick={() => {setInputOpen(true); setRecommendOpen(false);} }>
            <StyledAdd  src={addPost} alt={"발제 추가"}></StyledAdd>
            <StyledAddText>발제 등록</StyledAddText>
          </StyledAddWrapper>
          <StyledRecommendWrapper onClick={() => {setRecommendOpen(true); setInputOpen(false)}}>
            <StyledRecommend src={addPost} alt={"발제 추천"}></StyledRecommend>
            <StyledRecommendText>추천 질문</StyledRecommendText>
          </StyledRecommendWrapper>
        </StyledBtnWrapper>
      </StyledTitleWrapper>
      <Modal inputState={inputOpen} RecommendState={recommendOpen}/>
      <StyledLine />
      <StyledListWrapper>
        {presentList.map((item:any, idx:number) => (
          <StyledPresentation key={idx}>Q.{"\u00A0\u00A0"} {item.title}
            {item.comment.map((obj:any, idx2:number) =>(
              <StyledCommentWrapper key={idx2}>
                <StyledComment>A {"\u00A0\u00A0"} {obj.content}</StyledComment>
              </StyledCommentWrapper>
            ))}
          </StyledPresentation>
        ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
}

export default PresentationList;

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  margin-left: 3%;
  top: 0;
  left: 5%;
  width: 90%;
`;

const StyledTitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
`
const StyledTitle = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 1%;
`
const StyledBtnWrapper =styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  right: 1%;
  margin-top: 0%;
  width: 20%;
`
const StyledAddWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`
const StyledAdd= styled.img`
  position: relative;
  width: 30%;
`
const StyledAddText = styled.div`
  width: 100%;
  margin-top: 5%;
`
const StyledRecommendWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: row;
  cursor: pointer;

`
const StyledRecommend = styled.img`
  position: relative;
  width: 30%;
`
const StyledRecommendText = styled.div`
  width: 100%;
  margin-top: 5%;
`
const StyledLine = styled.hr`
  position: absolute;
  width: 48%;
  height: 0.1rem;
  margin-top: 5%;
`
const StyledListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 7%;
  gap: 20px;
  left: 25%;
  color: ${theme.color.text};
`
const StyledPresentation = styled.div`
  float: left;
  position: relative;
  width: 100%;
  top: 100%;
`
const StyledCommentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 5%;
  gap: 20px;
  left: 15%;
`
const StyledComment = styled.div`

`




