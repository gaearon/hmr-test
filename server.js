/*eslint no-console: 0*/
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import ClientDevConfig from './webpack.config'

const compiler = webpack(ClientDevConfig)
const server = new WebpackDevServer(compiler, ClientDevConfig.devServer)
server.listen(8080, 'localhost', () => {
  console.log('Webpack dev server listening on port', 8080)
})

