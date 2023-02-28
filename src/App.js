import tw, { styled } from "twin.macro"
const useUser = () => ({ username: "Tim" })

function App() {
  const { username: myUsername } = useUser()

  return (
    <Body>
      <Title>diligent</Title>
      <Wrapper>
        <Left></Left>
        <Main>
          {[{ msg: "Hello", username: "Tim" }].map(({ msg, username }) => {
            const isMe = myUsername === username
            return <Msg isMe={isMe}>{msg}</Msg>
          })}
          <MessageBox>
            <Input placeholder="Chat..."></Input>
            <Send>Send</Send>
          </MessageBox>
        </Main>
      </Wrapper>
    </Body>
  )
}

export default App

const Body = tw.div`min-h-screen bg-neutral-800 text-neutral-100`
const Title = tw.h1`text-5xl text-center py-5 bg-neutral-900`
const Wrapper = tw.div`flex w-full h-full`

const Left = tw.aside`h-full w-0 md:w-1/3 p-4 bg-neutral-800`

const Main = tw.main`relative h-[calc(100vh - 88px)] md:w-2/3 w-full p-4 bg-neutral-700`
const Msg = styled.div(({ isMe }) => [
  tw`p-2 rounded bg-neutral-800 text-neutral-100 w-fit max-w-[50%]`,
  isMe && tw`bg-neutral-100 text-neutral-800 ml-auto`,
])
const Input = tw.input`w-full bg-neutral-600 outline-none p-2 rounded`
const Send = tw.button`w-24 bg-neutral-600 outline-none p-2 rounded`
const MessageBox = tw.div`w-full flex gap-2 absolute left-0 bottom-0 bg-neutral-800 p-2 rounded-t-xl`
