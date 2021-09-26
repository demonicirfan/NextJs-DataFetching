import fs from 'fs/promises';
import path from 'path';

import { Fragment } from 'react';

const ProductDetailPage = () => {
  return (
    <Fragment>
      <h1>title</h1>
      <p>Description</p>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const productId = params.pid;
}

export default ProductDetailPage;
