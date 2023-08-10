import React from "react";
import { Authenticator, Flex, Heading, Text, useTheme, View } from "@aws-amplify/ui-react";
import Layout from "../components/Layout";
import { Footer, Logo, Stories } from "../ui-components";

function Post() {

  // 添加了一些额外的组件到验证页面
  const authComponents = {
    Header() {
      const { tokens } = useTheme();
      return (
        <Flex
          justifyContent={"center"}
          direction="column"
          paddingTop={tokens.space.xxxl}
          paddingBottom={tokens.space.xxl}
        >
          <Logo />
        </Flex>
      );
    },
  };

  return (

    <Authenticator components={authComponents} hideSignUp={true}>
      {/* 这两个是authenticator自带的 */}
      {({ signOut, user }) => (
        <Layout
          handleClick={() => signOut()}
          authText="Sign Out"
          username={user.attributes.email.split("@")[0]}
        >
          <View marginTop="50px" marginBottom="30px">
            <Heading level={2}>Welcome to our backstage</Heading>
            <Text marginTop="20px">
              Discover stories,thinking, and expertise from writers on any top{" "}
            </Text>
          </View>
          <Stories />
          <View marginTop="50px" marginBottom="50px">
            <Footer />
          </View>
        </Layout>
      )}
    </Authenticator>
  );
}
export default Post;