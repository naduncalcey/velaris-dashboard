import { styled } from "styled-components";

export const AppSideBar = styled.div`
  border-radius: 16px 0 0 16px;
  min-height: 850px;
  background-image: linear-gradient(220deg, #74d0fe, #957ce7, #94479e, #c14353);
  .image-container {
    padding-block: 40px 64px;
    img {
      width: auto;
      height: 36px;
      margin-inline-start: 4rem;
    }
  }
  //menu css
  .menu {
    display: grid;
    row-gap: 270px;
    &-link {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-block: 20px;
      &-content {
        margin-inline-start: 4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        &--bar {
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 64px;
          background-color: #fff;
        }
        &--text {
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          color: ${(props) => props.theme.navText};
          transition: 0.4s;
        }
        .svg {
            transition: 0.4s;
        }
      }
      &:hover {
        h2 {
          color: #fff !important;
        }
        svg {
          path {
            stroke: #fff !important;
          }
        }
      }
    }
  }
`;
