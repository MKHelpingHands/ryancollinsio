import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const NoUserMenu = ({ pathname }) => (
  <Menu
    direction="row"
    align="center"
    inline
    resposive={false}
    className={styles.rightMenu}
  >
    <Anchor
      className={pathname === '/login' ? 'navLink active' : 'navLink'}
      href="/login"
    >
      Log In
    </Anchor>
    <Anchor
      className={pathname === '/signup' ? 'navLink active' : 'navLink'}
      href="/signup"
    >
      Sign Up
    </Anchor>
  </Menu>
);

const SessionIcon = ({
  user,
}) => (
  <Box
    responsive={false}
    direction="row"
    justify="center"
  >
    <img
      src={user.avatar}
      className={styles.userAvatar}
    />
    <Heading tag="h4" className={styles.profileName}>
      {user.name}
    </Heading>
  </Box>
);

const SessionMenu = ({
  onLogout,
  user,
  pathname,
}) => (
  <span>
    {(() => { // eslint-disable-line
      if (user) {
        switch (user.role) {
          case 'user':
            return (
              <Menu
                icon={<SessionIcon user={user} />}
                inline={false}
                dropAlign={{ bottom: 'bottom' }}
                a11yTitle="Session"
                className={styles.rightMenu}
              >
                <Anchor href="/user/profile">
                  My Profile
                </Anchor>
                <Anchor href="/logout" onClick={onLogout}>
                  Logout
                </Anchor>
              </Menu>
            );
          case 'admin':
            return (
              <Menu
                icon={<SessionIcon user={user} />}
                dropAlign={{ bottom: 'bottom' }}
                a11yTitle="Session"
                inline={false}
                className={styles.rightMenu}
              >
                <Anchor
                  className={pathname === '/user/profile' ? 'navLink active' : 'navLink'}
                  href="/user/profile"
                >
                  My Profile
                </Anchor>
                <Anchor
                  className={pathname === '/admin/dashboard' ? 'navLink active' : 'navLink'}
                  href="/admin/dashboard"
                >
                  Dashboard
                </Anchor>
                <Anchor href="/logout" onClick={onLogout}>
                  Logout
                </Anchor>
              </Menu>
            );
          default:
            return (
              <NoUserMenu pathname={pathname} />
            );
        }
      } else {
        return (
          <NoUserMenu pathname={pathname} />
        );
      }
    })()}
  </span>
);

SessionMenu.propTypes = {
  user: PropTypes.object,
  pathname: PropTypes.string.isRequired,
};

export default cssModules(SessionMenu, styles);
