const FilterCatsByName = (props) => {
  return (
    <div className='input-group mb-3 mt-4'>
      <input
        type='text'
        className='form-control'
        placeholder='Search a breed or leave empty to view all'
        aria-label='Username'
        aria-describedby='basic-addon1'
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};

export default FilterCatsByName;
