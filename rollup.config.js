import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import minify from 'rollup-plugin-babel-minify'

import pkg from './package.json'

const isProduction = process.env.BUILD === 'production';

export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
		},
		{
			file: pkg.module,
			format: 'es',
		},
	],
	plugins: [
		peerDepsExternal(),
		postcss(),
		babel({
			exclude: 'node_modules/**',
		}),
		resolve(),
		commonjs(),
		replace({
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		(isProduction && minify()),
	],
}
