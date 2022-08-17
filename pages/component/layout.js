import PropTypes from "prop-types";

export default function Layout({ children }) {
  const styles = {
    justifyContent: "center",
    minHeight: "500px",
    padding: "0",
  };

  return (
      <main style={styles}>
        <section>{children}</section>
      </main>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};