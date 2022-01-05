import './PredictionsCount.css';

const PredictionsCount = ({ name, entries }) => {
  return (
    <div className='predictionsCount centered'>
      <h4>
        {`${name}, so far you've made `}
        <span>{`${entries}`}</span>
        {` predictions`}
      </h4>
      <p>
        This app knows how to recognize ingredients from photos containing food.
        Just choose any photo from the web and copy paste the URL. Tested with
        .jpg and .png image format
      </p>
    </div>
  );
};

export default PredictionsCount;
