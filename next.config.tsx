module.exports = {
  async headers() {
    return [
      {
          source: '/:paths',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true'},
            { key: 'Access-Control-Allow-Origin', value: '*'},
            { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS, PATH, DELETE, POST, PUT'},
            { key: 'Access-Control-Allow-Headers', value: 'Authorization'}
          ],
      },
    ]
  }
}