import React from "react";

const ListTodo = ({ todos }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <h1>No todo</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.isDone ? "Done" : "Processing"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListTodo;
