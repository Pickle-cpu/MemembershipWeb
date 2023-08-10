import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

function index() {

  const router = useRouter();

  async function handleClick() {
    const stripe = await loadStripe(
      'pk_test_51NCWiuA3JEG5mulpmDfvCJUil9T7U3W2wBFQ6IZuRBK5DoPBAgsiCMSZJpsF0oNmEzNrIHgLMnHF1QpD23Egx6u000Dw4NYNV5'
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1NDF32A3JEG5mulpQftHkKkY', quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  return (
    <Layout handleClick={() => {router.push("/post");}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      <View>
        <Testimonies />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;