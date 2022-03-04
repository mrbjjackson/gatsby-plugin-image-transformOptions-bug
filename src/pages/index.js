import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }) => {
   const image1 = getImage(
      data.duotone1.nodes.find((img) => img.fluid.originalName === "test.jpg")
   );
   const image2 = getImage(
      data.duotone2.nodes.find((img) => img.fluid.originalName === "test.jpg")
   );
   return (
      <main>
         <h1>Hello</h1>
         <GatsbyImage image={image1} />
         <GatsbyImage image={image2} />
      </main>
   );
};

export default IndexPage;

export const pageQuery = graphql`
   query MyQuery {
      duotone1: allImageSharp {
         nodes {
            fluid {
               originalName
            }
            gatsbyImageData(
               width: 500
               transformOptions: {
                  duotone: { highlight: "#BBFFE6", shadow: "#51758D" }
               }
            )
         }
      }
      duotone2: allImageSharp {
         nodes {
            fluid {
               originalName
            }
            gatsbyImageData(
               width: 500
               transformOptions: {
                  duotone: { highlight: "#F1D283", shadow: "#000000" }
               }
            )
         }
      }
   }
`;

// export const pageQuery = graphql`
//    query MyQuery {
//       duotone1: allImageSharp {
//          nodes {
//             fluid {
//                originalName
//             }
//             gatsbyImageData(
//                width: 500
//                quality: 81
//                transformOptions: {
//                   duotone: { highlight: "#BBFFE6", shadow: "#51758D" }
//                }
//             )
//          }
//       }
//       duotone2: allImageSharp {
//          nodes {
//             fluid {
//                originalName
//             }
//             gatsbyImageData(
//                width: 500
//                quality: 80
//                transformOptions: {
//                   duotone: { highlight: "#F1D283", shadow: "#000000" }
//                }
//             )
//          }
//       }
//    }
// `;
