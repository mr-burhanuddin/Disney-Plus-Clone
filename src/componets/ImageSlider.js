import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <div>
          <img src="/images/936362-h.webp" alt="slider" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/images/911819-h.webp" alt="slider" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/images/875084-h.webp" alt="slider" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/images/860218-h.webp" alt="slider" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/images/846652-h.webp" alt="slider" />
        </div>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 8px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: whitesmoke;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -5px;
  }
  .slick-next {
    right: -5px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  div {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      height: auto;
      width: 100%;
      max-height: 330px;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300s;
    }
  }
`;

export default ImageSlider;
