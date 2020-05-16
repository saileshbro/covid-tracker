import styled, { css } from 'styled-components'
export const LoginButtonComponent = styled.div`
  background-size: cover;
  height: 150px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  ${({ curve }) =>
    curve &&
    css`
      background-image: url(${curve});
    `}
`
export const LoginButton = styled.div`
  cursor: pointer;
  margin-top: 80px;
  background: #516be8;
  border-radius: 4px;
  display: inline-block;
  padding: 8px 20px;
  font-size: 14px;
  color: white;
`
export const AppBarContainer = styled.div`
  margin-top: 10px;
  .left {
    image {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 700;
    }
  }
`

export const Pagination = styled.div`
  position: fixed;
  bottom: 130px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`
export const Dots = styled.div`
  margin: 0 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #c4c4c4;
  ${({ active }) =>
    active &&
    css`
      background: #516be8;
    `}
`
export const SwipeableItem = styled.div`
  padding-top: 70px;
  height: calc(95vh - 10 8px);
  text-align: center;
  img {
    width: 60%;
  }
`
const commonInForm = `
    background: white;
    padding: 8px 10px;
    width: 55%;
    border: none;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);`
export const FormInput = styled.input`
  ${commonInForm}
`
export const FormSelect = styled.select`
  ${commonInForm}
`
export const SelectField = styled.div`
  position: relative;
  select {
    width: calc(55% + 20px);
    appearance: none;
  }
  img.icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 21%;
    top: 7px;
  }
`
export const KnowMoreContainer = styled.div`
  background: #c0daff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px;
  position: relative;

  .contents {
    width: 70%;
    max-width: 200px;

    p {
      margin: 0;
      font-size: 22px;
      font-weight: 900;
    }
  }

  .illustration {
    position: absolute;
    width: 100px;
    top: 0;
    bottom: 0;
    right: 30px;

    img {
      height: 100%;
      max-width: 130px;
    }
  }
`
export const KnowMoreButton = styled.button`
  background: #ff7854;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 0;
  color: #fff;
  padding: 7px 20px;
  margin-top: 12px;
  font-size: 12px;
  font-weight: 700;
`
export const HomeScreenStatCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px 15px;
  padding: 10px 15px;

  header {
    .right {
      img {
        cursor: pointer;
      }
    }

    .left {
      img {
        height: 28px;
        margin-right: 12px;
      }

      .statsOf {
        margin: 0;
        font-size: 12px;
        font-weight: 900;
      }

      .updated {
        font-size: 9px;
        margin: 0;
        color: #555555;
      }
    }
  }

  footer {
    p {
      font-style: italic;
      font-weight: normal;
      font-size: 9px;
      margin: 10px 0 0 0;
      text-align: right;
      color: var(--blue);
    }
  }

  .textButton {
    text-align: center;
    margin-top: 7px;

    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 900;
      color: var(--blue);
    }
  }
`
export const EventItemContainer = styled.div`
  background-color: white;
  box-shadow: var(--shadow);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  .content {
    .left {
      .title {
        margin: 8px 0;
        font-size: 14px;
      }
      .time {
        font-size: 13px;
        margin: 10px 0;
        color: #555;
      }
    }
    .right {
      padding: 20px;
      border-radius: 4px;
      margin-left: 10px;
      border-left: 1px solid #ddd;
      cursor: pointer;
      &:hover {
        background: rgba(#000, 0.1);
      }
      svg {
        path {
          stroke: var(--blue);
        }
      }
    }
  }
`
export const EventItemHeader = styled.header`
  position: relative;
  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
  .orgainzer {
    position: absolute;
    bottom: 3px;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    right: 0;
    color: #fff;
    p {
      padding: 10px 20px;
      margin: 0;
      font-size: 18px;
      font-weight: 700;
    }
  }
`
export const SecScreenHead = styled.div`
  header {
    .title {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
    }

    .subTitle {
      font-size: 12px;
      font-weight: #555555;
      margin: 0;
    }
  }
`
export const StaySafeContainer = styled.div`
  font-size: 36px;
  font-weight: 900;
  p {
    margin: 10px 0;
  }
`
export const IconButtonContainer = styled.div`
  display: inline-block;

  ${({ small }) =>
    small &&
    css`
      transform: scale(0.8);
    `}

  .shape {
    width: 56px;
    height: 56px;
    position: relative;
    border-radius: 8px;
    background-color: var(--blue);
    cursor: pointer;
  }

  p {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    margin: 3px 0;
  }

  img {
    height: 25px;
  }
`
export const BottomSheetContainer = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    animation: fadeIn 0.2s ease-in-out;
  }

  .contents {
    position: fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    left: 0;
    padding: 30px 0;
    right: 0;
    background: #ffffff;
    z-index: 999;
    animation: riseUp 0.2s ease-in-out;

    .line {
      position: absolute;
      border-radius: 1000px;
      left: 40%;
      right: 40%;
      top: 15px;
      height: 5px;
      background: #80808088;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes riseUp {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`
export const BottomSheetButtonContainer = styled.div`
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .iconText {
    align-items: center;

    .shape {
      height: 28px;
      width: 28px;
      border-radius: 8px;
      position: relative;
      margin-right: 10px;

      img {
        width: 16px;
        height: 16px;
      }
    }

    p {
      font-size: 14px;
      font-weight: 700;
    }
  }
`
export const TextListItemContainer = styled.div`
  border: 1px solid #f2f2f2;
  padding: 7px 15px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: var(--shadow);
  cursor: pointer;

  .iconText {
    .shape {
      width: 8px;
      height: 8px;
      background: var(--blue);
      margin-right: 10px;
      border-radius: 50%;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      margin: 0;
    }
  }
`
export const StatsProgressBarContainer = styled.div`
  padding: 8px 0;
  position: relative;
  flex: 1;
  header {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 12px;
      font-weight: 700;
      margin: 2px 0;
    }
  }
  .bar {
    position: absolute;
    height: 6px;
    border-radius: 6px;
    &.full {
      z-index: 11;
      width: 100%;
      background-color: #e5e5e5;
    }
    &.complete {
      z-index: 12;
    }
  }
`
export const NewsItemContainer = styled.div`
  background-color: white;
  box-shadow: var(--shadow);
  padding: 15px;
  margin-bottom: 15px;
  .left {
    .desc {
      font-size: 13px;
      margin-bottom: 0;
    }
  }
  header {
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 4px;
    }
    .title {
      font-size: 15px;
      font-weight: 700;
    }
    .time {
      font-size: 12px;
      color: #555;
    }
  }
  .right {
    img {
      width: 90px;
      height: 90px;
      border-radius: 4px;
      object-fit: cover;
    }
  }
`
