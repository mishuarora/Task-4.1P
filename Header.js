// src/Header.js
import React from 'react';
import { Menu } from 'semantic-ui-react';

function Header() {
  return (
    <Menu>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item name='home' />
      <Menu.Item name='articles' />
      <Menu.Item name='tutorials' />
    </Menu>
  );
}

export default Header;
