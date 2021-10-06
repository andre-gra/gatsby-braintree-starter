import React from "react";
import { Link, graphql } from "gatsby";
import Image from "../components/image";
import Layout from "../components/layout";

export default function Index({ data }) {
  const { edges: products } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="articles-wrapper">
        <div className="bg-gray-100 rounded-3xl flex flex-wrap justify-around py-10 my-10">
          <div className="w-full ml-8 mb-5">
            <span className="text-4xl border-b-4 border-gray-600">
              Products
            </span>
          </div>
          {products
            .filter((product) => product.node.frontmatter.title.length > 0)
            .map(({ node: product }) => {
              return (
                <div className="articles-list" key={product.id}>
                  <div className="text-center max-lg:mx-4 mx-8 my-10 p-10 bg-white rounded-xl shadow-xl">
                    <Link to={`product/${product.frontmatter.slug}`}>
                      <h2 className="my-2 font-bold text-3xl">
                        {product.frontmatter.title}
                      </h2>
                      {product.frontmatter.image && (
                        <Image
                          image={product.frontmatter.image}
                          className="rounded-xl"
                          alt={product.frontmatter.title}
                        />
                      )}
                      <p className="mt-2">{product.excerpt}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            id
            price
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 0.75
                )
              }
            }
            description
          }
        }
      }
    }
  }
`;
