const index = () => {
  return (
    <ul>
      <li>Page 1</li>
      <li>Page 2</li>
      <li>Page 3</li>
    </ul>
  );
};

export async function getStaticProps() {
  return { props };
}

export default index;
