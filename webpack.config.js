import webpack from 'webpack'
import path from 'path'

export default {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    path.join(__dirname, 'modules', 'client.js')
  ],

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

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  devServer: {
    hot: true,
    contentBase: __dirname
  }
}

