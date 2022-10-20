const path = require('path');
const exec = require('child_process').exec;

//const isProduction = process.env.NODE_ENV == 'production';

module.exports = () => {
    return {
        target: 'node',
        entry: './src/index.ts',
        mode: 'production',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            {
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                        exec('node node_modules/@studydev/sdk/src/cli.js', (err, stdout, stderr) => {
                            if (stdout) process.stdout.write(stdout);
                            if (stderr) process.stderr.write(stderr);
                        });
                    });
                }
            }
        ],
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" }
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        externals: {
            sqlite3: 'commonjs sqlite3'
        }
    }
};
