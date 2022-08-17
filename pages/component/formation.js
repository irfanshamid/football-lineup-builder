import PropTypes from "prop-types";

export default function Layout({ preset }) {
  const styles = {
    justifyContent: "center",
    minHeight: "500px",
    padding: "0",
  };

  const setPreset = () => {
      switch (preset) {
          case 1:
              return 
              break;
      
          default:
              break;
      }
  }

  return (
      <div style={styles}/>
  );
}

Layout.propTypes = {
  preset: PropTypes.number
};