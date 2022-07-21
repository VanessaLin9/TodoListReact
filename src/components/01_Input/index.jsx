const Input = () => {
  return (
    <section>
      <div className="input">
        <button className="add-btn">+</button>
        <input
          className="input-text"
          type="text"
          placeholder="Add New Test"
          // required
        />
      </div>
    </section>
  );
};

export default Input;
