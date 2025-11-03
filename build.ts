import dts from 'bun-plugin-dts-auto'

console.log('Building...')

await Bun.build({
  entrypoints: [
    './src/index.ts',
  ],
  outdir: './dist',
  target: 'bun',

  plugins: [
    dts({
      outdir: './dist',
    }),
  ],
})

console.log('Built!')
