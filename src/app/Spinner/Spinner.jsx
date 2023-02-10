import './styles.css';

export default function Spinner() {
  return (
    <div className='rootSpinner'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <h3>Loading...</h3>
    </div>
  );
}
