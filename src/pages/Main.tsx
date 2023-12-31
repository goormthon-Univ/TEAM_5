import blurGoorm from 'assets/icons/blurGoorm.svg';
import brBlackBlurGoorm from 'assets/icons/brBlackBlurGoorm.svg';
import logo from 'assets/icons/logo.svg';
import mainStar from 'assets/icons/mainStar.svg';
import darkBg from 'assets/images/mainDarkBg.jpg';
import temple from 'assets/images/temple.svg';
import BookList from 'components/List/BookList';
import Modal from 'components/Modal';
import BookClubs from 'components/Modal/BookClubs';
import Search from 'components/Search';
import { GOORM } from 'constants/goorm';
import media from 'constants/media';
import useGetBookList from 'hooks/api/useGetBook';
import useGetBookClub from 'hooks/api/useGetBookClub';
import { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function Main() {
  const [inputOpen, setInputOpen] = useState<boolean>(false);
  const [modalClub, setModalClub] = useState<boolean>(false);

  const { bookLists, isLoading } = useGetBookList();
  const { bookClubs } = useGetBookClub();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  function onClickOpenModal() {
    setInputOpen(!inputOpen);
  }

  function onClickOpenClubModal() {
    setModalClub(!modalClub);
  }

  return (
    <>
      <StyledWrapper>
        <StyledBgWrapper>
          <StyledBg src={darkBg} alt="밤 배경" loading="lazy" />
        </StyledBgWrapper>

        <StyledItemWrapper>
          <StyledLogoWrapper>
            <StyledLogo src={logo} alt="로고" />
            <StyledSubTitle>5팀의 아고라</StyledSubTitle>
          </StyledLogoWrapper>

          <StyledTemple src={temple} alt="신전" />

          <StyledGoormWrapper>
            {bookClubs?.clouds.map((cloud, index) => (
              <StyledGoormImg
                key={index}
                src={GOORM[cloud.id].img}
                alt="구름"
              />
            ))}

            <StyledA src={brBlackBlurGoorm} alt="구름" />

            <StyledB src={blurGoorm} alt="구름" />

            <StyledC src={blurGoorm} alt="구름" />
            {/* {Position.map((item, index) => (
              <StyledGoorm key={index} top={item.top}></StyledGoorm>
            ))} */}
          </StyledGoormWrapper>
        </StyledItemWrapper>
      </StyledWrapper>

      {inputOpen && (
        <Modal
          open={inputOpen}
          setShowModal={setInputOpen}
          component={<Search />}
        />
      )}

      {modalClub && (
        <Modal
          open={modalClub}
          setShowModal={setModalClub}
          component={<BookClubs />}
        />
      )}

      <StyledBookListWrapper>
        <StyledStarWrapper>
          <StyledStar src={mainStar} alt="별" loading="lazy" />
        </StyledStarWrapper>
        <StyledBookWrapper>
          <StyledAgoraName>5팀의 아고라</StyledAgoraName>

          <StyledModalWrapper>
            <button onClick={() => onClickOpenClubModal()}>
              내 독서모임 보기
            </button>
            <button onClick={() => onClickOpenModal()}>검색하러가기</button>
          </StyledModalWrapper>
          <StyledBookList>
            {bookLists.map((book, index) => (
              <BookList
                key={index}
                img={book.imgUrl}
                title={book.title}
                author={book.authors}
              />
            ))}
          </StyledBookList>
        </StyledBookWrapper>
      </StyledBookListWrapper>
    </>
  );
}

export default Main;

const StyledWrapper = styled.main`
  width: 100%;
  overflow: hidden;
`;

const StyledBgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledBg = styled.img`
  width: 100%;
`;

const StyledItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledLogoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 15px;
  z-index: 2;
`;

const StyledLogo = styled.img`
  width: 65%;
`;

const StyledSubTitle = styled.span`
  font-weight: ${theme.fontWeight.light};
`;

const StyledTemple = styled.img`
  position: relative;
  width: 100%;
  margin-top: 2.8rem;
`;

const StyledBookListWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledStarWrapper = styled.div`
  position: absolute;
  overflow: hidden;
`;

const StyledStar = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
`;

const StyledBookWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 22px;
`;

const StyledAgoraName = styled.span`
  color: ${theme.color.title};
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.light};
`;

const StyledBookList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 80%;
  margin: 0 auto;
  gap: 30px;
`;

const StyledGoormWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  z-index: 11;
  width: 100%;
  height: 100%;
  gap: 150px;
  top: -80px;
`;

const StyledA = styled.img`
  position: absolute;
  top: 130px;
  left: 90px;
`;

const StyledB = styled.img`
  position: absolute;
  top: 80px;
  right: 30px;
`;

const StyledC = styled.img`
  position: absolute;
  top: 250px;
  right: 400px;
`;

// const StyledGoorm = styled.div<{ top: number }>`
//   position: relative;
//   top: ${(props) => props.top}px;
// `;

const StyledGoormImg = styled.img`
  ${media.mobile} {
    width: 100px;
    object-fit: cover;
  }
`;

const StyledModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;
