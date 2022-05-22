import babel from '@rollup/plugin-babel'

export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        babel({
            presets: ["@babel/preset-react"]
        })
    ]
}
