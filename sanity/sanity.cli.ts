import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3pvnr3or',
    dataset: 'production'
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
  vite: (config) => config,
})
