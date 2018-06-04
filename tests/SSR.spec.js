async function renderToString(runInNewContext, context) {
  const renderer = require('vue-server-renderer').createBundleRenderer(
    require.resolve('../dist/vue-ssr-server-bundle.json'), {
    runInNewContext,
    inject: true,
    template: `
    <!DOCTYPE html>
    <html lang="en">
      <head><title>Test</title></head>
      <body>
        <!--vue-ssr-outlet-->
      </body>
    </html>
  `
  })

  return await renderer.renderToString(context)
}

describe('Functional Component & SSR', () => {
  it('renderInNewContext: true, context: undefined', async () => {
    expect(await renderToString(true)).toEqual(expect.stringContaining('color: red'))
  })

  it('renderInNewContext: true, context: {}', async () => {
    expect(await renderToString(true, {})).toEqual(expect.stringContaining('color: red'))
  })

  it('renderInNewContext: false, context: undefined', async () => {
    expect(await renderToString(false)).toEqual(expect.stringContaining('color: red'))
  })

  it('renderInNewContext: false, context: {}', async () => {
    expect(await renderToString(false, {})).toEqual(expect.stringContaining('color: red'))
  })
})
