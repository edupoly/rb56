function Courses() {
  return (
    <div className="m-5">
      <h1 className="text-center">Our Courses</h1>
      <ul className="courses d-flex flex-wrap m-3 list-unstyled justify-content-evenly">
        <li>
          <h2>React Basics</h2>
          <p>Learn the fundamentals of React development.</p>
          <span>$99.99</span>
        </li>
        <li>
          <h2>Advanced JavaScript</h2>
          <p>Deep dive into advanced JavaScript concepts and patterns.</p>
          <span>$149.99</span>
        </li>
        <li>
          <h2>Fullstack Development</h2>
          <p>Build complete web applications with a modern tech stack.</p>
          <span>$299.99</span>
        </li>
      </ul>
    </div>
  );
}
export default Courses;
