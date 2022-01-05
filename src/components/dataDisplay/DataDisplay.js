import './DataDisplay.css';

const DataDisplay = ({ data }) => {
  const items = data.map((item) => `${item.name}: ${item.value} / `);
  return (
    <div className='dataDisplay'>
      <h4>Identified ingredients and prediction accuracy:</h4>
      <p>{items}</p>
    </div>
  );
};

export default DataDisplay;
