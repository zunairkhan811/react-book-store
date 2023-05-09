
const MyForm = () => (

  <>
    <form onSubmit={handleclick}>
    <input type="text" id="title" placeholder="Your Title Here..." />
    <br />
    <input type="text" id="name" placeholder="Your Name Here..." />
    <br />
    <button type="submit">Add Book</button>
    </form>
  </>
);

export default MyForm;
