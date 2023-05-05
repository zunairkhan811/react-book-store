import PropTypes from 'prop-types';

const Render = ({ renderData }) => (
  <>
    {renderData.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>
          By
          {item.author}
        </p>
        <button type="button" id="remove">Remove</button>
      </div>
    ))}
  </>
);
Render.propTypes = {
  renderData: PropTypes.string.isRequired,
};

export default Render;
