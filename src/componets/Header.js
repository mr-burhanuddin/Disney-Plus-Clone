import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/userSlice";
import React, { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  });

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/Disney.svg" alt="logo" />
      </Logo>
      {!username ? (
        <LoginBtn onClick={handleAuth}>Login</LoginBtn>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <HomeIcon />
              <span>Home</span>
            </Link>
            <Link to="/home">
              <SearchIcon />
              <span>Search</span>
            </Link>
            <Link to="/home">
              <AddIcon />
              <span>WatchList</span>
            </Link>
            <Link to="/home">
              <StarIcon />
              <span>Originals</span>
            </Link>
            <Link to="/home">
              <MovieFilterIcon />
              <span>Movie</span>
            </Link>
            <Link to="/home">
              <LiveTvIcon />
              <span>Series</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={userphoto} alt={username} />
            <DropDown>
              <span onClick={handleAuth}>SignOut</span>
            </DropDown>
          </SignOut>
        </>
      )}
      {/* <LoginBtn onClick={handelAuth}>Login</LoginBtn> */}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  display: inline-block;
  max-height: 70px;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
  height: 100%;
  margin: 0px;
  padding: 0px;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    padding: 0 10px;

    svg {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin-right: 5px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 1px 0px;
      white-space: nowrap;
      position: relative;
      font-weight: 600;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginBtn = styled.a`
  background-color: rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    231.82deg,
    rgba(255, 255, 255, 0.48) 0%,
    rgba(255, 255, 255, 0.12) 100%
  );
  border-radius: 5px;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000000;
  }
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  border: 2px solid white;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
