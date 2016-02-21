import webpack from 'webpack'
import path from 'path'

const env = process.env.NODE_ENV

let entry = [
  path.join(__dirname, 'modules', 'client.js')
]

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
  })
]

if (env !== 'production') {
  entry = [
    ...entry,
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ]
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default {

  entry,

  plugins,

  output: {
    path: path.join(__dirname, '.build'),
    filename: '[name].js',
    publicPath: '/'
  },


  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url-loader?limit=10000'
      },
      { test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader?limit=10000'
      },
      { test: /\.css$/,
        loader: `style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader`
      }
    ]
  },

  devServer: {
    hot: true,
    contentBase: __dirname
  }
}

