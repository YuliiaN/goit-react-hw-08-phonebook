import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section style={{ padding: '40px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px' }}>
        {title}
      </h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
