import React from "react";
import Layout from "../components/layout";
import { useMutation, useQuery } from "urql";

/*
UseMutation test START
*/
// const UpdateTodo = `
//   mutation ExampleCharge($input: ChargePaymentMethodInput!) {
//     chargePaymentMethod(input: $input) {
//       transaction {
//         id
//         status
//       }
//     }
//   }
// `;

// const PlaygroundPage = () => {
//   const [input, setAmount] = React.useState({
//     paymentMethodId: "fake-valid-nonce",
//     transaction: { amount: 0 },
//   });

//   const [state, executeMutation] = useMutation(UpdateTodo);

//   const submit = React.useCallback(() => {
//     executeMutation({ input });
//   }, [executeMutation, input]);

//   return (
//     <Layout>
//       <div className="mt-10">
//         <input
//           className="border border-gray-600 mx-4 rounded"
//           onChange={(e) =>
//             setAmount({
//               paymentMethodId: "fake-valid-nonce",
//               transaction: { amount: e.target.value },
//             })
//           }
//           type="text"
//           placeholder="Transaction amount"
//         />
//         <button
//           className="px-4 bg-purple-900 rounded text-white"
//           disabled={state.fetching}
//           onClick={submit}
//         >
//           Add Transaction
//         </button>
//       </div>
//     </Layout>
//   );
// };
/*
UseMutation test END
*/

/*
UseQuery test START
*/
const Ping = `
  query {
    ping
  }
`;

const PlaygroundPage = () => {
  const [result] = useQuery({
    query: Ping,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Layout>
      <div className="p-4 bg-purple-900 text-white mt-10 w-max">
        {data.ping}
      </div>
      <div className="mt-10">
        Visit{" "}
        <a
          className="text-blue-600 text-lg"
          href="https://graphql.braintreepayments.com/"
        >
          https://graphql.braintreepayments.com/
        </a>{" "}
        and learn how to use Braintree GraphQl APIs.
      </div>
    </Layout>
  );
};
/*
UseQuery test END
*/

export default PlaygroundPage;
