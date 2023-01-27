const { Html, Main, NextScript, Head } = require("next/document")
// const { default: Head } = require("next/head")

const FriendDocument = () => {
    return (<>
    <Html>
        <Head></Head>
        <Main />
        <NextScript />
    </Html>
    </>)
}

export default FriendDocument