import React from 'react';
import Routes from './route';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '6vh',
    display: 'flex',
    flexDirection: 'row',
    borderBottomStyle: 'solid',
    borderBottomColor: "#042F19",
    borderBottomWidth: 2,
  },
  text: {
    color: "#042F19",
    padding: 5,
  },
  boldText: {
    color: "#042F19",
    padding: 5,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 15,
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    borderTopStyle: 'solid',
    borderTopColor: "#042F19",
    borderTopWidth: 2,
    alignItems: 'center',
  },
  body: {
    margin: "6vh 10px",
    display: 'flex',
    flex: 1,
    height: '84vh',
    flexDirection: 'column',
    placeItems: 'center',
    placeContent: 'center',
    overflow: 'hidden',
  }
};


function App() {

  const links = [
    {href: '/', label: 'Dashboard', title: 'Directs to homepage or dashboard'},
    {href: '/logout', label: 'Logout', title: 'Logs user out'},
  ]

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.boldText}>E-Library</div>
        </div>
        <div style={{...styles.container, justifyContent: 'flex-end'}}>
          { links.map((link, index)=>(
            <a key={index} 
              style={styles.text} 
              href={link.href} 
              title={link.title} 
              aria-label={link.title} 
            >{link.label}</a>
          )) }
        </div>
      </header>
      <div style={styles.body}>
        <Routes />
      </div>
      <footer style={styles.footer}>
        <div style={{...styles.container, placeContent: 'center'}}>
            <p style={styles.text}>E-Library is a platform to manage library operations effectively.
            User Interface provide complete platform accessiblity to all.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
