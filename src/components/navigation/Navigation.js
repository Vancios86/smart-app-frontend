import './Navigation.css';

const Navigation = ({ onRouteChange, unloadUser }) => {
  return (
    <nav id='navigation'>
      <p
        onClick={() => {
          onRouteChange('signIn');
          unloadUser();
        }}
        className='f3 link dim black underline pa3 pointer'
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
