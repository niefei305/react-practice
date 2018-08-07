import React from 'react';
import ButtonBase from "@material-ui/core/ButtonBase/index";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import LeftIcon from './LeftIcon';

const ListItem = styled.li`
    width: 200px;
    display: flex;
    align-items: center;
    margin: 0 0 16px;
    &:hover {
      svg {
        color: #0684BD;
      }
    }
`;

const ListLink = styled(NavLink)`
  display:flex;
  width: 100%;
  &.active {
    svg, p {
      color: #0684BD !important;
    }
  }
`;

const ListButton = styled(ButtonBase)`
  && {
    justify-content: normal;
    margin: 0 20px;
    width: ${props => props.open ? '100%' : '32px'};
    height: 32px;
  }
`;

const ListItemMsg = styled.p`
  display:inline-block;
  font-size: 14px;
  color:#444;
  padding: 0 0 0 20px;
  transform: translate3d(${props => props.open ? 10 : -10}px, 0, 0);
  opacity: ${props => props.open ? 1 : 0};
  transition: all .3s ease;
`;

export default (props) => {
  const { open, url } = props;
  return (
    <ListItem>
      <ListLink to={`/material/${url}`}>
        <ListButton open={open}>
          <LeftIcon open={open}/>
          <ListItemMsg open={open}>message</ListItemMsg>
        </ListButton>
      </ListLink>
    </ListItem>
  )
}