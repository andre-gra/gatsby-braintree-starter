import React from "react";
import { graphql } from "gatsby";
import { formatPrice } from "../../helpers/currency-formatter";
import { useCart } from "react-use-cart";
import Layout from "../../components/layout";
import Image from "../../components/image";
import { Link } from "gatsby";

const ProductPage = ({ data: { markdownRemark } }) => {
  const { addItem } = useCart();
  const product = markdownRemark.frontmatter;

  product.quantity = 0;

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 mt-10 md:mt-20">
        {product.image && (
          <div className="md:pr-4">
            <Image
              className="rounded-md md:float-right"
              image={product.image}
              alt="Product Image"
            />
          </div>
        )}
        <div className={`flex flex-col justify-center`}>
          <div className="mb-4">
            <h1 className="text-4xl mb-4">{product.title}</h1>
            {product.price && (
              <div className="text-sm flex justify-start">
                <p className="font-extralight text-lg">Price</p>
                <p className="font-bold mx-2 text-lg">
                  {formatPrice(product.price)}
                </p>
              </div>
            )}
          </div>
          <div className="w-full">
            {product.specifications &&
              product.specifications.map((spec, index) => (
                <div
                  className="w-full flex text-sm justify-between items-between border-b mb-2 pb-1 text-right border-coffee-brown"
                  key={`${spec.key}-${index}`}
                >
                  <span className="font-extralight">{spec.key}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
          </div>
          <div className="mb-6">
            <button
              onClick={() => addItem(product, product.quantity + 1)}
              className="uppercase rounded-md bg-purple-800 text-white px-4 py-2 font-medium"
            >
              Add to cart
            </button>
          </div>
          <div className="my-6 mb-24">
            <h1 className="text-4xl font-bold text-center">Description</h1>
            <hr className="mt-6 mb-12 m-auto w-24 border-t-4 border-gray-400 rounded-sm" />
            <p className="prose md:w-4/5 m-auto">{product.description}</p>
          </div>
        </div>
      </div>
      <Link className="text-black block pb-10 text-2xl" to="/">
        ⬅ Return to list
      </Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProductQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 250)
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        id
        price
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED, aspectRatio: 0.75)
          }
        }
        description
      }
    }
  }
`;

export default ProductPage;
