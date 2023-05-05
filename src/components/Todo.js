const TodoList = () => {
  const data = [
    {
      id: 1,
      title: 'Setup React website',
      author: 'Zunair',
    },
    {
      id: 2,
      title: 'Space and the world',
      author: 'Ali',
    },
    {
      id: 3,
      title: 'Science fiction',
      author: 'Akram ',
    },
  ];
  return (
    <>

      <div className="container">
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>
              By
              {item.author}
            </p>
            <button type="button" id="remove">Remove</button>
          </div>
        ))}
        <input type="text" id="title" placeholder="Your Title Here..." />
        <br />
        <input type="text" id="name" placeholder="Your Name Here..." />
        <br />
        <button type="submit">Add Book</button>
      </div>
    </>
  );
};

export default TodoList;
