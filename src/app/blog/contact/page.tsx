
export default function Page() {
  return (
    <div>
      <h1 className="text-purple-800 text-xl font-bold">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto natus,
        cumque laborum, error consequuntur eaque expedita numquam eveniet quas sunt
        possimus eligendi minus omnis sapiente sequi cum magni distinctio?
      </p>
      <div>
        <h2 className="text-indigo-500 text-lg font-bold">Get in Touch</h2>
        <ul style={{ listStyleType: "square" }}>
          <li>

            <span>Email: <a href="mailto:contact@example.com">contact@example.com</a></span>
          </li>
          <li>
            <span>Website: <a href="https://www.example.com">www.example.com</a></span>
          </li>
        </ul>

      </div>
    </div>
  );
}