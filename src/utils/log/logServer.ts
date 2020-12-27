import chalkColors from './chalkColors'
const { yellow, cyan } = chalkColors()

export default function logServer(port: string | number) {
  console.log(
    cyan(`⚡ [Apollo Server] ready at -> ${yellow(`http://localhost:${port}/graphql`)}`)
  )
}
